import { SliderContext } from 'contexts'
import { useState } from 'react'

export const SliderProvider = ({ children }) => {
  const [previewDetails, setPreviewDetails] = useState(null)
  const [slides, setSlides] = useState([])
  const [activeSlideID, setActiveSlideID] = useState(null)
  const [slideDescription, setSlideDescription] = useState('')

  const value = {
    previewDetails,
    setPreviewDetails,
    slides,
    setSlides,
    slideDescription,
    setSlideDescription,
    activeSlideID,
    setActiveSlideID,
  }

  return (
    <SliderContext.Provider value={value}>
      {children}
    </SliderContext.Provider>
  )
}
