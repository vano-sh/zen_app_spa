import { Title, Text, Preview } from '../../common'

export const Cashback = ({ data }) => {
  const { name, title, texts, orderBtn } = data
  const className = 'cashback'

  return (
    <section className={className} data-name={name}>
      <div className={`${className}__wrapper`}>
        <div className={`${className}__body`}>
          {title && <Title title={title} />}

          {texts.length > 0 &&
            texts.map((text, index) => <Text key={index} text={text} />)}
        </div>
        <button
          className={`${className}__order-btn`}
          data-target={orderBtn.target}>
          {orderBtn.data}
        </button>
      </div>
    </section>
  )
}
