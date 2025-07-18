import Image from "next/image";
import Link from "next/link";
import Lupa from "../ferramentas/6789.webp"
import Green from "../ferramentas/green_energy.png";
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
                        <Link href="/hello" className="cadastro">Cadastre-se</Link>
                    </div> 
                </div>
            </div>
            <div className="secao">
                <div className="window">
                    <div className="imagem">
                        <Image src={Green} alt="Green Energy" height={600}/>
                    </div>
                    <div className="proposta">
                        <h1>Missão e Proposta da Empresa</h1>
                        <p>A <strong>Green Energy</strong> tem como missão promover o uso
                         consciente e sustentável da energia por meio de soluções limpas e
                         renováveis. Trabalhamos para ajudar residências, comércios e indústrias
                          a reduzir seu impacto ambiental, economizar energia e adotar
                           práticas sustentáveis com tecnologia acessível.
                        </p>
                    </div>
                    <div className="servicos">
                        <h1>Serviços Oferecidos</h1>
                        <ul>
                            <li>Projetos e instalação de painéis solares fotovoltaicos</li>
                            <li>Sistemas de energia eólica para pequenas propriedades</li>
                            <li>Consultoria em eficiência energética</li>
                            <li>Monitoramento inteligente de consumo energético via app</li>
                            <li>Manutenção e atualização de sistemas solares e híbridos</li>
                            <li>Parcerias para crédito de carbono e certificações verdes</li>
                        </ul>
                    </div>
                    <div className="publico">
                        <h1>Publico Alvo</h1>
                        <p>A <strong>Green Energy</strong> atende pessoas físicas, empresas e instituições 
                            comprometidas com a sustentabilidade e a economia de energia. 
                            Entre nossos principais públicos estão:
                        </p>
                        <ul>
                            <li>Proprietários de residências que desejam reduzir a conta de luz por meio da energia solar</li>
                            <li>Pequenos e médios empresários interessados em tornar seus negócios mais sustentáveis</li>
                            <li>Fazendas e cooperativas rurais que necessitam de soluções energéticas autônomas e confiáveis</li>
                            <li>Prefeituras e escolas públicas em busca de eficiência energética e educação ambiental</li>
                            <li>Condomínios residenciais e edifícios comerciais que desejam instalar sistemas compartilhados de energia</li>
                            <li>ONGs e projetos sociais que atuam em comunidades sem acesso à rede elétrica convencional</li>
                            <li>Consumidores conscientes, preocupados com o impacto ambiental e que buscam tecnologias limpas</li>
                        </ul>
                    </div>
                    <div className="diretoria">
                        <h1>Diretoria e Fundadores</h1>
                        <h3>Eduardo Soares - Diretor Executivo (CEO)</h3>
                        <p>Engenheiro ambiental, idealizou a Green Energy para democratizar o acesso às
                            energias renováveis. Atua na liderança da empresa, inovação e alianças estratégicas 
                            com municípios e empresas.
                        </p>
                        <h3>Larissa Pires - Diretora Técnica (CTO)</h3>
                        <p>Engenheira elétrica com especialização em energias limpas pela Universidade 
                            de Freiburg (Alemanha), lidera os projetos de instalação e desenvolve 
                            soluções inteligentes para eficiência energética
                        </p>
                        <h3>Vinícius Ramos - Diretor de Educação Sustentável (CDO)</h3>
                        <p>Responsável pelas ações sociais da empresa, lidera oficinas, 
                            capacitações comunitárias e conteúdos educacionais sobre 
                            sustentabilidade e energia limpa.
                        </p>
                    </div>
                    <div className="equipe">
                        <h1>Nossa Equipe</h1>
                        <p>A equipe da Green Energy é formada por 30 colaboradores, 
                            entre engenheiros, técnicos, educadores ambientais e consultores. 
                            Dividimos nossas equipes por frentes:
                        </p>
                        <h3>Engenharia e Instalação</h3>
                        <ul>
                            <li>Engenheiros elétricos e ambientais</li>
                            <li>Técnicos de campo certificados</li>
                            <li>Especialistas em energia solar e eólica</li>
                        </ul>
                        <h3>Pesquisa e Inovação</h3>
                        <ul>
                            <li>Desenvolvimento de apps e sistemas inteligentes</li>
                            <li>Integração com IoT para monitoramento em tempo real</li>
                            <li>Modelagem de soluções para áreas rurais e comunidades isoladas</li>
                        </ul>
                        <h3>Educação e Ação Comunitária</h3>
                        <ul>
                            <li>Oficinas em escolas e ONGs</li>
                            <li>Projetos de impacto social com foco em energia acessível</li>
                            <li>Campanhas educativas sobre consumo consciente</li>
                        </ul>
                    </div>
                    <div className="localizacao">
                        <h1>Localização</h1>
                        <p>Sede: Rua Verde Esperança, 200 – Curitiba, PR</p>
                        <p>Unidades móveis para atendimento em zonas rurais no Sul e Sudeste.</p>
                    </div>
                    <div className="contato">
                        <h1>Nossos Contatos</h1>
                        <ul>
                            <li>Site: www.greenenergy.com.br</li>
                            <li>E-mail: contato@greenenergy.com</li>
                            <li>WhatsApp: (11) 99999-0002</li>
                            <li>Instagram: @greenenergy.br</li>
                            <li>Horário de atendimento: Segunda a sábado, das 8h às 18h</li>
                        </ul>
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