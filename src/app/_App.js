import { useContext, useEffect, useState } from 'react'
import {
  LangContext,
  ThemeContext,
  SliderContext,
  ChatbotContext,
} from 'contexts'
import { useFetch } from 'hooks'
import {
  Preloader,
  Header,
  ProgressBar,
  SectionInfo,
  Cashback,
  Clients,
  Footer,
  Chatbot,
  Modal,
  ModalSlider,
} from 'components/layout'
import clsx from 'clsx'

export const App = () => {
  const className = 'app'

  const [data, setData] = useState(null)
  const { lang } = useContext(LangContext)
  const { theme } = useContext(ThemeContext)
  const { setSlides } = useContext(SliderContext)
  const { setMessages } = useContext(ChatbotContext)
  const { isLoading, setIsLoading, getData } = useFetch()

  const classNames = clsx(className, {
    dark: theme === 'dark',
  })

  useEffect(() => {
    getData(lang)
      .then((data) => setData(data))
      .then(() => setIsLoading(false))
      .then(() => setSlides([]))
      .then(() => setMessages([]))
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
      {data?.modal && <Modal data={data.modal} />}
      {!isLoading && <Chatbot />}
      {!isLoading && <ModalSlider />}
    </div>
  )
}
