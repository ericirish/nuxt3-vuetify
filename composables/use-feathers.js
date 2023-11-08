export function useFeathers () {
  const { $api: api } = useNuxtApp()
  return { api }
}
