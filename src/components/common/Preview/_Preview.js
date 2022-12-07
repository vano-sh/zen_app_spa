import { SliderContext } from 'contexts'
import { useRef, useContext, useEffect } from 'react'
import { useAnimateRef } from 'hooks'

export const Preview = ({ image }) => {
  const previewRef = useRef(null)

  const { setPreviewDetails, setSlides } =
    useContext(SliderContext)

  useAnimateRef(previewRef)

  useEffect(() => {
    setSlides((prev) => [...prev, image])
  }, [image])

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

  return (
    <button
      className='preview'
      ref={previewRef}
      onClick={handlePreviewClick}>
      <img src={image.source} alt={image.alternate} />
    </button>
  )
}
