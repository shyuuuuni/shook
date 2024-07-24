import {
  ChatCompletionRequest,
  ChatMessage,
  HyperClovaXModel,
  SummarizationOptions,
} from '@/types/clovaStudio';
import {
  chatCompletionResponseSchema,
  summarizationResponseSchema,
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
  } & Omit<ChatCompletionRequest['Body'], 'messages'>) {
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
      cache: 'no-store',
    });
    const body = await response.json();
    const data = chatCompletionResponseSchema.parse(body);

    return data;
  }

  async getSummarization(options: SummarizationOptions) {
    const apiUrl = `${this.baseUrl}/v1/api-tools/summarization/v2/332270f2309c4070a98ec7a962b8bec5`;
    const headers: ChatCompletionRequest['Header'] = {
      'X-NCP-CLOVASTUDIO-API-KEY': this.apiKey,
      'X-NCP-APIGW-API-KEY': this.gwApiKey,
      'Content-Type': 'application/json',
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(options),
      cache: 'no-store',
    });
    const body = await response.json();
    const data = summarizationResponseSchema.parse(body);

    return data;
  }

  async getChatTokenSize({
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
