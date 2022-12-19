import LogoIcon from './assets/logo.svg'

export const Logo = ({ parentClassName }) => {
  return (
    <div className={`${parentClassName}__logo`}>
      <LogoIcon />
    </div>
  )
}
