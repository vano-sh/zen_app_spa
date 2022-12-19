import { memo } from 'react'

export const Policy = memo(
  ({
    parentClassName,
    policy,
    isPolicyChecked,
    onPolicyChange,
  }) => {
    return (
      <label className={`${parentClassName}__policy`}>
        <input
          type={policy.checkbox.type}
          checked={isPolicyChecked}
          onChange={onPolicyChange}
        />
        <a href={policy.linkPolicy.url}>
          {policy.linkPolicy.data}
        </a>
      </label>
    )
  }
)
