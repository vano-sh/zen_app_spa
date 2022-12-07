import { ChatbotContext } from 'contexts'
import { useState } from 'react'

export const ChatbotProvider = ({ children }) => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [faq, setFaq] = useState(null)
  const [messages, setMessages] = useState([])
  const [isBotWriting, setIsBotWriting] = useState(false)

  const value = {
    isChatOpen,
    setIsChatOpen,
    messages,
    setMessages,
    faq,
    setFaq,
    isBotWriting,
    setIsBotWriting,
  }

  return (
    <ChatbotContext.Provider value={value}>
      {children}
    </ChatbotContext.Provider>
  )
}
