import { memo } from 'react'
import clsx from 'clsx'

export const Field = memo(
  ({
    parentClassName,
    details,
    value,
    isValidField,
    onFieldChange,
  }) => {
    const currentClassName = parentClassName
      ? `${parentClassName}__input`
      : 'input'

    const fieldValidClasses = clsx(currentClassName, {
      success: isValidField,
      error: value?.length && !isValidField,
    })
    return (
      <label className={fieldValidClasses}>
        <input
          type={details.type}
          value={value}
          placeholder={details.placeholder}
          onChange={onFieldChange}
        />
      </label>
    )
  }
)
