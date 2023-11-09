import React from "react";


function Especialidades(){

    return(<>
        <section class="especialidades">
            <div class="interface">
                <h2 class="titulo">MINHAS <span>ESPECIALIDADES.</span></h2>
                <div class="flex">
                    <div class="especialidades-box">
                        <i class="bi bi-file-code"></i>
                        <h3>Loja Online</h3>
                        <p>Especialista em proporcionar uma excelente experiência ao cliente e destacar o seu e-commerce.</p>
                        
                    </div>

                    <div class="especialidades-box">
                        <i class="bi bi-cart2"></i>
                        <h3>Website</h3>
                        <p>Uma combinação única de design, funcionalidade intuitiva e otimização para resultados criativos e inovadores.</p>
                    </div>

                    <div class="especialidades-box">
                        <i class="bi bi-substack"></i>
                        <h3>Blog</h3>
                        <p>Comprometida em arquitetar, criar, testar e prestar manutenção a sites, blogs.</p>
                        
                    </div>
                </div>
            </div>
        </section>
    </> );
}

export default Especialidades;