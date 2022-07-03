import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import { Auth0Provider } from '@auth0/auth0-react'
import rootReducer from 'Redux/rootReducer'
import rootSaga from 'Redux/rootSaga'

type Props = {
  children: React.ReactNode
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(rootSaga)

const Prov: React.FC<Props> = ({ children }) => {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN || ''}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID || ''}
      audience={process.env.REACT_APP_AUTH0_AUDIENCE}
      redirectUri={window.location.origin}
      useRefreshTokens={true}
    >
      <Provider store={store}>{children}</Provider>
    </Auth0Provider>
  )
}

export default Prov

export type RootState = ReturnType<typeof store.getState>