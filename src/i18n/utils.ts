
import { languages, defaultLocale } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');

  if (lang in languages) return lang as keyof typeof languages;

  return defaultLocale;
}

export function useTranslatedPath(lang: keyof typeof languages) {
  return function translatePath(path: string, l: string = lang) {
    return l === defaultLocale ? path : `/${l}${path}`
  }
}