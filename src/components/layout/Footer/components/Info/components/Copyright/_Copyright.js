import { useRef } from 'react'
import { useAnimateRef } from 'hooks'
import CopyrightIcon from './assets/copyright.svg'

export const Copyright = ({ parentClassName, copyright }) => {
  const copyrightRef = useRef(null)

  useAnimateRef(copyrightRef)

  return (
    <a
      className={`${parentClassName}__copyright`}
      href={copyright.url}
      ref={copyrightRef}>
      <CopyrightIcon />
    </a>
  )
}
