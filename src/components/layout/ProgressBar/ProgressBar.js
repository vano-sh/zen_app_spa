import { useProgressBar } from 'hooks'
import { useRef } from 'react'

export const ProgressBar = () => {
  const barRef = useRef(null)

  useProgressBar(barRef.current)

  return (
    <div className='progress-bar' data-name='progress-bar'></div>
  )
}
