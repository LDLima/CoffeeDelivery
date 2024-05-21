import { BasketResume } from './components/BasketResume'
import { CoffeeItens } from './components/CoffeeItens'
import { AsideContainer, ResumeContainer } from './styles'

export function Resume() {
  return (
    <AsideContainer>
      <h3> Cafés selecionados</h3>

      <ResumeContainer>
        <CoffeeItens />
        <CoffeeItens />
        <BasketResume />
      </ResumeContainer>
    </AsideContainer>
  )
}
