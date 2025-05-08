// redux/api/telegram.ts
import { mainApi } from "./index";

const telegramApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    sendTelegramMessage: build.mutation({
      query: (body: { userId: number; projectId: string }) => ({
        url: "api/api/telegram/send-project-info",
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useSendTelegramMessageMutation } = telegramApi;
