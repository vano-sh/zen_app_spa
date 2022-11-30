import { Column } from './components/Column'

export const Columns = ({ parentClassName, columns }) => {
  return (
    <div className={`${parentClassName}__columns`}>
      {columns.length > 0 &&
        columns.map((column, index) => (
          <Column
            key={index}
            parentClassName={parentClassName}
            column={column}
          />
        ))}
    </div>
  )
}
