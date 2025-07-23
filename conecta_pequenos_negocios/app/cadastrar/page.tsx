import Image from "next/image";
import Link from "next/link";
import Lupa from "../ferramentas/6789.webp"
import Edu from "../ferramentas/edutech_academy.png";
import "./page.css";

export default function Informacao(){
    return(
        <div className="body">
            <div className="header">
                <div className="cabeca">
                    <div className="buscar">
                        <Image src={Lupa} alt="Lupa" height={60}/>
                        <input type="text" id="pesquisar" name="pesquisar" placeholder="Pesquisar"/>
                    </div>
                <div className="titulo">
                        <h1>Conecta Pequenos Negocios</h1>
                </div>
                    <div className="ascinar">
                        <Link href="/hello" className="login">Log in</Link>
                        <Link href="/cadastrar" className="cadastro">Cadastre-se</Link>
                    </div> 
                </div>
            </div>
            <div className="secao">
                <div className="marcar">
                    <div className="cadastrando">
                        <h1>Cadastre-se Aqui</h1>
                    </div>
                    <div className="entrada">
                        <p>Nome de Usuario:</p>
                        <input type="text" id="nome" name="nome" placeholder="Nome"/>
                        <p>Email:</p>
                        <input type="text" id="email" name="email" placeholder="Email"/>
                        <p>Senha:</p>
                        <input type="text" id="senha" name="senha" placeholder="Senha"/>
                        <p>Confirmar Senha:</p>
                        <input type="text" id="confSenha" name="confSenha" placeholder="Confirmar Senha"/>
                        
                    </div>
                    <div className="botao">
                        <button id="botao" className="botao1">Enviar</button>
                    </div>
                    
                </div>
            </div>
            <div className="fundo">
                <p>(71) 99656-6960</p>
                <p>pedroelias2511@gmail.com</p>
                <p>Rua Almeida Garret, 30</p>
            </div>
        </div>
    );
}