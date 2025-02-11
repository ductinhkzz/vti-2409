export const getMediaUrl = (url?: string) => (url ? new URL(url, import.meta.env.VITE_API_URL).href : undefined);
