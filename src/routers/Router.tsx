import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layout/defaultLayout'
import { Home } from './pages/home'
import { Cart } from './pages/cart'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}
