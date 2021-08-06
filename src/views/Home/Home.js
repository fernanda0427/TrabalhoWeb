import React from 'react';
import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { IoAddCircleOutline } from 'react-icons/io5';

import Header from '../../components/Header/Header';
import {
  Page,
  Container,
  InnerContainer,
  LeftSidebar,
  ProductContainer,
  ProductImage,
  ProductPrice,
  ProductInfo,
  ProductInfoContainer,
  ProductInfoWrapper,
  ProductFilter,
  PriceFilter,
} from './styles';
import useCart from '../../hooks/useCart';

import productsData from '../../database/products.json';

function Home() {
  const [products] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState('Princesas');
  const [selectedPrice, setSelectedPrice] = useState('100');
  const { cart, setCart } = useCart();

  const handleAddToCart = (item) => {
    const newCart = [...cart];

    newCart.push(item);

    alert(`${item.name} adicionado ao carrinho.`)

    setCart(newCart);
  }

  useEffect(() => {
    console.log(cart)
  }, [cart]);

  return (
    <Page>
      <Header />
      <Container>
        <LeftSidebar>
          <ProductInfo>
            Filtrar por categoria
          </ProductInfo>
          <ProductFilter
            name="categories"
            onChange={event => setSelectedCategory(event.target.value)}
            value={selectedCategory}
          >
            <option value="Princesas">Princesas</option>
            <option value="Plantas">Plantas</option>
            <option value="Harry Potter">Harry Potter</option>
          </ProductFilter>
          <ProductInfo>
            Filtrar por preço
          </ProductInfo>
          <PriceFilter
           name="prices"
           onChange={event => setSelectedPrice(event.target.value)}
           value={selectedPrice}
          >
            <option value="50">até R$50,00</option>
            <option value="70">até R$70,00</option>
            <option value="100">Sem Valor Máximo</option>
          </PriceFilter>
        </LeftSidebar>
        <InnerContainer>
          {products.map(product => {
            if ((product.category === selectedCategory) &&
                (parseInt(selectedPrice) >= parseInt(product.price))){
              return (
                <ProductContainer key={product.id}>
                  <ProductImage src={product.image} />
                    <ProductInfoContainer>
                      <ProductInfoWrapper>
                        <ProductPrice>
                          R$ {product.price}
                        </ProductPrice>
                        <ProductInfo>
                          {product.name}
                        </ProductInfo>
                        <ProductInfo>
                          {product.category}
                        </ProductInfo>
                      </ProductInfoWrapper>
                      <IoAddCircleOutline
                        size={50}
                        style={{
                          display: 'flex',
                          alignSelf: 'flex-end',
                          cursor: 'pointer'
                        }}
                        onClick={() => handleAddToCart(product)}
                      />
                    </ProductInfoContainer>
                  </ProductContainer>
                )
              }
            return null;
          })}
        </InnerContainer>
      </Container>
    </Page>
  );
}

export default withRouter(Home);
