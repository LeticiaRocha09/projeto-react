import React from "react";
import Logo from "./img/logo.png";

function Header(){
    
    return(<>
            <div class="dark-mode">
                <h5>Dark Mode</h5>
                <div class="botão">
                    <button id="btn-dark-modetoggle"></button>
                </div>
            </div>

        <div class="interface">
            <div class="logo">
                <a href="#">
                    <img src={Logo} alt="logo"/>
                </a>
            </div>

            <nav class="menu-desktop"> 
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Especialidades</a></li>
                    <li><a href="#">Projetos</a></li>
                </ul>
            </nav>
            
            <div class="btn-contato">
                <a href="https://wa.me/qr/RDOKVYX7QMNPB1">
                    <button>Contato</button>
                </a>
            </div>

            <div class="btn-abrir-menu" id="btn-menu">
                <i class="bi bi-list"></i>
            </div>

            <div class="menu-mobile" id="menu-mobile">
                <div class="btn-fechar">
                    <i class="bi bi-x-lg"></i>
                </div>

                <nav> 
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Especialidades</a></li>
                        <li><a href="#">Projetos</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>

            </div>
            <div class="overlay-menu" id="overlay-menu"></div>
        </div>

    </> );
    
};


export default Header;


