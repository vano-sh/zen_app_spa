import { useRef, useContext, useEffect } from 'react'
import { SliderContext } from 'contexts'
import { useAnimateRef } from 'hooks'

export const Preview = ({ image }) => {
  const previewRef = useRef(null)

  const { setPreviewDetails, setSlides } =
    useContext(SliderContext)

  useAnimateRef(previewRef)

  const handlePreviewClick = () => {
    const { top, left, height, width } =
      previewRef.current.getBoundingClientRect()

    const details = {
      id: image.id,
      src: image.source,
      alt: image.alternate,
      top,
      left,
      height,
      width,
    }

    setPreviewDetails(details)
  }

  useEffect(() => {
    setSlides((prev) => [...prev, image])
  }, [image])

  return (
    <button
      className='preview'
      ref={previewRef}
      onClick={handlePreviewClick}>
      <img src={image.source} alt={image.alternate} />
    </button>
  )
}
