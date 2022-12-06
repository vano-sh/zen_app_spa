import { scrollToTop } from 'utils/helpers'
import LogoIcon from './assets/logo.svg'

export const Logo = ({ parentClassName }) => {
  return (
    <button
      className={`${parentClassName}__logo`}
      onClick={scrollToTop}>
      <LogoIcon />
    </button>
  )
}
