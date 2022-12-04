import { ChatbotContext } from 'contexts'
import { useContext } from 'react'
import { Logo, Notice } from './components'
import CloseIcon from './assets/close.svg'

export const Header = ({ parentClassName }) => {
  const { setIsChatOpen } = useContext(ChatbotContext)

  return (
    <div className={`${parentClassName}__header`}>
      <Logo parentClassName={parentClassName} />
      <Notice parentClassName={parentClassName} />
      <button
        className={`${parentClassName}__close`}
        onClick={() => setIsChatOpen(false)}>
        <CloseIcon />
      </button>
    </div>
  )
}
