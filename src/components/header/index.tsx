import {
  AddressButton,
  CartButton,
  HeaderContainer,
  MenuOptions,
} from './styles'

import logoCoffee from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home page">
        <img src={logoCoffee} alt="Coffee cup with text: coffee delivery" />
      </NavLink>
      <MenuOptions>
        <AddressButton>
          <MapPin size={24} weight="fill" />
          <span>Porto Seguro, RS</span>
        </AddressButton>
        <CartButton>
          <ShoppingCart size={24} weight="fill" />
        </CartButton>
      </MenuOptions>
    </HeaderContainer>
  )
}
