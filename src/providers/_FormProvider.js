import { FormContext } from 'contexts'
import { useState } from 'react'

export const FormProvider = ({ children }) => {
  const [isModalActive, setIsModalActive] = useState(false)
  const [isSuccessSubmit, setIsSuccessSubmit] = useState(false)
  const [isFormReset, setIsFormReset] = useState(false)

  const value = {
    isModalActive,
    setIsModalActive,
    isSuccessSubmit,
    setIsSuccessSubmit,
    isFormReset,
    setIsFormReset,
  }

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}
