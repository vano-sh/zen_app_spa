export const Clients = ({ data }) => {
  const className = 'clients'
  const { lightThemeClients, darkThemeClients } = data

  const clients = lightThemeClients

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
