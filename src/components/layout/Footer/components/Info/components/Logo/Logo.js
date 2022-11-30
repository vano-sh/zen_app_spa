import LogoIcon from './assets/logo.svg'

export const Logo = ({ parentClassName }) => {
  return (
    <button className={`${parentClassName}__logo`}>
      <LogoIcon />
    </button>
  )
}
