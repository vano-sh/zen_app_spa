import { Columns, Info } from './components'

export const Footer = ({ data }) => {
  const className = 'footer'
  const { columns, info } = data

  return (
    <footer className={className}>
      <div className={`${className}__wrapper`}>
        <Columns parentClassName={className} columns={columns} />
        <Info parentClassName={className} info={info} />
      </div>
    </footer>
  )
}
