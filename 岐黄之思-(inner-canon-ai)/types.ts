
export enum Language {
  ZH = 'zh',
  EN = 'en',
}

export enum Role {
  USER = 'user',
  AI = 'ai',
}

export interface Message {
  id: number;
  role: Role;
  text: string;
  isError?: boolean;
}
