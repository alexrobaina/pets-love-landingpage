export const useTranslations = (messages: string, key: any) => {
  // Access the message using the key
  return messages[key] || key
}
