import axios from "axios";
import { useState, useEffect } from "react";
import MenuNav from "../../components/MenuNav";
import INav from "../../interfaces/INav";
import estilos from "../../styles/Loterias.module.scss";
import logo from "imgs/Logo_Sena.svg";

export default function Quina(props: INav) {
  const {navValue, setNavValue} = props;
  const [quina, setQuina] = useState([]);
  const [quinaNrConsurso, setQuinaNrConsurso] = useState("");
  const [quinaData, setQuinaData] = useState("");
  const date = new Date(quinaData);
  const dataFormatada = date.toLocaleDateString("en-GB");

  useEffect(() => {
    axios
      .get(
        "https://servicebus2.caixa.gov.br/portaldeloterias/api/quina/"
      )
      .then((resposta) => {
        setQuina(resposta.data.listaDezenas);
        setQuinaNrConsurso(resposta.data.numero);
        setQuinaData(resposta.data.dataApuracao);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <div className={estilos.quina}>
      <div className={estilos.box}>
        <div className={estilos.botao}>
          <MenuNav navValue={navValue} setNavValue={setNavValue} />
        </div>
        <div className={estilos.cabecalho}>
          <img className={estilos.imagem} src={logo} />
          <h1 className={estilos.titulo}>QUINA</h1>
        </div>
        <div>
          <h2 className={estilos.concurso}>CONCURSO Nº {quinaNrConsurso}</h2>
          <h2 className={estilos.concurso__tablet}>CONCURSO</h2>
          <h3 className={estilos.concurso__data}>{quinaNrConsurso} - {quinaData}</h3>
        </div>
      </div>
      <div className={estilos.numeros}>
        <div className={estilos.numeros__conteiner}>
          <div className={estilos.numeros__sorteados}>
            {quina.map((item, index) => (
              <h2 className={estilos.resultados} key={index}>{item}</h2>
            ))}
          </div>
        </div>
        <div className={estilos.sobre}>
          <h1>CONCURSO</h1>
          <h2>{quinaNrConsurso} - {quinaData}</h2>
        </div>
      </div>
    </div>
  );
}
