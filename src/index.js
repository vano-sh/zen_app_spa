import { createRoot } from 'react-dom/client'
import { App } from 'app'
import 'app/scss/index.scss'
import { ThemeProvider, LangProvider } from 'providers'

const $root = document.querySelector('#root')
const root = createRoot($root)

root.render(
  <LangProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </LangProvider>
)
