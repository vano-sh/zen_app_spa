import { Title, Text, Preview } from '../../common'
import { Link } from './ui/Link'

export const SectionInfo = ({ data }) => {
  const { name, title, texts, links, image } = data
  const className = 'section-info'

  return (
    <section className={className} data-name={name}>
      <div className={`${className}__wrapper`}>
        <div className={`${className}__body`}>
          {title && <Title title={title} />}
          {texts.length > 0 &&
            texts.map((text, index) => <Text key={index} text={text} />)}

          {links && (
            <div className={`${className}__links`}>
              {links.length > 0 &&
                links.map((link, index) => <Link key={index} link={link} />)}
            </div>
          )}
        </div>

        <div className={`${className}__image`}>
          <Preview image={image} />
        </div>
      </div>
    </section>
  )
}
