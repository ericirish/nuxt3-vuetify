export const useFormValidations = () => {
  const valid = ref(false)

  return {
    valid,
    rules: {
      required: (value) => {
        return !!value || 'Required'
      },
      hasValue: v => this.required(v),
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        return !value || pattern.test(value) || 'Invalid e-mail'
      },
      isMoney: (v) => {
        const isCurrency = /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/.test(v)
        const numVal = ('' + v).replace(/\$|\.|,/g, '')
        const isNum = /^-?\d+$/.test(numVal)
        return (!v || (isCurrency && isNum)) || 'Invalid Money Format'
      },
      isMatch: (matchingValue, msg = 'Values must match') => v => (matchingValue === v || msg),
      min: amt => v => (v.length >= amt) || `Must be more at least ${amt} characters long`,
      isPositiveNumber: (value) => {
        const pattern = /^[+]?\d+([.]\d+)?$/
        return !value || pattern.test(value) || 'Must be a positive Number'
      },
      isNumber: (value) => {
        const pattern = /^\d+$/
        return !!value || pattern.test(value) || 'Must be a Number'
      },

      isEightCharacters: v =>
        v.length >= 8 || 'Must be at least 8 characters',
      includesNumber: (value) => {
        const pattern = /\d/
        return !value || pattern.test(value) || 'Must include a number'
      },
      includesSymbol: (value) => {
        const pattern = /[$@#%&+=*-/:-?{-~!"^_`[\]]/
        return !value || pattern.test(value) || 'Must include a symbol'
      },
      includesUppercase: (value) => {
        const pattern = /[A-Z]/
        return (
          !value || pattern.test(value) || 'Must include an uppercase letter'
        )
      },
      includesLowercase: (value) => {
        const pattern = /[a-z]/
        return (
          !value || pattern.test(value) || 'Must include a lowercase letter'
        )
      },
      isPhoneNumber: (value) => {
        const pattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
        return !value || pattern.test(value) || 'Must be a valid phone number'
      },
      maxChars (maxChars) {
        return v => (v || '').length <= maxChars || `Must be ${maxChars} characters or less`
      },
      betweenZeroAndOneHundred: (v) => {
        if (!v) { return true }
        if (v >= 1 && v <= 100) { return true }
        return 'Number has to be between 1 and 100'
      }
    }
  }
}
