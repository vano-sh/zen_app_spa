import { BurgerContext } from 'contexts'
import { useState } from 'react'

export const BurgerProvider = ({ children }) => {
  const [isBurgerActive, setIsBurgerActive] = useState(false)

  const value = {
    isBurgerActive,
    setIsBurgerActive,
  }

  return (
    <BurgerContext.Provider value={value}>
      {children}
    </BurgerContext.Provider>
  )
}
