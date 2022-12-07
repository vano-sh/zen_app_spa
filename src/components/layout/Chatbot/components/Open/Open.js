import { ChatbotContext, LangContext } from 'contexts'
import { memo, useContext } from 'react'
import { useFetch } from 'hooks'
import { API_BASE_URL } from 'constants/api'
import chatbot from './assets/chatbot.gif'

export const Open = memo(({ parentClassName }) => {
  const className = parentClassName
    ? `${parentClassName}__open`
    : 'open'

  const { isChatOpen, setIsChatOpen, setFaq } =
    useContext(ChatbotContext)
  const { lang } = useContext(LangContext)

  const { getData } = useFetch(API_BASE_URL)

  const handleOpenClick = () => {
    setIsChatOpen(true)

    getData(`${lang}/faq`).then(
      (data) => setFaq(data),
      (error) => console.error(error)
    )
  }

  return (
    <button
      className={className}
      type='button'
      onClick={handleOpenClick}
      disabled={isChatOpen}>
      <img src={chatbot} alt='chatbot' />
    </button>
  )
})
