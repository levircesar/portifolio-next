
import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  width:100%;
  @media (max-width:798px){
    flex-direction: column;
  }
`

export const WidthTrinta = styled.div`
  width: 30%;
  @media (max-width:798px){
    width: 100%;
  }
`


export const WidthSetenta = styled.div`
   width: 70%;
   @media (max-width:798px){
    width: 100%;
  }
`