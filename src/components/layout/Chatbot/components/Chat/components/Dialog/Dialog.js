import { ChatbotContext, LangContext } from 'contexts'
import { useContext, useEffect, useRef } from 'react'
import { Message } from './components'
import { scrollToLastMessage } from 'utils/helpers'

export const Dialog = ({ parentClassName }) => {
  const dialogRef = useRef(null)

  const {
    isChatOpen,
    faq,
    messages,
    setMessages,
    setIsBotWriting,
  } = useContext(ChatbotContext)
  const { lang } = useContext(LangContext)

  const botBaseAnswer =
    lang === 'en'
      ? 'Basic answer to the question:'
      : 'Базовый ответ на вопрос:'

  useEffect(() => {
    if (!isChatOpen || !faq) return

    const dialog = dialogRef.current

    scrollToLastMessage(dialog)

    if (messages.length === 0) {
      setIsBotWriting(true)

      const timerID = setTimeout(() => {
        setMessages([
          {
            talker: 'bot',
            messageType: 'startMessage',
            message: faq?.startMessage,
          },
        ])

        setIsBotWriting(false)
      }, 1000)

      return () => clearTimeout(timerID)
    }

    if (messages.length === 1) {
      setIsBotWriting(true)

      const timerID = setTimeout(() => {
        setMessages((messages) => [
          ...messages,
          {
            talker: 'bot',
            messageType: 'questions',
            message: faq?.list,
          },
        ])

        setIsBotWriting(false)
      }, 1000)

      return () => clearTimeout(timerID)
    }

    if (messages[messages.length - 1].talker === 'user') {
      setIsBotWriting(true)

      const userQuestion = messages[messages.length - 1].message

      const faqAnswer = faq.list.find(
        (faqItem) => faqItem.question === userQuestion
      )?.answer

      const botAnswer =
        faqAnswer ?? `${botBaseAnswer} '${userQuestion}'`

      const timerID = setTimeout(() => {
        setMessages((messages) => [
          ...messages,
          {
            talker: 'bot',
            messageType: 'answer',
            message: botAnswer,
          },
        ])

        setIsBotWriting(false)
      }, 1000)

      return () => clearTimeout(timerID)
    }
  }, [
    faq,
    messages,
    setMessages,
    isChatOpen,
    botBaseAnswer,
    setIsBotWriting,
  ])

  return (
    <div
      className={`${parentClassName}__dialog`}
      ref={dialogRef}>
      {messages.length > 0 &&
        messages.map((message, index) => (
          <Message
            key={index}
            talker={message.talker}
            messageType={message.messageType}
            message={message.message}
          />
        ))}
    </div>
  )
}
