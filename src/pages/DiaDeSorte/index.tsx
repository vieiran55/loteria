import axios from "axios";
import { useState, useEffect } from "react";
import MenuNav from "../../components/MenuNav";
import INav from "../../interfaces/INav";
import estilos from "../../styles/Loterias.module.scss";
import logo from "imgs/Logo_Sena.svg";

export default function DiaDeSorte(props: INav) {
  const {navValue, setNavValue} = props;
  const [DiaDeSorte, setDiaDeSorte] = useState([]);
  const [DiaDeSorteNrConsurso, setDiaDeSorteNrConsurso] = useState("");
  const [DiaDeSorteData, setDiaDeSorteData] = useState("");
  const date = new Date(DiaDeSorteData);
  const dataFormatada = date.toLocaleDateString("en-GB");

  useEffect(() => {
    axios
      .get(
        "https://servicebus2.caixa.gov.br/portaldeloterias/api/diadesorte/"
      )
      .then((resposta) => {
        setDiaDeSorte(resposta.data.listaDezenas);
        setDiaDeSorteNrConsurso(resposta.data.numero);
        setDiaDeSorteData(resposta.data.dataApuracao);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <div className={estilos.diadesorte}>
      <div className={estilos.box}>
        <div className={estilos.botao}>
          <MenuNav navValue={navValue} setNavValue={setNavValue} />
        </div>
        <div className={estilos.cabecalho}>
          <img className={estilos.imagem} src={logo} />
          <h1 className={estilos.titulo}>DIA DE SORTE</h1>
        </div>
        <div>
          <h2 className={estilos.concurso}>CONCURSO Nº {DiaDeSorteNrConsurso}</h2>
          <h2 className={estilos.concurso__tablet}>CONCURSO</h2>
          <h3 className={estilos.concurso__data}>{DiaDeSorteNrConsurso} - {dataFormatada}</h3>
        </div>
      </div>
      <div className={estilos.numeros}>
        <div className={estilos.numeros__conteiner}>
          <div className={estilos.numeros__sorteados}>
            {DiaDeSorte.map((item, index) => (
              <h2 className={estilos.resultados} key={index}>{item}</h2>
            ))}
          </div>
        </div>
        <div className={estilos.sobre}>
          <h1>CONCURSO</h1>
          <h2>{DiaDeSorteNrConsurso} - {dataFormatada}</h2>
        </div>
      </div>
    </div>
  );
}
