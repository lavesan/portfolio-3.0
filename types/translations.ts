import { pt } from "@/translations/pt";

type TranslationsType = typeof pt;
type PathsToStringProps<T> = T extends string
  ? []
  : {
      [K in keyof T]: [K, ...PathsToStringProps<T[K]>];
    }[keyof T];

export type TranslationKey = Join<PathsToStringProps<TranslationsType>, ".">;

type Join<T extends string[], D extends string> = T extends []
  ? never
  : T extends [infer F]
  ? F
  : T extends [infer F, ...infer R]
  ? F extends string
    ? R extends string[]
      ? `${F}${D}${Join<R, D>}`
      : never
    : never
  : string;
