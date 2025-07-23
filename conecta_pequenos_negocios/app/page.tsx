import Image from "next/image";
import Header from "./componentes/header/header";
import Section from "./componentes/section/section";
import Display from "./componentes/display/display";
import Bottom from "./componentes/bottom/bottom";

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
