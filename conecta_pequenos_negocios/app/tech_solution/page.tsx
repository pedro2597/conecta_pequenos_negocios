import Image from "next/image";
import Link from "next/link";
import Lupa from "../ferramentas/6789.webp"
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
                    <div className="proposta">
                        <h1>Missão e Proposta da Empresa</h1>
                        <p>A <strong>Tech Solution</strong> é uma empresa especializada em soluções 
                            tecnológicas inteligentes e acessíveis para pequenas e médias 
                            empresas. Nosso foco é transformar digitalmente os negócios, 
                            oferecendo ferramentas modernas e suporte técnico de alta qualidade 
                            que garantem eficiência, segurança e crescimento.
                        </p>
                    </div>
                    <div className="servicos">
                        <h1>Serviços Oferecidos</h1>
                        <ul>
                            <li>Desenvolvimento de sistemas web e aplicativos mobile sob demanda</li>
                            <li>Criação e manutenção de e-commerces</li>
                            <li>Suporte e consultoria em TI (infraestrutura, segurança, redes)</li>
                            <li>Integração de sistemas com APIs e plataformas externas</li>
                            <li>Hospedagem e monitoramento de servidores</li>
                            <li>Automação de processos empresariais com ferramentas low-code e IA</li>
                        </ul>
                    </div>
                    <div className="publico">
                        <h1>Publico Alvo</h1>
                        <ul>
                            <li>Digitalização de processos</li>
                            <li>Modernização da presença online</li>
                            <li>Redução de custos com automação</li>
                            <li>Atendimento técnico confiável e humanizado</li>
                        </ul>
                    </div>
                    <div className="diretoria">
                        <h1>Diretoria e Fundadores</h1>
                        <h3>Lucas Almeida - Diretor Executivo (CEO)</h3>
                        <p>Especialista em Transformação Digital, com 12 anos de experiência
                            em desenvolvimento de soluções para o varejo e saúde.
                            Fundador da Tech Solution, lidera as decisões 
                            estratégicas e relacionamento com clientes-chave
                        </p>
                        <h3>Mariana Costa - Diretora de Tecnologia (CTO)</h3>
                        <p>Mestre em Engenharia da Computação, é responsável por supervisionar 
                            os times de desenvolvimento, infraestrutura e inovação, trazendo 
                            metodologias ágeis e foco em segurança cibernética.
                        </p>
                        <h3>Carlos Mendes - Diretor de Operações (COO)</h3>
                        <p>Com histórico em gestão de projetos e atendimento ao cliente, 
                            coordena a parte operacional da empresa, desde o suporte técnico 
                            ao gerenciamento de cronogramas de entrega.
                        </p>
                    </div>
                    <div className="equipe">
                        <h1>Nossa Equipe</h1>
                        <p>A equipe da Tech Solution é formada por mais de 25 profissionais, 
                            distribuídos em núcleos especializados:
                        </p>
                        <h3>Desenvolvimento Web & Mobile</h3>
                        <ul>
                            <li>Front-end: React, Next.js, Flutter</li>
                            <li>Back-end: Node.js, Python (Django), Java Spring</li>
                            <li>APIs e microserviços</li>
                        </ul>
                        <h3>Infraestrutura & DevOps</h3>
                        <ul>
                            <li>Administradores de sistemas Linux e Windows</li>
                            <li>Especialistas em AWS, Azure e GCP</li>
                            <li>CI/CD, containers (Docker), Kubernetes</li>
                        </ul>
                        <h3>Atendimento & Suporte Técnico</h3>
                        <ul>
                            <li>Helpdesk com atendimento 24h</li>
                            <li>Suporte remoto e presencial (região Sudeste)</li>
                            <li>Treinamentos e capacitação de clientes</li>
                        </ul>
                        <h3>Design e UX/UI</h3>
                        <ul>
                            <li>Designers gráficos e especialistas em experiência do usuário</li>
                            <li>Prototipagem com Figma e Adobe XD</li>
                        </ul>
                    </div>
                    <div className="localizacao">
                        <h1>Localização</h1>
                        <p>Sede: Av. Paulista, 1234 - São Paulo, SP</p>
                        <p>Atendimento nacional com equipes em home office e 
                            filiais em Belo Horizonte e Salvador.
                        </p>
                    </div>
                    <div className="contato">
                        <h1>Nossos Contatos</h1>
                        <ul>
                            <li>Site: www.techsolution.com.br</li>
                            <li>E-mail: contato@techsolution.com</li>
                            <li>WhatsApp: (11) 99999-0001</li>
                            <li>Instagram: @techsolution.br</li>
                            <li>Horário de atendimento: Segunda a sexta, das 8h às 18h</li>
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