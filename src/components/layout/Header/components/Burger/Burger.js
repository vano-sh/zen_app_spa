import { BurgerContext } from 'contexts'
import { useContext } from 'react'
import clsx from 'clsx'

export const Burger = ({ parentClassName }) => {
  const { isBurgerActive, setIsBurgerActive } =
    useContext(BurgerContext)

  const className = `${parentClassName}__burger`
  const classNames = clsx(className, {
    active: isBurgerActive,
  })

  const btnClick = () => {
    setIsBurgerActive((prev) => !prev)
  }

  return (
    <button className={classNames} onClick={btnClick}>
      <span></span>
    </button>
  )
}
