import {
  ChatCompletion,
  ChatMessage,
  HyperClovaXModel,
} from '@/types/clovaStudio';

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
  } & Omit<ChatCompletion['Request']['Body'], 'messages'>) {
    const apiUrl = `${this.baseUrl}/v1/chat-completions/${model}`;
    const requestHeader: ChatCompletion['Request']['Header'] = {
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
    const data = (await response.json()) as ChatCompletion['Response']['Body'];

    return data;
  }
}

const clovaStudioService = new ClovaStudioService({
  baseUrl: 'https://clovastudio.stream.ntruss.com/testapp',
  apiKey: process.env.NCP_CLOVA_STUDIO_API_KEY,
  gwApiKey: process.env.NCP_API_GW_API_KEY,
});

export default clovaStudioService;
