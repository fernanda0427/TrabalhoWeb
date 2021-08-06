import React from 'react';
import { IoCart } from "react-icons/io5";
import { BrowserRouter, withRouter } from 'react-router-dom';
import {
  TopBar,
  Logo,
  Options,
  Line,
  InputSearch,
  TextType,
  FinishButton,
} from './styles';
import logo from '../../assets/logo.png';
import useCart from '../../hooks/useCart';

function Header({ history }) {
  const { cart } = useCart();

  return (
    <>
      <TopBar>
       <Logo style={{ cursor: 'pointer' }} src={logo} onClick={() => history.push('/')} />
       <InputSearch placeholder="Buscar" type="text"/>
       <FinishButton onClick={() => history.push('/cart')}>
        <span style={{ marginLeft: 5, fontWeight: 'bold' }}>{cart.length}</span>
        <IoCart
          size={30}
          style={{ cursor: 'pointer', marginLeft: 5 }}
        />
        <span style={{ fontWeight: 'bold' }}>Finalizar compra</span>
      </FinishButton>
     </TopBar>
     <Options>
        <TextType>Pronta entrega</TextType>
        <TextType>Amigurumi</TextType>
        <TextType>Para bebês</TextType>
        <TextType>Tricotin</TextType>
        <TextType>Personalizando</TextType>
        <TextType>Sobre mim</TextType>
      </Options>
      <Line/>
    </>
  );
}

export default withRouter(Header);
