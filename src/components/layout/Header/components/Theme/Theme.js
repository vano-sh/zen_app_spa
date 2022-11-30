import SunIcon from './assets/sun.svg'
import MoonIcon from './assets/moon.svg'

export const Theme = ({ parentClassName }) => {
  const theme = 'light'

  return (
    <button className={`${parentClassName}__theme`}>
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}
