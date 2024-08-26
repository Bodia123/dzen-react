import { SupportedLanguages } from "@/types/Languages";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocaleState {
  locale: SupportedLanguages;
}

const initialState: LocaleState = {
  locale: "ru",
};

const localeSlice = createSlice({
  name: "locale",
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<SupportedLanguages>) => {
      state.locale = action.payload;
    },
  },
});

export const { setLocale } = localeSlice.actions;

export default localeSlice.reducer;
