import { useContext, useEffect, useState } from 'react'
import { LangContext, ThemeContext } from 'contexts'
import { useFetch } from 'hooks/useFetch'
import {
  Preloader,
  Header,
  ProgressBar,
  SectionInfo,
  Cashback,
  Clients,
  Footer,
} from 'components/layout'
import clsx from 'clsx'

export const App = () => {
  const className = 'app'

  const [data, setData] = useState(null)
  const { lang } = useContext(LangContext)
  const { theme } = useContext(ThemeContext)
  const { isLoading, getData } = useFetch()

  const classNames = clsx(className, {
    dark: theme === 'dark',
  })

  useEffect(() => {
    getData(lang).then((data) => setData(data))
  }, [lang])

  return (
    <div className={classNames}>
      {isLoading && <Preloader />}
      {data?.header && <Header data={data.header} />}
      {!isLoading && <ProgressBar />}
      {data?.download && <SectionInfo data={data.download} />}
      {data?.warranty && <SectionInfo data={data.warranty} />}
      {data?.care && <SectionInfo data={data.care} />}
      {data?.cashback && <Cashback data={data.cashback} />}
      {data?.clients && <Clients data={data.clients} />}
      {data?.footer && <Footer data={data.footer} />}
    </div>
  )
}
