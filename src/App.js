import React from 'react';
import AppRoutes from './routes';
import GlobalStyles from './globalStyles';
import { CartProvider } from './context/CartContext';
import { useState } from 'react';

import Login from './views/Login';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Component } from 'react';

import fire from './firebase';

class App extends React.Component{
  construct(props){
    this.state= {
      data: [],
      user: [],
    }

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount(){
    this.authListener();
    axios.get('http://localhost/amiguyuri.php').then(res =>
    {
      this.setState({data: res.data});
    });
  }
  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if (user){
        this.setState({user: user });   
      } else {
        this.setState({user: null})
      }
    })
  }
  render(){
    return(
    <div>
      if(this.state.user){
        <CartProvider>
          <GlobalStyles />
          <AppRoutes />
        </CartProvider>
        } else {
          (<Login/>)
        }
      </div>
    )};
}

export default App;
