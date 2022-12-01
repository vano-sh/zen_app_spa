import { useContext } from 'react'
import { LangContext } from 'contexts'

export const Language = ({ parentClassName }) => {
  const { lang, toggleLang } = useContext(LangContext)

  return (
    <label className={`${parentClassName}__lang`}>
      <select
        value={lang}
        onChange={(event) =>
          toggleLang(event.currentTarget.value)
        }>
        <option value='en'>EN</option>
        <option value='ru'>RU</option>
      </select>
    </label>
  )
}
