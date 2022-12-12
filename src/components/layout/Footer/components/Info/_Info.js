import { useRef } from 'react'
import { useAnimateRef } from 'hooks'
import { Text } from '../../../../common'
import { Logo } from './components/Logo'

export const Info = ({ parentClassName, info }) => {
  const { texts } = info

  const infoRef = useRef(null)

  useAnimateRef(infoRef)

  return (
    <div className={`${parentClassName}__info`} ref={infoRef}>
      <Logo parentClassName={parentClassName} />

      {texts.length > 0 &&
        texts.map((text, index) => (
          <Text key={index} text={text} />
        ))}
    </div>
  )
}
