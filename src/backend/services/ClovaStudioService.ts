import {
  ChatCompletionRequest,
  ChatMessage,
  CommitGroup,
  HyperClovaXModel,
} from '@/types/clovaStudio';
import {
  chatCompletionResponseSchema,
  commitGroupSchema,
} from '@/types/clovaStudio.schema';

class ClovaStudioService {
  private baseUrl: string;
  private apiKey: string;
  private gwApiKey: string;

  constructor({
    baseUrl,
    apiKey,
    gwApiKey,
  }: {
    baseUrl: string;
    apiKey: string;
    gwApiKey: string;
  }) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
    this.gwApiKey = gwApiKey;
  }

  async createChatCompletion({
    model,
    prompts,
    systemPrompts = [],
    streaming = false,
    ...bodyOptions
  }: {
    model: HyperClovaXModel;
    prompts: string;
    systemPrompts?: string[];
    streaming?: boolean;
  } & Omit<ChatCompletionRequest['Body'], 'messages'>): Promise<CommitGroup[]> {
    const apiUrl = `${this.baseUrl}/v1/chat-completions/${model}`;
    const requestHeader: ChatCompletionRequest['Header'] = {
      'X-NCP-CLOVASTUDIO-API-KEY': this.apiKey,
      'X-NCP-APIGW-API-KEY': this.gwApiKey,
      'Content-Type': 'application/json',
      ...(streaming && { Accept: 'text/event-stream' }),
    };
    const systemMessages: ChatMessage[] = systemPrompts.map((prompt) => ({
      role: 'system',
      content: prompt,
    }));
    const userMessage: ChatMessage = {
      role: 'user',
      content: prompts,
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: requestHeader,
      body: JSON.stringify({
        messages: [...systemMessages, userMessage],
        ...bodyOptions,
      }),
    });
    const body = await response.json();
    const chatCompletionResponse = chatCompletionResponseSchema.parse(body);
    const data = commitGroupSchema.parse(
      JSON.parse(chatCompletionResponse.result.message.content),
    );

    return data;
  }

  // TODO: 테스트를 위한 토큰 계산 API
  async getChatTokenize({
    model,
    prompts,
    systemPrompts = [],
  }: {
    model: HyperClovaXModel;
    prompts: string;
    systemPrompts?: string[];
  }) {
    const apiUrl = `${this.baseUrl}/v1/api-tools/chat-tokenize/${model}`;
    const requestHeader: ChatCompletionRequest['Header'] = {
      'X-NCP-CLOVASTUDIO-API-KEY': this.apiKey,
      'X-NCP-APIGW-API-KEY': this.gwApiKey,
      'Content-Type': 'application/json',
    };
    const systemMessages: ChatMessage[] = systemPrompts.map((prompt) => ({
      role: 'system',
      content: prompt,
    }));
    const userMessage: ChatMessage = {
      role: 'user',
      content: prompts,
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: requestHeader,
      body: JSON.stringify({
        messages: [...systemMessages, userMessage],
      }),
    });
    const data = await response.json();

    return data;
  }
}

const clovaStudioService = new ClovaStudioService({
  baseUrl: 'https://clovastudio.apigw.ntruss.com/testapp',
  apiKey: process.env.NCP_CLOVA_STUDIO_API_KEY,
  gwApiKey: process.env.NCP_API_GW_API_KEY,
});

export default clovaStudioService;
