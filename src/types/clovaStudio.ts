export type HyperClovaXModel = 'HCX-003' | 'HCX-DASH-001';
export type ChatMessage = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};
export type AiFilter = {
  name: 'discrimination' | 'insult' | 'sexualHarassment';
  score: -1 | 0 | 1 | 2;
  result: 'OK' | 'ERROR';
};
export type ChatCompletion = {
  Model: HyperClovaXModel;
  Request: {
    Header: {
      'X-NCP-CLOVASTUDIO-API-KEY': string;
      'X-NCP-APIGW-API-KEY': string;
      'X-NCP-CLOVASTUDIO-REQUEST-ID'?: string;
      'Content-Type': 'application/json';
      Accept?: 'text/event-stream';
    };
    Body: {
      messages: ChatMessage[];
      temperature?: number;
      topK?: number;
      topP?: number;
      repeatPenalty?: number;
      stopBefore?: string[];
      maxTokens?: number;
      includeAiFilters?: boolean;
      seed?: number;
    };
  };
  Response: {
    Header: {
      'Content-Type': 'application/json';
    };
    Body: {
      status: {
        code: string;
        message: string;
      };
      result: {
        message: ChatMessage;
        stopReason: 'length' | 'end_token' | 'stop_before';
        inputLength: number;
        inputTokens: string[];
        outputLength: number;
        outputTokens: string[];
        probs: number;
      };
      aiFilter?: AiFilter[];
    };
  };
};
