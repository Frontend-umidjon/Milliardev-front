// src/types/telegram.d.ts
export {};

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData: string;
        initDataUnsafe: {
          user?: {
            id: number;
            first_name: string;
            username?: string;
            last_name?: string;
            language_code?: string;
          };
        };
        sendData?: (data: string) => void;
        close?: () => void;
      };
    };
  }
}
