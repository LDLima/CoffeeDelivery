import { Banner } from './components/Banner'
import { CoffeeCard } from './components/CoffeeCard'
import { Coffees, ListContainer, MainContainer } from './styles'

export function Home() {
  return (
    <MainContainer>
      <Banner />
      <Coffees>
        <h1>Nossos Cafés</h1>
        <ListContainer>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </ListContainer>
      </Coffees>
    </MainContainer>
  )
}
