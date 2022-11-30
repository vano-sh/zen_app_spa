import CopyrightIcon from './assets/copyright.svg'

export const Copyright = ({ parentClassName, copyright }) => {
  return (
    <a
      className={`${parentClassName}__copyright`}
      href={copyright.url}>
      <CopyrightIcon />
    </a>
  )
}
