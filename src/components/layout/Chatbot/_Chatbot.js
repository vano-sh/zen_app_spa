import { ChatbotContext } from 'contexts'
import { useContext } from 'react'
import { useBodyHidden } from 'hooks'
import { Open, Chat } from './components'
import clsx from 'clsx'

export const Chatbot = () => {
  const { isChatOpen, setIsChatOpen } =
    useContext(ChatbotContext)

  const className = 'chatbot'
  const classNames = clsx(className, {
    active: isChatOpen,
  })

  useBodyHidden(isChatOpen)

  return (
    <div
      className={classNames}
      onClick={() => setIsChatOpen(false)}>
      <div onClick={(event) => event.stopPropagation()}>
        <Open parentClassName={className} />
        <Chat />
      </div>
    </div>
  )
}
