import { getRequestConfig } from 'next-intl/server';
import type { RequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }): Promise<RequestConfig> => {
  if (!locale) {
    locale = 'en'; // Usar inglés como idioma por defecto
  }

  try {
    const messages = (await import(`../messages/${locale}.json`)).default;
    
    return {
      messages,
      locale
    };
  } catch (error) {
    console.error(`Error loading messages for locale ${locale}:`, error);
    // Si hay un error, intentar cargar el inglés como fallback
    const messages = (await import(`../messages/en.json`)).default;
    return {
      messages,
      locale: 'en'
    };
  }
}); 