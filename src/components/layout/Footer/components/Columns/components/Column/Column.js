import { Title } from '../../../../../../common'
import { Item } from './components/Item'

export const Column = ({ parentClassName, column }) => {
  const { title, links } = column

  return (
    <div className={`${parentClassName}__column`}>
      <Title title={title} />
      <ul className={`${parentClassName}__list`}>
        {links.length > 0 &&
          links.map((link, index) => (
            <Item
              key={index}
              parentClassName={parentClassName}
              link={link}
            />
          ))}
      </ul>
    </div>
  )
}
