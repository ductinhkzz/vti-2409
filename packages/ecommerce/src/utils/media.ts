export const getMediaUrl = (url: string) => new URL(url, import.meta.env.VITE_API_URL).href;
