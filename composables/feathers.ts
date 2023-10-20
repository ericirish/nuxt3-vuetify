// Provides access to Feathers clients
export function useFeathers () {
  const { $api: api } = useNuxtApp()
  return { api }
}
