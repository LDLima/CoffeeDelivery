import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MenuOptions = styled.aside`
  display: flex;
  gap: 1.25rem;
`

export const baseButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.5rem;
  padding: 0.5rem;

  border: 0;
  border-radius: 6px;

  span {
    gap: 0.25rem;
    color: ${(props) => props.theme['purple-700']};
  }
`

export const AddressButton = styled(baseButtonContainer)`
  color: ${(props) => props.theme['purple-500']};
  background-color: ${(props) => props.theme['purple-300']};
`

export const CartButton = styled(baseButtonContainer)`
  color: ${(props) => props.theme['yellow-700']};
  background-color: ${(props) => props.theme['yellow-300']};
`
