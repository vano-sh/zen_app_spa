import { useProgressBar } from 'hooks'

export const ProgressBar = () => {
  useProgressBar()

  return (
    <div className='progress-bar' data-name='progress-bar'></div>
  )
}
