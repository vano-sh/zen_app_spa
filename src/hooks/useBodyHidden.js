import { useEffect } from 'react'

export const useBodyHidden = (prop) => {
  useEffect(() => {
    if (prop) {
      document.body.classList.add('hidden')
    } else {
      document.body.classList.remove('hidden')
    }
  }, [prop])

  return null
}
