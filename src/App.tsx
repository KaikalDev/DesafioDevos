import { Provider } from 'react-redux'
import Page from './Page'
import { Store } from './services/store'

function App() {
  return (
    <Provider store={Store}>
      <Page />
    </Provider>
  )
}

export default App
