import { useContext, useRef } from 'react'
import { ThemeContext } from 'contexts'
import { useAnimateRef } from 'hooks'

export const Clients = ({ data }) => {
  const { name, lightThemeClients, darkThemeClients } = data
  const className = 'clients'

  const { theme } = useContext(ThemeContext)

  const imgsRef = useRef(null)

  useAnimateRef(imgsRef)

  const clients =
    theme === 'light' ? lightThemeClients : darkThemeClients

  return (
    <section className={className} data-name={name}>
      <div className={`${className}__wrapper`} ref={imgsRef}>
        {clients.length > 0 &&
          clients.map((client, index) => (
            <img
              key={index}
              src={client.source}
              alt={client.alternate}
            />
          ))}
      </div>
    </section>
  )
}
