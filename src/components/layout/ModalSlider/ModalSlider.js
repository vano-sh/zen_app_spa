import { SliderContext } from 'contexts'
import { useContext, useEffect, useRef, useState } from 'react'
import { Slider, Description } from './components'
import { debounce } from 'utils/helpers'

export const ModalSlider = () => {
  const [isDescriptionHidden, setIsDescriptionHidden] =
    useState(true)
  const [isImageBoxBackward, setIsImageBoxBackward] =
    useState(false)
  const [isSliderCentered, setIsSliderCentered] = useState(true)

  const { previewDetails, setPreviewDetails } =
    useContext(SliderContext)

  const sliderRef = useRef(null)

  const className = 'modal-slider'

  useEffect(() => {
    const debouncedhandleSliderСentering = debounce(
      handleSliderСentering,
      500
    )

    window.addEventListener(
      'resize',
      debouncedhandleSliderСentering
    )

    return () =>
      window.removeEventListener(
        'resize',
        debouncedhandleSliderСentering
      )
  }, [])

  useEffect(() => {
    let timerID

    if (!previewDetails) return

    const screenHeight = window.innerHeight
    const screenWidth = window.innerWidth

    sliderRef.current.style.top = previewDetails.top + 'px'
    sliderRef.current.style.left = previewDetails.left + 'px'
    sliderRef.current.style.height = previewDetails.height + 'px'
    sliderRef.current.style.width = previewDetails.width + 'px'

    setTimeout(() => {
      setIsDescriptionHidden(false)
      sliderRef.current.style.top =
        screenHeight / 2 - previewDetails.height / 2 + 'px'
      sliderRef.current.style.left =
        screenWidth / 2 - previewDetails.width / 2 + 'px'
    }, 500)

    return () => clearTimeout(timerID)
  }, [previewDetails])

  useEffect(() => {
    if (!isImageBoxBackward) return

    sliderRef.current.style.top = `${previewDetails.top}px`
    sliderRef.current.style.left = `${previewDetails.left}px`

    const timerID = setTimeout(() => {
      setIsImageBoxBackward(false)
      setPreviewDetails(null)
      setIsDescriptionHidden(false)
    }, 500)

    return () => clearTimeout(timerID)
  }, [isImageBoxBackward])

  useEffect(() => {
    if (!sliderRef.current) return

    const screenHeight = window.innerHeight
    const screenWidth = window.innerWidth

    sliderRef.current.style.top =
      screenHeight / 2 -
      sliderRef.current.offsetHeight / 2 +
      'px'
    sliderRef.current.style.left =
      screenWidth / 2 - sliderRef.current.offsetWidth / 2 + 'px'

    setIsSliderCentered(true)
  }, [isSliderCentered])

  const handleCloseClick = () => {
    setIsImageBoxBackward(true)
    setIsDescriptionHidden(true)
  }

  const handleSliderСentering = () => {
    setIsSliderCentered(false)
  }

  if (!previewDetails) return null

  return (
    <div className={`${className}`}>
      <Description
        parentClassName={className}
        isHidden={isDescriptionHidden}
        currentSlideID={previewDetails.id}
      />

      <Slider
        ref={sliderRef}
        width={previewDetails.width}
        currentSlideID={previewDetails.id}
        isImageBoxBackward={isImageBoxBackward}
        onCloseClick={handleCloseClick}
      />

      <div
        className={`${className}__overlay`}
        onClick={handleCloseClick}></div>
    </div>
  )
}
