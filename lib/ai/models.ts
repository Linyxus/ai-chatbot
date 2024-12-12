// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'claude-3-5-sonnet',
    label: 'Claude 3.5 Sonnet',
    apiIdentifier: 'claude-3-5-sonnet-latest',
    description: 'Anthropic\'s latest, most advanced model.',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'gpt-4o-mini';
