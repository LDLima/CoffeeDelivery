import styled from 'styled-components'

export const FormContainer = styled.div`
  margin-top: 2.5rem;

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
  }
`

const CheckoutContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  padding: 2.5rem;

  gap: 0.75rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['gray-200']};
`

export const AddressContainer = styled(CheckoutContainer)`
  svg {
    color: ${(props) => props.theme['yellow-700']};
  }
`

export const PaymentContainer = styled(CheckoutContainer)`
  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

const HeaderContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  p {
    font-size: 1rem;
  }
  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-800']};
  }

  margin-bottom: 2rem;
`

export const AddressHeader = styled(HeaderContainer)``

export const Address = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 1fr 3.75rem;
  gap: 1rem;

  .street {
    grid-column: 1/4;
  }

  .fullAddress {
    grid-column: 2/4;
  }
`

export const AdditionAddress = styled(Address)`
  flex-direction: row;
  gap: 0.75rem;
`

export const TextInput = styled.input`
  font-size: 0.875rem;
  border: none;
  padding: 0.75rem;

  border-radius: 6px;

  background-color: ${(props) => props.theme['gray-400']};

  &::placeholder {
    color: ${(props) => props.theme['gray-700']};
  }

  &:focus {
    box-shadow: none;
  }
`

export const PaymentHeader = styled(HeaderContainer)``

export const PaymentType = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 0.75rem;
`

export const PaymentButton = styled.button`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 0.75rem;
  gap: 0.75rem;

  font-size: 0.75rem;
  text-transform: uppercase;

  border: none;

  color: ${(props) => props.theme['gray-800']};
  background-color: ${(props) => props.theme['gray-400']};

  border-radius: 6px;

  &:hover {
    background-color: ${(props) => props.theme['purple-300']};
    cursor: pointer;
  }
`
