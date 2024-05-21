import { CostsContainer, DescriptionCost } from './styles'

export function BasketResume() {
  return (
    <CostsContainer>
      <DescriptionCost>
        <p>Total de Itens</p>
        <span>R$ 29,90</span>
      </DescriptionCost>
      <DescriptionCost>
        <p>Entrega</p>
        <span>R$ 29,90</span>
      </DescriptionCost>
      <DescriptionCost>
        <h4>Total</h4>
        <h4>R$ 29,90</h4>
      </DescriptionCost>
    </CostsContainer>
  )
}
