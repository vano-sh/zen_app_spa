export const Preview = ({ image }) => {
  const { id, source, alternate } = image

  return <img src={source} alt={alternate} />
}
