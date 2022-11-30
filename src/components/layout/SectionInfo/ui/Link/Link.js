import Apple from './assets/apple.svg'
import Google from './assets/google.svg'

export const Link = ({ link }) => {
  const { name, url } = link

  return (
    <button>
      <a href={url}>{name === 'apple' ? <Apple /> : <Google />}</a>
    </button>
  )
}
