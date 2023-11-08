export const useForm = (serviceName) => {
  const { api } = useFeathers()
  const service = api.service(serviceName)

  const get = (id, defValues) => {
    const $id = isRef(id) ? id : ref(id)
    const isNew = ref($id.value === 'new')
    const error = ref(null)
    const isPending = ref(false)
    const newData = ref(null)
    const hasLoaded = computed(() => !!data.value && !!clone.value)

    const data = computed(() =>
      newData.value
        ? newData.value
        : service.store.getFromStore($id.value)
    )
    const clone = computed(() => {
      const item = service.store.getFromStore($id.value)
      return item.value ? item.value.clone() : {}
    })

    if (isNew.value) {
      newData.value = service.new(defValues || {})
      isPending.value = false
    } else {
      const _get = async () => {
        try {
          const response = await service.get($id.value)
          console.log(response)
        } catch (err) {
          error.value = err
        } finally {
          isPending.value = false
        }
      }

      watch($id, async () => await _get(), { immediate: true })
    }

    const save = async () => {
      isPending.value = true

      try {
        return await clone.value.save()
      } catch (err) {
        error.value = err
      } finally {
        isPending.value = false
      }
    }

    return reactive({
      isNew: computed(() => isNew.value),
      isEdit: computed(() => !isNew.value),
      data,
      clone,
      isPending: computed(() => isPending.value),
      hasLoaded: computed(() => hasLoaded.value),
      error: computed(() => error.value)
    })
  }

  return {
    service,
    get
  }
}
