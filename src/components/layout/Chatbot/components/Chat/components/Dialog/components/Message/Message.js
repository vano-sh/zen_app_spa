import { ChatbotContext } from 'contexts'
import { useContext } from 'react'
import clsx from 'clsx'

export const Message = ({ talker, messageType, message }) => {
  const className = 'message'
  const classNames = clsx(className, {
    bot: talker === 'bot',
    user: talker === 'user',
  })

  const { setMessages } = useContext(ChatbotContext)

  const handleQuestionClick = (event) => {
    const question = event.currentTarget.textContent

    setMessages((messages) => [
      ...messages,
      {
        talker: 'user',
        messageType: 'question',
        message: question,
      },
    ])
  }

  if (talker === 'bot') {
    switch (messageType) {
      case 'questions':
        return (
          <div className={classNames}>
            <ol className={`${className}__list`}>
              {message.map((item, index) => (
                <li key={index} className={`${className}__item`}>
                  <span>{item.id}.</span>

                  <button onClick={handleQuestionClick}>
                    {item.question}
                  </button>
                </li>
              ))}
            </ol>

            <span className={`${className}__date`}>
              {/* getCurrentTime() */}
              05:05
            </span>
          </div>
        )

      default:
        return (
          <div className={classNames}>
            {message}

            <span className={`${className}__date`}>
              {/* getCurrentTime() */}
              05:05
            </span>
          </div>
        )
    }
  }

  if (talker === 'user') {
    return (
      <div className={classNames}>
        {message}

        <span className={`${className}__date`}>
          {/* getCurrentTime() */}
          05:05
        </span>
      </div>
    )
  }
}
