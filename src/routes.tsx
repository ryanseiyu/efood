import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import MenuPage from './pages/MenuPage'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/MenuPage/:id" element={<MenuPage />} />{' '}
  </Routes>
)

export default Rotas
