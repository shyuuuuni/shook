import { z } from 'zod';
import {
  chatCompletionResponseSchema,
  commitGroupSchema,
  filterResultSchema,
  summarizationResponseSchema,
} from './clovaStudio.schema';

// Chat Completion API
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
export type ChatCompletionRequest = {
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
export type ChatCompletionResponse = z.infer<
  typeof chatCompletionResponseSchema
>;
export type CommitGroup = z.infer<typeof commitGroupSchema>[number];
export type FilterResult = z.infer<typeof filterResultSchema>;

// Summarization API
export type SummarizationRequest = {
  Header: {
    'X-NCP-CLOVASTUDIO-API-KEY': string;
    'X-NCP-APIGW-API-KEY': string;
    'X-NCP-CLOVASTUDIO-REQUEST-ID'?: string;
    'Content-Type': 'application/json';
  };
  Body: SummarizationOptions;
};
export type SummarizationResponse = z.infer<typeof summarizationResponseSchema>;
export type SummarizationOptions = {
  texts: string[];
  autoSentenceSplitter?: boolean;
  segCount?: number;
  segMaxSize?: number;
  segMinSize?: number;
  includeAiFilter?: boolean;
  postProcess?: boolean;
  postProcessMinSize?: number;
  postProcessMaxSize?: number;
};
