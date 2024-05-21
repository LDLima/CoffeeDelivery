import {
  CardBarketContainer,
  CardComponent,
  CardFooterContainer,
  CardImg,
  CardResume,
  CardTitle,
  CardType,
  CartItemCard,
} from './styles'
import expresso from './../../../../../assets/expresso.svg'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

export function CoffeeCard() {
  return (
    <CardComponent>
      <CardImg src={expresso} alt="Black expresso coffee in a cup" />

      <CardType>Type</CardType>

      <CardTitle>Title</CardTitle>

      <CardResume>Resume</CardResume>

      <CardFooterContainer>
        <p>
          R$ <span>9,90</span>
        </p>

        <CardBarketContainer>
          <Minus size={15} />
          <p>7</p>
          <Plus size={15} />
        </CardBarketContainer>

        <CartItemCard>
          <ShoppingCartSimple size={20} weight="fill" />
        </CartItemCard>
      </CardFooterContainer>
    </CardComponent>
  )
}
