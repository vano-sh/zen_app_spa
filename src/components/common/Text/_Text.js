import { useRef } from 'react'
import { useAnimateRef } from 'hooks'

export const Text = ({ text }) => {
  const className = 'copy'

  const textRef = useRef(null)

  useAnimateRef(textRef)

  return (
    <p className={className} ref={textRef}>
      {text}
    </p>
  )
}
