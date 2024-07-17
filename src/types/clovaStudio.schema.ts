import { z } from 'zod';

export const chatCompletionResponseSchema = z.object({
  status: z.object({
    code: z.literal('20000'),
    message: z.string(),
  }),
  result: z.object({
    message: z.object({
      role: z.enum(['system', 'user', 'assistant']),
      content: z.string(),
    }),
    stopReason: z.enum(['length', 'end_token', 'stop_before']).optional(),
    inputLength: z.number().optional(),
    outputLength: z.number().optional(),
    probs: z.number().optional(),
  }),
  aiFilter: z
    .array(
      z.object({
        name: z.string(),
        score: z.number(),
        result: z.string(),
      }),
    )
    .optional(),
});
export const commitGroupSchema = z.array(
  z.object({
    taskTitle: z.string(),
    description: z.array(z.string()),
  }),
);
export const filterResultSchema = z.object({
  isEffective: z.boolean(),
});
