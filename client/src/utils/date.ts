import { format, parseISO } from "date-fns";
import { enUS, ru } from "date-fns/locale";

import { SupportedLanguages } from "@/types/Languages";
import { FormattedDate } from "@/types/formattedDate";

import firstLetterUpper from "@utils/firstLetterUpper";

const formatDate = (locale: SupportedLanguages): FormattedDate => {
  const now = new Date();
  const isoString = now.toISOString();
  const date = parseISO(isoString);

  const localeMap = {
    eng: enUS,
    ru: ru,
  };

  const chosenLocale = localeMap[locale] || enUS;

  const day = format(date, "eeee", { locale: chosenLocale });
  const time = format(date, "HH:mm");
  const specificDate = format(date, "dd MMMM yyyy", { locale: chosenLocale });

  return {
    day: firstLetterUpper(day),
    time,
    specificDate,
  };
};

export default formatDate;
