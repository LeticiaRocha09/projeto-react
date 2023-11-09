import React from "react";


function Formulario(){

    return(<>
    <section class="formulario">
            <div class="interface">
                <h2 class="titulo">FALE <span>COMIGO.</span></h2>
                <form action="">
                    <input type="text" name="" id="" placeholder="Seu nome completo:" required/>
                    <input type="text" name="" id="" placeholder="Seu e-mail:" required/>
                    <input type="text" name="" id="" placeholder="Seu celular:"/>
                    <textarea name="" id=""placeholder="Sua mensagem:" required></textarea>
                    <div class="btn-enviar"><input type="submit" value="ENVIAR"/></div>
                </form>
            </div> 
    </section>
    </> );
}

export default Formulario;