import styled from 'styled-components'

export const CartItens = styled.div`
  display: flex;

  padding-bottom: 2rem;

  &:not(:first-child) {
    padding-top: 2rem;
  }

  span:last-child {
    margin-left: auto;
    font-weight: 700;
  }

  border-bottom: 1px solid ${(props) => props.theme['gray-400']};
`

export const CartItemDescription = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 1.25rem;
  gap: 0.5rem;
`

export const ItensOptions = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const CardImg = styled.img`
  width: 4rem;
  height: 4rem;
`
export const CardBasketContainer = styled.div`
  display: flex;

  padding: 0.5rem;
  border-radius: 8px;
  gap: 0.25rem;

  align-items: center;
  justify-content: space-between;

  text-transform: uppercase;
  font-size: 0.75rem;

  color: ${(props) => props.theme['gray-800']};
  background-color: ${(props) => props.theme['gray-400']};
`
