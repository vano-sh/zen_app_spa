import { useContext } from 'react'
import { BurgerContext } from 'contexts'
import clsx from 'clsx'

export const Menu = ({ menuItems, parentClassName }) => {
  const { isBurgerActive } = useContext(BurgerContext)

  const className = `${parentClassName}__menu`
  const classNames = clsx(className, {
    active: isBurgerActive,
  })

  return (
    <ul className={classNames}>
      {menuItems.length > 0 &&
        menuItems.map((item, index) => (
          <li
            key={index}
            className={`${parentClassName}__item`}
            data-target={item.target}>
            {item.data}
          </li>
        ))}
    </ul>
  )
}
