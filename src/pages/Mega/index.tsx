import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import MenuNav from "../../components/MenuNav";
import INav from "../../interfaces/INav";
import estilos from "../../styles/Loterias.module.scss";
import logo from "imgs/Logo_Sena.svg";

export default function Mega(props: INav) {
  const { navValue, setNavValue } = props;
  const [megaSena, setMegaSena] = useState([]);
  const [megaNrConsurso, setMegaNrConsurso] = useState("");
  const [megaData, setMegaData] = useState("");
  const date = new Date(megaData);
  const dataFormatada = date.toLocaleDateString("en-GB");

  useEffect(() => {
    axios
      .get(
        "https://servicebus2.caixa.gov.br/portaldeloterias/api/megasena/"
      )
      .then((resposta) => {
        setMegaSena(resposta.data.listaDezenas);
        setMegaNrConsurso(resposta.data.numero);
        setMegaData(resposta.data.dataApuracao);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <div className={estilos.mega}>
      <div className={estilos.box}>
        <div className={estilos.botao}>
          <MenuNav navValue={navValue} setNavValue={setNavValue} />
        </div>
        <div className={estilos.cabecalho}>
          <img className={estilos.imagem} src={logo} />
          <h1 className={estilos.titulo}>MEGA-SENA</h1>
        </div>
        <div>
          <h2 className={estilos.concurso}>CONCURSO Nº {megaNrConsurso}</h2>
          <h2 className={estilos.concurso__tablet}>CONCURSO</h2>
          <h3 className={estilos.concurso__data}>{megaNrConsurso} - {megaData}</h3>
        </div>
      </div>
      <div className={estilos.numeros}>
        <div className={estilos.numeros__conteiner}>
          <div className={estilos.numeros__sorteados}>
            {megaSena.map((item, index) => (
              <h2 className={estilos.resultados} key={index}>{item}</h2>
            ))}
          </div>
        </div>
        <div className={estilos.sobre}>
          <h1>CONCURSO</h1>
          <h2>{megaNrConsurso} - {megaData}</h2>
        </div>
      </div>
    </div>
  );
}
