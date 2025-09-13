// lib/ai/providers.ts
import { customProvider, extractReasoningMiddleware, wrapLanguageModel } from 'ai';
import { openai } from '@ai-sdk/openai';

export const myProvider = customProvider({
    languageModels: {
        // chat multimodal (text + image)
        'chat-model': openai('gpt-4o'),

        // model orientat pe reasoning (poți folosi și gpt-5 dacă îl ai activ în cont)
        'chat-model-reasoning': wrapLanguageModel({
            model: openai('o3-mini'),
            middleware: extractReasoningMiddleware({ tagName: 'think' }),
        }),

        // ieftin/rapid pentru titluri
        'title-model': openai('gpt-4.1-mini'),

        // generare artifacte / taskuri generale
        'artifact-model': openai('gpt-4o-mini'),
    },
});
