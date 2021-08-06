import React from "react";

import { BrowserRouter, 
         Switch, 
         Route, 
         Link 
        } from "react-router-dom";

import { Page,
         Container,
} from '../../views/Home/styles';

import Header from '../../components/Header/Header';

import { AreaLogin } from "./styled";

import {
    BtnDefaultIcons,
    BtnDefault,
} from '../../components/styled';

import firebase from 'firebase/app';
import fire from "../../firebase";

class Login extends React.Component{

    login(){
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().signInWithEmailAndPassword(email.password)
            .then((u) =>{
                console.log("Sua conta foi criada com sucesso.")
            })
            .catch((err) =>{
                console.log("Error:" + err.toString());
            })
    }

    logout(){
        fire.auth().signOut()
    }

    signup(){
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().createUserWithEmailAndPassword(email.password)
            .then((u) =>{
                console.log("Sua conta foi criada com sucesso.")
            })
            .catch((err) =>{
                console.log("Error:" + err.toString());
            })
    }

    render(){
    return(
        <Page>
            <Header />
            <Container>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/registrar">
                        <AreaLogin>
                            <h1 className="organize">
                                Crie sua conta
                            </h1>
                            <p>Crie sua conta é grátis</p>
                            <form>
                                <div className="form-input">
                                    <label>E-mail</label>
                                    <input type="email"></input>
                                </div>

                                <div className="form-input">
                                    <label>Senha</label>
                                    <input type="password"></input>
                                </div>
                                <BtnDefault onClick={this.signup}>Criar conta</BtnDefault>
                                <div className="footerLogin">
                                    Jà tem uma conta?
                                    <Link to="/">Fazer Login</Link>
                                </div>
                            </form>
                        </AreaLogin>
                    </Route>

                    <Route exact path="*">
                        <AreaLogin>
                        <h1>Faça Login</h1>
                        <form>
                            <div className="form-input">
                                <label>E-mail</label>
                                <input type="email"></input>
                            </div>
                            <div className="form-input">
                                <label>Senha</label>
                                <input type="password"></input>
                            </div>

                            <BtnDefault onClick={this.login}>Entrar</BtnDefault>
                            <div className="footerLogin">
                                Não tem uma conta?
                                <Link to="/registrar">Registre-se</Link>
                            </div>
                        </form>
                    </AreaLogin>
                    </Route>
                </Switch>
            </BrowserRouter>
            </Container>
            </Page>
    );
    }
}

export default Login;