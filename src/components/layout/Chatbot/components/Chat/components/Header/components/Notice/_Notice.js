import { ChatbotContext, LangContext } from 'contexts'
import { useContext } from 'react'
import clsx from 'clsx'

export const Notice = ({ parentClassName }) => {
  const { isBotWriting } = useContext(ChatbotContext)
  const { lang } = useContext(LangContext)

  const writingText = lang === 'en' ? 'writing' : 'печатает'

  const className = `${parentClassName}__notice`
  const classNames = clsx(className, {
    writing: isBotWriting,
  })

  return (
    <>
      {isBotWriting && (
        <div className={classNames}>
          <span>{writingText} </span>
          <span className='dot '>. </span>
          <span className='dot second'>. </span>
          <span className='dot third'>.</span>
        </div>
      )}
    </>
  )
}
