import styled from 'styled-components'

export const CardComponent = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;

  width: 16rem;
  height: 19rem;

  border-radius: 0 2.25rem;

  background-color: ${(props) => props.theme['gray-200']};
`

export const CardImg = styled.img`
  margin-top: -1rem;
`

export const CardType = styled.span`
  display: flex;

  align-items: center;

  margin-top: 0.75rem;

  padding: 0.25rem 0.5rem;
  border-radius: 6.25rem;

  gap: 0.75rem;

  font-family: 'Roboto', sans-serif;
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;

  color: ${(props) => props.theme['yellow-700']};
  background-color: ${(props) => props.theme['yellow-300']};
`
export const CardTitle = styled.h3`
  margin-top: 1rem;

  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
`

export const CardResume = styled.p`
  margin-top: 0.5rem;
  width: 100%;

  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;

  color: ${(props) => props.theme['gray-700']};
`

export const CardFooterContainer = styled.footer`
  display: flex;
  margin-top: 2rem;

  align-items: center;

  gap: 0.5rem;

  p {
    color: ${(props) => props.theme.black};
  }

  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
  }
`

export const CardBarketContainer = styled.div`
  display: flex;

  width: 4.5rem;

  padding: 0.5rem;
  border-radius: 6px;

  align-items: center;
  justify-content: space-between;

  color: ${(props) => props.theme['purple-500']};
  background-color: ${(props) => props.theme['gray-400']};
`

export const CartItemCard = styled.div`
  padding: 0.4rem;
  border-radius: 6px;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['purple-700']};
`
