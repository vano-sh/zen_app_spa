import { SliderContext } from 'contexts'
import { useContext, useRef } from 'react'
import clsx from 'clsx'
import { useAnimateDescripton } from 'hooks'

export const Description = ({ parentClassName, isHidden }) => {
  const { previewDetails, slideDescription } =
    useContext(SliderContext)

  const descriptionRef = useRef(null)

  const hiddenClassName = clsx({
    hidden: isHidden,
  })

  useAnimateDescripton(descriptionRef, slideDescription)

  return (
    <div
      ref={descriptionRef}
      className={`${parentClassName}__description ${hiddenClassName}`}
      style={{ width: `${previewDetails.width}px` }}></div>
  )
}
