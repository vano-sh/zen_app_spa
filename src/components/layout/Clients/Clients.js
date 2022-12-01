import { useContext } from 'react'
import { ThemeContext } from 'contexts'

export const Clients = ({ data }) => {
  const className = 'clients'
  const { lightThemeClients, darkThemeClients } = data
  const { theme } = useContext(ThemeContext)

  const clients =
    theme === 'light' ? lightThemeClients : darkThemeClients

  return (
    <section className={className}>
      <div className={`${className}__wrapper`}>
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
