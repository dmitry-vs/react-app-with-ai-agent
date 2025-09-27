import { useTranslation as useI18nTranslation } from "react-i18next";
import type { Locale } from "../locales/types";

// Create a type that represents all possible translation keys
type TranslationKeys = {
  [K in keyof Locale]: Locale[K] extends Record<string, any>
    ? {
        [P in keyof Locale[K]]: Locale[K][P] extends Record<string, any>
          ? `${K}.${P & string}.${keyof Locale[K][P] & string}`
          : `${K}.${P & string}`;
      }[keyof Locale[K]]
    : K;
}[keyof Locale];

// Type for interpolation values
type InterpolationValues = {
  start?: number;
  end?: number;
  total?: number;
  [key: string]: any;
};

export const useTranslation = () => {
  const { t: originalT, ...rest } = useI18nTranslation();

  const t = (key: TranslationKeys, options?: InterpolationValues) => {
    return originalT(key, options);
  };

  return {
    t,
    ...rest,
  };
};

