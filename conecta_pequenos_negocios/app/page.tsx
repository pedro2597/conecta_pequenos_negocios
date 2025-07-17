import Image from "next/image";
import Header from "../app/componentes/header/header";
import Section from "../app/componentes/section/section";
import Display from "../app/componentes/display/display";
import Bottom from "../app/componentes/bottom/bottom";

export default function Home() {
  return (
    <div className="tudo">
      <Header/>
      <Section/>
      <Display/>
      <Bottom/>
    </div>
  );
}
