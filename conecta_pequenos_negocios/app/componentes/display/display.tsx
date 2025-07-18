import "./display.css";
import Image from "next/image";
import Link from "next/link";
import Tech from "../../ferramentas/tech_solution.png";
import Green from "../../ferramentas/green_energy.png";
import Health from "../../ferramentas/health_care_plus.png";
import Edu from "../../ferramentas/edutech_academy.png";

export default function Display(){
    return(
        <div className="display">
            <div className="apresentar">
                <h1>Nossos Parceiros</h1>
            </div>
            <div className="janela">
                <div className="empresa1">
                    <div className="imagem">
                        <Image src={Tech} alt="Tech Solution" height={400}/>
                    </div>
                    <div className="informacoes">
                        <br></br>
                        <p>Empresa de soluções tecnológicas para o mercado financeiro.</p>
                        <br></br>
                        <p>contato@techsolutions.com</p>
                        <br></br>
                        <p>(11) 99999-0001</p>
                        <br></br>
                    </div>
                    <div className="saberMais">
                        <Link href="/tech_solution" className="saberTech">Saber Mais</Link>
                    </div>
                </div>
                <div className="empresa2">
                    <div className="imagem">
                        <Image src={Green} alt="Green Tecnology" height={400}/>
                    </div>
                    <div className="informacoes">
                        <br></br>
                        <p>Atuamos no setor de energia renovável e sustentabilidade.</p>
                        <br></br>
                        <p>contato@greenenergy.com</p>
                        <br></br>
                        <p>(11) 99999-0002</p>
                        <br></br>
                    </div>
                    <div className="saberMais">
                        <Link href="/green_energy" className="saberGreen">Saber Mais</Link>
                    </div>
                </div>
                <div className="empresa3">
                    <div className="imagem">
                        <Image src={Health} alt="Health Care Plus" height={400}/>
                    </div>
                    <div className="informacoes">
                        <br></br>
                        <p>Clínica médica especializada em atendimento personalizado.</p>
                        <br></br>
                        <p>contato@healthcareplus.com</p>
                        <br></br>
                        <p>(11) 99999-0003</p>
                        <br></br>
                    </div>
                    <div className="saberMais">
                        <Link href="/health_care_plus" className="saberHealth">Saber Mais</Link>
                    </div>
                </div>
                <div className="empresa4">
                    <div className="imagem">
                        <Image src={Edu} alt="EduTech Tecnology" height={400}/>
                    </div>
                    <div className="informacoes">
                        <br></br>
                        <p>Plataforma de educação online focada em tecnologia e inovação.</p>
                        <br></br>
                        <p>contato@edutechacademy.com</p>
                        <br></br>
                        <p>(11) 99999-0004</p>
                        <br></br>
                    </div>
                    <div className="saberMais">
                        <Link href="/edutech_academy" className="saberEdu">Saber Mais</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}