/* eslint-disable react-hooks/exhaustive-deps */
import { FormContext, LangContext } from 'contexts'
import { useContext, useEffect } from 'react'
import CloseIcon from './assets/close_icon.svg'
import { Title } from '../../common'
import { Form, Success } from './components'
import clsx from 'clsx'
import { useBodyHidden } from 'hooks'

export const Modal = ({ data }) => {
  const { title, form } = data

  console.log(title)

  const {
    isModalActive,
    setIsModalActive,
    isSuccessSubmit,
    setIsSuccessSubmit,
    setIsFormReset,
  } = useContext(FormContext)

  const { lang } = useContext(LangContext)

  const className = 'modal'

  const successMessage =
    lang === 'en'
      ? 'Order submit successfully!'
      : 'Заказ успешно отправлен!'

  useBodyHidden(isModalActive)

  useEffect(() => {
    if (isSuccessSubmit) {
      const timerId = setTimeout(() => {
        setIsModalActive(false)
        setIsSuccessSubmit(false)
      }, 2000)
      return () => clearTimeout(timerId)
    }
  }, [isSuccessSubmit])

  const handleModalCloseButtonClick = () => {
    setIsModalActive(false)
    setIsFormReset(true)
  }

  const classNames = clsx(className, {
    active: isModalActive,
  })

  return (
    <div className={classNames}>
      <div className={`${className}__body`}>
        <button
          className={`${className}__close`}
          onClick={handleModalCloseButtonClick}>
          <CloseIcon />
        </button>

        {/* {title && (
          <Title parentClassName={className}>{title.data}</Title>
        )} */}

        {form && (
          <Form parentClassName={className} form={form} />
        )}

        {isSuccessSubmit && (
          <Success parentClassName={className}>
            {successMessage}
          </Success>
        )}
      </div>
    </div>
  )
}
