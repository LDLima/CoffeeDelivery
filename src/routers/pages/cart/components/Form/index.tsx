import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  Address,
  AddressContainer,
  AddressHeader,
  FormContainer,
  PaymentButton,
  PaymentContainer,
  PaymentHeader,
  PaymentType,
  TextInput,
} from './styles'

export function Form() {
  return (
    <FormContainer>
      <h3>Complete seu pedido</h3>

      <AddressContainer>
        <AddressHeader>
          <MapPinLine size={22} />
          <div>
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </AddressHeader>

        <Address>
          <TextInput placeholder="CEP" className="cep" />
          <TextInput placeholder="Rua" className="street" />
          <TextInput placeholder="Número" className="number" />
          <TextInput placeholder="Complemento" className="fullAddress" />
          <TextInput placeholder="Bairro" className="area" />
          <TextInput placeholder="Cidade" className="city" />
          <TextInput placeholder="UF" className="state" />
        </Address>
      </AddressContainer>

      <PaymentContainer>
        <PaymentHeader>
          <CurrencyDollar size={22} />
          <div>
            <p>Pagamento</p>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </PaymentHeader>

        <PaymentType>
          <PaymentButton>
            <CreditCard size={22} />
            Cartão de Crédito
          </PaymentButton>
          <PaymentButton>
            <Bank size={22} />
            Cartão de Débito
          </PaymentButton>
          <PaymentButton>
            <Money size={22} />
            Dinheiro
          </PaymentButton>
        </PaymentType>
      </PaymentContainer>
    </FormContainer>
  )
}
