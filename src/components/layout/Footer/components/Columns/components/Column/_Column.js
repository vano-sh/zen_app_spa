import { useRef } from 'react'
import { useAnimateRef } from 'hooks'
import { Title } from '../../../../../../common'
import { Item } from './components/Item'

export const Column = ({ parentClassName, column }) => {
  const { title, links } = column

  const listRef = useRef(null)

  useAnimateRef(listRef)

  return (
    <div className={`${parentClassName}__column`}>
      <Title title={title} />
      <ul className={`${parentClassName}__list`} ref={listRef}>
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
