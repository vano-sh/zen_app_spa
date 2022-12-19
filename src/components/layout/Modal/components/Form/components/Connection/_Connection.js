import { memo } from 'react'
import clsx from 'clsx'

export const Connection = memo(
  ({
    parentClassName,
    details,
    connection,
    isValidConnection,
    onConnectionChange,
  }) => {
    if (!Object.keys(details).length) return null

    const { options } = details

    const currentClassName = parentClassName
      ? `${parentClassName}__select`
      : 'select'

    const connectionClasses = clsx(currentClassName, {
      success: isValidConnection,
    })

    return (
      <label className={connectionClasses}>
        {!connection && <span>{details.label}</span>}

        <select value={connection} onChange={onConnectionChange}>
          <option></option>

          {options?.length > 0 &&
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
        </select>
      </label>
    )
  }
)
