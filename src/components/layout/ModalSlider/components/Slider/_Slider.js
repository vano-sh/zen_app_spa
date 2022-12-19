import { SliderContext } from 'contexts'
import {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import CloseIcon from './assets/close.svg'
import PrevIcon from './assets/prev.svg'
import NextIcon from './assets/next.svg'

export const Slider = forwardRef(
  (
    { width, currentSlideID, isImageBoxBackward, onCloseClick },
    ref
  ) => {
    const { slides, setSlideDescription } =
      useContext(SliderContext)

    const [activeSlideID, setActiveSlideID] =
      useState(currentSlideID)
    const [touchStartX, setTouchStartX] = useState(null)
    const [touchEndX, setTouchSEndX] = useState(null)

    const className = 'slider'

    const slidesRef = useRef(null)

    useEffect(() => {
      setActiveSlideID(currentSlideID)
    }, [isImageBoxBackward])

    useEffect(() => {
      if (!activeSlideID) return

      setSlideDescription(slides[activeSlideID - 1].alternate)
    }, [activeSlideID])

    useEffect(() => {
      if (!touchStartX || !touchEndX) return

      if (touchStartX < touchEndX) {
        setActiveSlideID((prevID) =>
          prevID > 1 ? prevID - 1 : prevID
        )
      }

      if (touchStartX > touchEndX) {
        setActiveSlideID((prevID) =>
          prevID < slides.length ? prevID + 1 : prevID
        )
      }
    }, [touchStartX, touchEndX])

    const handlePrevClick = () => {
      setActiveSlideID((prevID) =>
        prevID > 1 ? prevID - 1 : prevID
      )
    }
    const handleNextClick = () => {
      setActiveSlideID((prevID) =>
        prevID < slides.length ? prevID + 1 : prevID
      )
    }

    const handleSliderTouchStart = (event) => {
      const startX = Math.floor(event.changedTouches[0].clientX)
      setTouchStartX(startX)
    }
    const handleSliderTouchEnd = (event) => {
      const endX = Math.floor(event.changedTouches[0].clientX)
      setTouchSEndX(endX)
    }

    return (
      <div
        className={className}
        ref={ref}
        onTouchStart={handleSliderTouchStart}
        onTouchEnd={handleSliderTouchEnd}>
        {!isImageBoxBackward && (
          <button
            className={`${className}__close`}
            onClick={onCloseClick}>
            <CloseIcon />
          </button>
        )}

        <div
          className={`${className}__slides`}
          style={{
            left:
              activeSlideID !== 1
                ? -(width * (activeSlideID - 1)) + 'px'
                : 0,
          }}
          ref={slidesRef}>
          {slides.length > 0 &&
            slides.map((slide) => (
              <img
                className={`${className}__slide`}
                key={slide.id}
                style={{ width: `${width}px` }}
                src={slide.source}
                alt={slide.alternate}
              />
            ))}
        </div>

        {!isImageBoxBackward && (
          <button
            className={`${className}__prev`}
            onClick={handlePrevClick}
            disabled={activeSlideID === 1 ? true : false}>
            <PrevIcon />
          </button>
        )}

        {!isImageBoxBackward && (
          <button
            className={`${className}__next`}
            onClick={handleNextClick}
            disabled={activeSlideID === slides.length}>
            <NextIcon />
          </button>
        )}

        <div className={`${className}__pagination`}>
          {`${activeSlideID} / ${slides.length}`}
        </div>
      </div>
    )
  }
)
