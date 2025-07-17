import Image from "next/image";
import Link from "next/link";
import Lupa from "../../ferramentas/6789.webp"
import "./header.css";

export default function Header(){
    return(
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
                    <Link href="/hello" className="cadastro">Cadastre-se</Link>
                </div> 
            </div>
        </div>
    );
}