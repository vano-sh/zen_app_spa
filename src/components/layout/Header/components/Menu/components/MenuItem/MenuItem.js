import { BurgerContext } from 'contexts'
import { useContext } from 'react'
import { scrollToSection } from 'utils/helpers'

export const MenuItem = ({ parentClassName, item }) => {
  const { setIsBurgerActive } = useContext(BurgerContext)

  const handleScrollToSection = (targetName) => {
    scrollToSection(targetName)
    setIsBurgerActive(false)
  }

  return (
    <li
      className={`${parentClassName}__item`}
      onClick={() => handleScrollToSection(item.target)}>
      <button>{item.data}</button>
    </li>
  )
}
