import { Minus, Plus, Trash } from 'phosphor-react'
import {
  CardBasketContainer,
  CardImg,
  CartItemDescription,
  CartItens,
  ItensOptions,
} from './styles'

import expresso from './../../../../../../../assets/expresso.svg'

export function CoffeeItens() {
  return (
    <CartItens>
      <CardImg src={expresso} alt="Black expresso coffee in a cup" />

      <CartItemDescription>
        <p>Expresso Tradicional</p>

        <ItensOptions>
          <CardBasketContainer>
            <Minus size={15} />
            <p>7</p>
            <Plus size={15} />
          </CardBasketContainer>
          <CardBasketContainer>
            <Trash size={15} />
            <p>Remover</p>
          </CardBasketContainer>
        </ItensOptions>
      </CartItemDescription>

      <span>R$ 9,90</span>
    </CartItens>
  )
}
