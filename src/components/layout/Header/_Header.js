import {
  Logo,
  Menu,
  Burger,
  Theme,
  Language,
} from './components'

export const Header = ({ data }) => {
  const { name, menuItems } = data
  const className = 'header'

  return (
    <header className={className} data-name={name}>
      <div className={`${className}__wrapper`}>
        <nav className={`${className}__nav`}>
          <Logo parentClassName={className} />
          <Menu
            menuItems={menuItems}
            parentClassName={className}
          />
        </nav>
        <Language parentClassName={className} />
        <Theme parentClassName={className} />
        <Burger parentClassName={className} />
      </div>
    </header>
  )
}
