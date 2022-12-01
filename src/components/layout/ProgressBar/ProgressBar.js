import { useEffect } from 'react'

export const ProgressBar = () => {
  useEffect(() => {
    const heightDocument = window.outerHeight
    const heightWindow = window.innerHeight
    console.log({ window })
    console.log()
    console.log(heightDocument)
    console.log(heightWindow)

    const width = Math.round(heightDocument / heightWindow)

    console.log(width)
  }, [])

  const width = () => {
    const heightDocument = window.outerHeight
    const heightWindow = window.innerHeight

    return Math.round(heightDocument / heightWindow)
  }

  return (
    <div
      className='progress-bar'
      style={{
        width: width(),
      }}></div>
  )
}
