export const DEFAULT_CHAT_MODEL: string = 'chat-model';

export interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  { id: 'chat-model', name: 'GPT-4o', description: 'Multimodal (text + imagine)' },
  { id: 'chat-model-reasoning', name: 'o3-mini (Reasoning)', description: 'Optimizat pentru reasoning' }
];
