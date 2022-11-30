import { useContext } from 'react'
import { LangContext } from 'contexts'

export const Language = ({ parentClassName }) => {
  const { lang, toggleLang } = useContext(LangContext)

  return (
    <label
      className={`${parentClassName}__lang`}
      htmlFor='language'>
      <select
        id='language'
        onChange={(event) =>
          toggleLang(event.currentTarget.value)
        }>
        <option value='en'>EN</option>
        <option value='ru'>RU</option>
      </select>
    </label>
  )
}
