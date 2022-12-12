import { useRef } from 'react'
import { useAnimateRef } from 'hooks'
import CopyrightIcon from './assets/copyright.svg'

export const Copyright = ({ parentClassName, copyright }) => {
  const copyrightRef = useRef(null)

  useAnimateRef(copyrightRef)

  return (
    <div
      className={`${parentClassName}__copyright`}
      ref={copyrightRef}>
      <a href={copyright.url}>
        <CopyrightIcon />
      </a>
    </div>
  )
}
