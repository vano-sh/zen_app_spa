import { BurgerContext } from 'contexts'
import { useContext } from 'react'
import { MenuItem } from './components/MenuItem'
import clsx from 'clsx'

export const Menu = ({ menuItems, parentClassName }) => {
  const { isBurgerActive } = useContext(BurgerContext)

  const currentClassName = `${parentClassName}__menu`
  const classNames = clsx(currentClassName, {
    active: isBurgerActive,
  })

  return (
    <ul className={classNames}>
      {menuItems.length > 0 &&
        menuItems.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            parentClassName={parentClassName}
          />
        ))}
    </ul>
  )
}
