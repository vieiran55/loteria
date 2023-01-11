import axios from "axios";
import { useState, useEffect } from "react";
import MenuNav from "../../components/MenuNav";
import INav from "../../interfaces/INav";
import estilos from "../../styles/Loterias.module.scss";
import logo from "imgs/Logo_Sena.svg";

export default function Lotomania(props: INav) {
  const {navValue, setNavValue} = props;
  const [Lotomania, setLotomania] = useState([]);
  const [LotomaniaNrConsurso, setLotomaniaNrConsurso] = useState("");
  const [LotomaniaData, setLotomaniaData] = useState("");
  const date = new Date(LotomaniaData);
  const dataFormatada = date.toLocaleDateString("en-GB");

  useEffect(() => {
    axios
      .get(
        "https://servicebus2.caixa.gov.br/portaldeloterias/api/lotomania/"
      )
      .then((resposta) => {
        setLotomania(resposta.data.listaDezenas);
        setLotomaniaNrConsurso(resposta.data.numero);
        setLotomaniaData(resposta.data.dataApuracao);
        console.log(resposta);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <div className={estilos.lotomania}>
      <div className={estilos.box}>
        <div className={estilos.botao}>
          <MenuNav navValue={navValue} setNavValue={setNavValue} />
        </div>
        <div className={estilos.cabecalho}>
          <img className={estilos.imagem} src={logo} />
          <h1 className={estilos.titulo}>LOTOMANIA</h1>
        </div>
        <div>
          <h2 className={estilos.concurso}>CONCURSO Nº {LotomaniaNrConsurso}</h2>
          <h2 className={estilos.concurso__tablet}>CONCURSO</h2>
          <h3 className={estilos.concurso__data}>{LotomaniaNrConsurso} - {dataFormatada}</h3>
        </div>
      </div>
      <div className={estilos.numeros}>
        <div className={estilos.numeros__conteiner}>
          <div className={estilos.numeros__sorteados}>
            {Lotomania.map((item, index) => (
              <h2 className={estilos.resultados} key={index}>{item}</h2>
            ))}
          </div>
        </div>
        <div className={estilos.sobre}>
          <h1>CONCURSO</h1>
          <h2>{LotomaniaNrConsurso} - {dataFormatada}</h2>
        </div>
      </div>
    </div>
  );
}
