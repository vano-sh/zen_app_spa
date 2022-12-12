import { Columns, Info, Copyright } from './components'

export const Footer = ({ data }) => {
  const { name, columns, info } = data
  const className = 'footer'

  return (
    <footer className={className} data-name={name}>
      <div className={`${className}__wrapper`}>
        <Columns parentClassName={className} columns={columns} />
        <Info parentClassName={className} info={info} />
        <Copyright
          parentClassName={className}
          copyright={info.copyright}
        />
      </div>
    </footer>
  )
}
