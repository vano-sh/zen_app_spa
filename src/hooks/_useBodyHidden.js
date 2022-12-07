import { useEffect } from 'react'

export const useBodyHidden = (prop) => {
  useEffect(() => {
    prop
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden')
  }, [prop])

  return null
}
