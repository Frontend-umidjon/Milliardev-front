import { useEffect, useState } from "react";

export interface TelegramUser {
  id: number;
  first_name: string;
  username?: string;
  last_name?: string;
  language_code?: string;
}

export const useTelegramUser = () => {
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg?.initDataUnsafe?.user) {
      setUser(tg.initDataUnsafe.user);
    }
  }, []);

  return user;
};
