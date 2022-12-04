import { FormContext, LangContext } from 'contexts'
import {
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react'
import { Field, Connection, Policy } from './components'
import { useFetch } from 'hooks'
import {
  validateName,
  validateTel,
  validateEmail,
} from 'utils/helpers'

export const Form = ({ parentClassName, form }) => {
  const { fieldName, fieldTel, fieldEmail } = form

  const {
    isSuccessSubmit,
    setIsSuccessSubmit,
    isFormReset,
    setIsFormReset,
  } = useContext(FormContext)

  const { lang } = useContext(LangContext)

  const [name, setName] = useState('')
  const [isValidName, setIsValidName] = useState(false)
  const [tel, setTel] = useState('')
  const [isValidTel, setIsValidTel] = useState(false)
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [connection, setConnection] = useState('')
  const [isValidConnection, setIsValidConnection] =
    useState(false)
  const [isPolicyChecked, setIsPolicyChecked] = useState(true)
  const [isSending, setIsSending] = useState(false)

  const { postData } = useFetch()

  const isSubmitDisabled = !(
    isValidName &&
    isValidTel &&
    isValidEmail &&
    isValidConnection &&
    isPolicyChecked
  )

  const handleFieldChange = useCallback((event) => {
    const type = event.target.type
    const value = event.target.value

    if (type === 'text') {
      setName(value)
      setIsValidName(validateName(value))
    }
    if (type === 'tel') {
      setTel(value)
      setIsValidTel(validateTel(value))
    }
    if (type === 'email') {
      setEmail(value)
      setIsValidEmail(validateEmail(value))
    }
  }, [])

  const handleConnectionChange = useCallback((event) => {
    const connection = event.target.value
    setConnection(connection)

    connection
      ? setIsValidConnection(true)
      : setIsValidConnection(false)
  }, [])

  const handlePolicyChange = useCallback(() => {
    setIsPolicyChecked((prev) => !prev)
  }, [])

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const order = {
      type: 'order',
      date: new Date().toLocaleString(),
      name,
      tel,
      email,
      connection,
      policy: isPolicyChecked,
    }

    setIsSending(true)

    postData(`${lang}/orders.json`, order).then(
      () => {
        let timerID = setTimeout(() => {
          setIsSending(false)
          setIsSuccessSubmit(true)
        }, 1000)
        return () => clearTimeout(timerID)
      },
      (error) => console.error({ error })
    )
  }

  useEffect(() => {
    if (isSuccessSubmit || isFormReset) {
      setName('')
      setIsValidName(false)
      setTel('')
      setIsValidTel(false)
      setEmail('')
      setIsValidEmail(false)
      setConnection('')
      setIsValidConnection(false)
      setIsFormReset(false)
    }
  }, [isSuccessSubmit, isFormReset])

  return (
    <>
      <form
        className={`${parentClassName}__form`}
        onSubmit={handleFormSubmit}>
        {fieldName && (
          <Field
            parentClassName={parentClassName}
            details={fieldName}
            value={name}
            isValidField={isValidName}
            onFieldChange={handleFieldChange}
          />
        )}
        {fieldTel && (
          <Field
            parentClassName={parentClassName}
            details={fieldTel}
            value={tel}
            isValidField={isValidTel}
            onFieldChange={handleFieldChange}
          />
        )}
        {fieldEmail && (
          <Field
            parentClassName={parentClassName}
            details={fieldEmail}
            value={email}
            isValidField={isValidEmail}
            onFieldChange={handleFieldChange}
          />
        )}

        {form?.connection && (
          <Connection
            parentClassName={parentClassName}
            details={form.connection}
            connection={connection}
            isValidConnection={isValidConnection}
            onConnectionChange={handleConnectionChange}
          />
        )}

        {form?.policy && (
          <Policy
            parentClassName={parentClassName}
            policy={form.policy}
            isPolicyChecked={isPolicyChecked}
            onPolicyChange={handlePolicyChange}
          />
        )}

        <button
          className={`${parentClassName}__btn`}
          type='submit'
          disabled={isSubmitDisabled}>
          {form.buttonText}
        </button>
      </form>

      {isSending && (
        <div className={`${parentClassName}__sending`}>
          {lang === 'en' ? 'Sending...' : 'Отправка...'}
        </div>
      )}
    </>
  )
}
