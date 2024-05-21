import styled from 'styled-components'

export const AsideContainer = styled.aside`
  margin-top: 2.5rem;

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
  }
`

export const ResumeContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  padding: 2.5rem;
  border-radius: 6px 44px;

  background-color: ${(props) => props.theme['gray-200']};
`
