import { useEffect } from "react";
import { useSendTelegramMessageMutation } from "../redux/api/telegram";

const TelegramInit = ({ projectId }: { projectId: string }) => {
  const [sendTelegramMessage] = useSendTelegramMessageMutation();

  useEffect(() => {
    const tg = window?.Telegram?.WebApp;
    if (tg && tg.initDataUnsafe?.user) {
      const userId = tg.initDataUnsafe.user.id;

      sendTelegramMessage({ userId, projectId })
        .unwrap()
        .then(() => {
          console.log("Сообщение отправлено");
        })
        .catch((err) => {
          console.error("Ошибка отправки:", err);
        });
    }
  }, [projectId, sendTelegramMessage]);

  return null; // или спиннер, если надо
};

export default TelegramInit;
