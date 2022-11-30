export const Language = ({ parentClassName }) => {
  return (
    <label
      className={`${parentClassName}__lang`}
      htmlFor='language'>
      <select id='language'>
        <option value='en'>EN</option>
        <option value='ru'>RU</option>
      </select>
    </label>
  )
}
