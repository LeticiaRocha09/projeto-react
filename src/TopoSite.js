import React from "react";
import Perfil from "./img/perfil.jpg";


function TopoSite(){
    
    return(<>
        <section class="topo-do-site">
            <div class="interface">
                <div class="flex">
                    <div class="txt-topo-site">
                        <h1>MUITO PRAZER,
                        SOU MARIA LETÍCIA</h1>
                        <p>Desenvolvedora front end e apaixonada por colocar em prática, através de códigos, o design perfeito para sites ou interfaces. Além de criar soluções incríveis para a web.</p>
                        
                     </div>
                     <div class="circle-img">
                        <img id= "imagem_redonda" src={"Perfil"} alt="minha imagem"/>
                     </div>
                </div>
            </div>
        </section>
        </> );
};

export default TopoSite;

