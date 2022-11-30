import { useEffect, useState } from 'react'
import { useFetch } from 'hooks/useFetch'
import {
  Header,
  SectionInfo,
  Cashback,
  Clients,
  Footer,
} from 'components/layout'

export const App = () => {
  const [data, setData] = useState(null)
  const { getData } = useFetch()

  useEffect(() => {
    getData('en').then((data) => setData(data))
  }, [])

  return (
    <div className='app'>
      {data?.header && <Header data={data.header} />}
      {data?.download && <SectionInfo data={data.download} />}
      {data?.warranty && <SectionInfo data={data.warranty} />}
      {data?.care && <SectionInfo data={data.care} />}
      {data?.cashback && <Cashback data={data.cashback} />}
      {data?.clients && <Clients data={data.clients} />}
      {data?.footer && <Footer data={data.footer} />}
    </div>
  )
}
