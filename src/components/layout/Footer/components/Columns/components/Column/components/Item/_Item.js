import { useRef } from 'react'

export const Item = ({ parentClassName, link }) => {
  const refItem = useRef()

  const getTypeLink = (link) => {
    if (
      link.includes('.svg') ||
      link.includes('.png') ||
      link.includes('.jpg')
    ) {
      return 'image'
    } else if (link.search(/[a-z]*@[a-z]*\.(com|ru)/gy) !== -1) {
      return 'email'
    } else {
      return 'text'
    }
  }

  switch (getTypeLink(link.data)) {
    case 'email':
      return (
        <li className={`${parentClassName}__item`} ref={refItem}>
          <a href={`mailto:${link.url}`}> {link.data} </a>
        </li>
      )
    case 'image':
      return (
        <li className={`${parentClassName}__item`} ref={refItem}>
          <a href={link.url}>
            <img src={link.data} alt={link.data} />
          </a>
        </li>
      )
    default:
      return (
        <li className={`${parentClassName}__item`} ref={refItem}>
          <a href={link.url}> {link.data} </a>
        </li>
      )
  }
}
