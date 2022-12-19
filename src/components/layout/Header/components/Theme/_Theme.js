import { useContext } from 'react'
import { ThemeContext } from 'contexts'
import SunIcon from './assets/sun.svg'
import MoonIcon from './assets/moon.svg'

export const Theme = ({ parentClassName }) => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      className={`${parentClassName}__theme`}
      onClick={toggleTheme}>
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}
