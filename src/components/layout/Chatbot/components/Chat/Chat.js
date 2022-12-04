import { ChatbotContext } from 'contexts'
import { useContext } from 'react'
import { Header, Dialog, Footer } from './components'
import clsx from 'clsx'

export const Chat = () => {
  const { isChatOpen } = useContext(ChatbotContext)

  const className = 'chat'
  const classNames = clsx(className, {
    open: isChatOpen,
  })

  return (
    <div className={classNames}>
      <Header parentClassName={className} />
      <Dialog parentClassName={className} />
      <Footer parentClassName={className} />
    </div>
  )
}
