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
                <div className="window">
                    <div className="imagem">
                        <Image src={Edu} alt="EduTech Academy" height={600}/>
                    </div>
                    <div className="content">
                        <div className="proposta">
                            <h1>Missão e Proposta da Empresa</h1>
                            <p>A <strong>EduTech Academy</strong> é uma edtech voltada à 
                            democratização do acesso à educação de qualidade por meio da tecnologia. 
                            Nosso propósito é transformar vidas através do aprendizado online, 
                            oferecendo cursos acessíveis, atualizados e práticos nas áreas mais 
                            demandadas do mercado de trabalho.
                            </p>
                        </div>
                        <div className="servicos">
                            <h1>Serviços Oferecidos</h1>
                            <ul>
                                <li>Plataforma de cursos online nas áreas de tecnologia, design, negócios e marketing</li>
                                <li>Trilhas de aprendizado personalizadas por carreira (Dev, UX, Data, Empreendedorismo, etc.)</li>
                                <li>Mentorias ao vivo com especialistas</li>
                                <li>Certificação digital válida em todo o Brasil</li>
                                <li>Parcerias com escolas, ONGs e empresas para capacitação técnica</li>
                                <li>Recursos de acessibilidade (legendas, leitura em voz alta, interface adaptada)</li>
                            </ul>
                        </div>
                        <div className="publico">
                            <h1>Publico Alvo</h1>
                            <p>A <strong>EduTech Academy</strong> atende a todos que desejam aprender 
                            de forma prática e acessível. Seu foco principal está em:</p>
                            <ul>
                                <li>Jovens e adultos em busca da primeira oportunidade no mercado de trabalho</li>
                                <li>Profissionais que desejam mudar de carreira ou se especializar</li>
                                <li>Empresas e startups que investem na qualificação de suas equipes</li>
                                <li>Estudantes do ensino médio interessados em cursos extracurriculares de tecnologia</li>
                                <li>Pessoas desempregadas em busca de recolocação rápida com cursos práticos e curtos</li>
                                <li>Instituições sociais e educacionais que buscam projetos de inclusão digital</li>
                            </ul>
                        </div>
                        <div className="diretoria">
                            <h1>Diretoria e Fundadores</h1>
                            <h3>Bruno Ferreira - Diretor Executivo (CEO)</h3>
                            <p>Formado em Sistemas de Informação, ex-professor de cursinho popular. Criou a 
                                EduTech Academy com o sonho de levar educação de qualidade às periferias e 
                                interior do Brasil.
                            </p>
                            <h3>Amanda Lopes - Diretora de Conteúdo e Pedagogia (CPO)</h3>
                            <p>Mestre em Educação e especialista em metodologias ativas de ensino. Lidera a 
                                curadoria e desenvolvimento dos cursos com foco na aprendizagem significativa.
                            </p>
                            <h3>Rafael Diniz - Diretor de Tecnologia (CTO)</h3>
                            <p>Engenheiro de software, responsável pela plataforma educacional, integração com 
                                IA e funcionalidades como gamificação, certificação automática e painéis de 
                                progresso.
                            </p>
                        </div>
                        <div className="equipe">
                            <h1>Nossa Equipe</h1>
                            <p>A <strong>EduTech Academy</strong> conta com uma equipe multidisciplinar de cerca de 60 pessoas, incluindo:</p>
                            <ul>
                                <li>Instrutores especialistas nas áreas de TI, Design, Marketing, Vendas, Soft Skills</li>
                                <li>Tutores e mentores para suporte direto aos alunos</li>
                                <li>Designers instrucionais e roteiristas para produção dos cursos</li>
                                <li>Desenvolvedores e engenheiros da plataforma educacional</li>
                                <li>Suporte ao aluno com atendimento via chat, e-mail e WhatsApp</li>
                            </ul>
                        </div>
                        <div className="localizacao">
                            <h1>Localização</h1>
                            <p>Matriz: Rua da Inovação, 456 - Recife, PE</p>
                            <p>Atuação 100% online em todo o território nacional</p>
                            <p>Parceiras presenciais em: SP, RJ, MG e CE</p>
                        </div>
                        <div className="contato">
                            <h1>Nossos Contatos</h1>
                            <ul>
                                <li>Site: www.edutechacademy.com.br</li>
                                <li>E-mail: contato@edutechacademy.com</li>
                                <li>WhatsApp: (11) 99999-0004</li>
                                <li>Instagram: @edutech.academy</li>
                                <li>Horário de atendimento: Segunda a sexta, das 9h às 18h</li>
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