import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeeCup from '../../../../../assets/CoffeeCup.svg'
import { BannerAdvertise, BannerComponent } from './styles'

export function Banner() {
  return (
    <BannerComponent>
      <BannerAdvertise>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <ul>
          <li>
            <ShoppingCart size={24} weight="fill" />
            Compra simples e segura
          </li>
          <li>
            <Package size={24} weight="fill" />
            Embalagem mantém o café intacto
          </li>
          <li>
            <Timer size={24} weight="fill" />
            Entrega rápida e rastreada
          </li>
          <li>
            <Coffee size={24} weight="fill" />O café chega fresquinho até você
          </li>
        </ul>
      </BannerAdvertise>

      <img src={coffeeCup} alt="Coffee cup image with some coffee beans" />
    </BannerComponent>
  )
}
