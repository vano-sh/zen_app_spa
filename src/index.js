import { createRoot } from 'react-dom/client'
import { App } from 'app'
import 'app/scss/index.scss'
import {
  ThemeProvider,
  LangProvider,
  BurgerProvider,
  ChatbotProvider,
  FormProvider,
  SliderProvider,
} from 'providers'

const $root = document.querySelector('#root')
const root = createRoot($root)

root.render(
  <ChatbotProvider>
    <FormProvider>
      <SliderProvider>
        <BurgerProvider>
          <LangProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </LangProvider>
        </BurgerProvider>
      </SliderProvider>
    </FormProvider>
  </ChatbotProvider>
)
