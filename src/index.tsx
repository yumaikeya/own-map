import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import Router from 'Router'
import Provider from 'Provider'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <StrictMode>
    <Provider>
      <Router />
    </Provider>
  </StrictMode>
)
