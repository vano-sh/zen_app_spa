import { useRef } from 'react'

export const Title = ({ title }) => {
  const { data, priority } = title
  
  const className = 'title'

  const titleRef = useRef()

  switch (priority) {
    case 6:
      return (
        <h6 className={className} ref={titleRef}>
          {data}
        </h6>
      )

    case 5:
      return (
        <h5 className={className} ref={titleRef}>
          {data}
        </h5>
      )

    case 4:
      return (
        <h4 className={className} ref={titleRef}>
          {data}
        </h4>
      )

    case 3:
      return (
        <h3 className={className} ref={titleRef}>
          {data}
        </h3>
      )

    case 2:
      return (
        <h2 className={className} ref={titleRef}>
          {data}
        </h2>
      )

    default:
      return (
        <h1 className={className} ref={titleRef}>
          {data}
        </h1>
      )
  }
}
