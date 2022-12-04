import { ChatbotContext, LangContext } from 'contexts'
import { useContext, useState } from 'react'
import ArrowIcon from './assets/arrow.svg'
import clsx from 'clsx'

export const Footer = ({ parentClassName }) => {
  const [messageSubmit, setMessageSubmit] = useState('')
  const [isSymbolIncorrect, setIsSymbolIncorrect] =
    useState(false)

  const { setMessages } = useContext(ChatbotContext)
  const { lang } = useContext(LangContext)

  const classNameInput = `${parentClassName}__input`
  const classNamesInput = clsx(classNameInput, {
    error: isSymbolIncorrect,
  })

  const messageError =
    lang === 'en' ? 'Symbol incorrect!' : 'Неправильный символ!'

  const handleInputChange = (event) => {
    const value = event.target.value

    const regexpRU = /[а-яА-Я]/gm
    const regexpEN = /[a-zА-Я]/gm

    if (lang === 'en' && value.search(regexpRU) >= 0) {
      setIsSymbolIncorrect(true)
      return
    }
    if (lang === 'ru' && value.search(regexpEN) >= 0) {
      setIsSymbolIncorrect(true)
      return
    }

    setIsSymbolIncorrect(false)
    setMessageSubmit(value)
  }

  const handleFormSubit = (event) => {
    event.preventDefault()

    if (!messageSubmit) return

    setMessages((messages) => [
      ...messages,
      {
        talker: 'user',
        messageType: 'question',
        message: messageSubmit,
      },
    ])
  }

  return (
    <div className={`${parentClassName}__footer`}>
      <form
        className={`${parentClassName}__form`}
        onSubmit={handleFormSubit}>
        <label className={classNamesInput}>
          {isSymbolIncorrect && <span>{messageError}</span>}
          <input
            type='text'
            placeholder='Message...'
            value={messageSubmit}
            onChange={handleInputChange}
          />
        </label>

        <button
          className={`${parentClassName}__submit`}
          type='submit'>
          <ArrowIcon />
        </button>
      </form>
    </div>
  )
}
