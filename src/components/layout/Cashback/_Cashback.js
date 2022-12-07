import { FormContext } from 'contexts'
import { useContext, useRef } from 'react'
import { useAnimateRef } from 'hooks'
import { Title, Text } from '../../common'

export const Cashback = ({ data }) => {
  const { name, title, texts, orderBtn } = data
  const className = 'cashback'

  const { setIsModalActive } = useContext(FormContext)

  const btnRef = useRef(null)

  useAnimateRef(btnRef)

  const handleModalButtonActiveClick = () => {
    setIsModalActive(true)
  }

  return (
    <section className={className} data-name={name}>
      <div className={`${className}__wrapper`}>
        <div className={`${className}__body`}>
          {title && <Title title={title} />}

          {texts.length > 0 &&
            texts.map((text, index) => (
              <Text key={index} text={text} />
            ))}
        </div>
        <button
          className={`${className}__order-btn`}
          data-target={orderBtn.target}
          onClick={handleModalButtonActiveClick}
          ref={btnRef}>
          {orderBtn.data}
        </button>
      </div>
    </section>
  )
}
