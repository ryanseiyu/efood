import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Rotas from './routes'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'
import Delivery from './components/Delivery'
import Payment from './components/Payment'
import Order from './components/Order'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        <Cart />
        <Delivery />
        <Payment />
        <Order />
      </BrowserRouter>
    </Provider>
  )
}

export default App
