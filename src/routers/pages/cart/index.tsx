import { Form } from './components/Form'
import { Resume } from './components/Resume'
import { CartContainer } from './styles'

export function Cart() {
  return (
    <CartContainer>
      <Form />
      <Resume />
    </CartContainer>
  )
}
