import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
}

interface TelegramState {
  user: TelegramUser | null;
}

const initialState: TelegramState = {
  user: null,
};

const telegramSlice = createSlice({
  name: "telegram",
  initialState,
  reducers: {
    setTelegramUser(state, action: PayloadAction<TelegramUser>) {
      state.user = action.payload;
    },
  },
});

export const { setTelegramUser } = telegramSlice.actions;
export default telegramSlice.reducer;
