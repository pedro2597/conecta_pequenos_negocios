import "./section.css";
import Image from "next/image";
import Plug from "../../ferramentas/453137.png";

export default function Section(){
    return(
        <div className="section">
            <div className="conteudo">
                <Image src={Plug} alt="Conectar"/>
                <div className="texto">
                    <p>O Conecta Pequenos Negócios é uma plataforma web 
                        inovadora que funciona como um ecossistema digital para 
                        pequenas empresas. 
                    </p>
                    <p>Ele oferece um espaço centralizado para armazenar, gerenciar e divulgar 
                        informações cruciais sobre o negócio, seus produtos/serviços, 
                        equipe e diferenciais.
                    </p>
                    <p>Mais do que um simples repositório, o sistema integra ferramentas 
                        de marketing, análise e conexão com clientes, capacitando as pequenas 
                        empresas a expandirem sua presença online e alcançarem novos mercados 
                        de forma eficiente e acessível.
                    </p>
                </div>
            </div>
        </div>
    );
}