import Image from "next/image";
import Link from "next/link";
import Lupa from "../ferramentas/6789.webp"
import Health from "../ferramentas/health_care_plus.png";
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
                        <Image src={Health} alt="Health Care Plus" height={600}/>
                    </div>
                    <div className="content">
                        <div className="proposta">
                            <h1>Missão e Proposta da Empresa</h1>
                            <p>A <strong>Health Care Plus</strong> é uma clínica multiprofissional
                            voltada à promoção da saúde integral por meio de atendimento humanizado,
                            tecnologia de ponta e cuidado contínuo. Nossa proposta é oferecer 
                            acesso facilitado à saúde de qualidade, com foco na prevenção, no 
                            bem-estar e no acolhimento ao paciente
                            </p>
                        </div>
                        <div className="servicos">
                            <h1>Serviços Oferecidos</h1>
                            <ul>
                                <li>Consultas médicas (clínico geral, cardiologia, ginecologia, pediatria, psiquiatria)</li>
                                <li>Atendimento psicológico e psicopedagógico</li>
                                <li>Nutrição e educação alimentar</li>
                                <li>Fisioterapia e reabilitação funcional</li>
                                <li>Exames laboratoriais e de imagem (em parceria)</li>
                                <li>Teleconsultas e monitoramento remoto da saúde</li>
                                <li>Planos de saúde personalizados para microempresas e famílias</li>
                            </ul>
                        </div>
                        <div className="publico">
                            <h1>Publico Alvo</h1>
                            <p>A <strong>Health Care Plus</strong> atende indivíduos e famílias que
                            buscam um serviço de saúde acessível, de qualidade e humanizado. Entre
                            os principais públicos estão:
                            </p>
                            <ul>
                                <li>Digitalização de processos</li>
                                <li>Modernização da presença online</li>
                                <li>Redução de custos com automação</li>
                                <li>Atendimento técnico confiável e humanizado</li>
                            </ul>
                        </div>
                        <div className="diretoria">
                            <h1>Diretoria e Fundadores</h1>
                            <h3>Dra. Renata Lima - Diretora Clínica (CMO)</h3>
                            <p>Médica clínica geral com especialização em Medicina de Família e 
                                Comunidade. É responsável pelo corpo clínico e pela padronização 
                                dos protocolos de atendimento.
                            </p>
                            <h3>Felipe Andrade - Diretor Executivo (CEO)</h3>
                            <p>Administrador com MBA em Gestão de Saúde. Atua na liderança estratégica 
                                da clínica, focado em inovação e expansão para novos bairros e cidades.
                            </p>
                            <h3>Tatiane Nunes - Diretora de Atendimento e Experiência do Paciente (CXO)</h3>
                            <p>Psicóloga com foco em humanização e acolhimento, é responsável pela 
                                qualidade do atendimento, escuta ativa dos pacientes e acompanhamento 
                                pós-consulta.
                            </p>
                        </div>
                        <div className="equipe">
                            <h1>Nossa Equipe</h1>
                            <p>A equipe da <strong>Health Care Plus</strong> é formada por mais de 40 profissionais, incluindo:
                            </p>
                            <ul>
                                <li>Médicos especialistas e clínicos gerais</li>
                                <li>Psicólogos e terapeutas</li>
                                <li>Nutricionistas e educadores físicos</li>
                                <li>Enfermeiros, técnicos de enfermagem e atendentes</li>
                                <li>Equipe de tecnologia para suporte às teleconsultas</li>
                                <li>Equipe administrativa e de atendimento ao cliente</li>
                            </ul>
                            <p>Todos os nossos profissionais passam por treinamentos constantes em acolhimento,
                                ética e qualidade assistencial.
                            </p>
                        </div>
                        <div className="localizacao">
                            <h1>Localização</h1>
                            <p>Matriz: Rua da Saúde, 250 - Campinas, SP</p>
                            <p>Unidades: Sorocaba, Jundiaí, São José dos Campos</p>
                            <p>Atendimento também por telemedicina em todo o Brasil.</p>
                        </div>
                        <div className="contato">
                            <h1>Nossos Contatos</h1>
                            <ul>
                                <li>Site: www.healthcareplus.com.br</li>
                                <li>E-mail: atendimento@healthcareplus.com</li>
                                <li>WhatsApp: (11) 99999-0003</li>
                                <li>Instagram: @healthcareplus.br</li>
                                <li>Horário de atendimento: Segunda a sábado, das 7h às 20h</li>
                            </ul>
                        </div>
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