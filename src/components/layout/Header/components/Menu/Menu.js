export const Menu = ({ menuItems, parentClassName }) => {
  return (
    <ul className={`${parentClassName}__items`}>
      {menuItems.length > 0 &&
        menuItems.map((item, index) => (
          <li
            key={index}
            className={`${parentClassName}__item`}
            data-target={item.target}>
            {item.data}
          </li>
        ))}
    </ul>
  )
}
