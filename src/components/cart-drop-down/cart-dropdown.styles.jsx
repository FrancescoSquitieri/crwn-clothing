import styled from 'styled-components';
import Button from '../button/button.component';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
`

export const CartDropdownItems = styled.div`
      height: 240px;
      display: flex;
      flex-direction: column;
      overflow: scroll;
`

export const CartDropdownButton = styled(Button)`
  margin-top: auto;
  font-size: 0.7rem;
`

export const CartDropdownEmptyMessage = styled.div`
      font-size: 18px;
      margin: 50px auto;
`