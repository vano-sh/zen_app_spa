import { useContext, useEffect, useState } from 'react'
import { useFetch } from 'hooks/useFetch'
import {
  Header,
  SectionInfo,
  Cashback,
  Clients,
  Footer,
} from 'components/layout'
import { LangContext } from 'contexts'

export const App = () => {
  const [data, setData] = useState(null)
  const { lang } = useContext(LangContext)
  const { getData } = useFetch()

  useEffect(() => {
    getData(lang).then((data) => setData(data))
  }, [lang])

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
