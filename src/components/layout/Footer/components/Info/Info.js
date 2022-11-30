import { Text } from '../../../../common'
import { Copyright } from './components/Copyright'
import { Logo } from './components/Logo'

export const Info = ({ parentClassName, info }) => {
  const { texts, copyright } = info

  return (
    <div className={`${parentClassName}__info`}>
      <Logo parentClassName={parentClassName} />

      {texts.length > 0 &&
        texts.map((text, index) => (
          <Text key={index} text={text} />
        ))}

      <Copyright
        parentClassName={parentClassName}
        copyright={copyright}
      />
    </div>
  )
}
