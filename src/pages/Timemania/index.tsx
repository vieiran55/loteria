import axios from "axios";
import { useState, useEffect } from "react";
import MenuNav from "../../components/MenuNav";
import INav from "../../interfaces/INav";
import estilos from "../../styles/Loterias.module.scss";
import logo from "imgs/Logo_Sena.svg";

export default function Timemania(props: INav) {
  const {navValue, setNavValue} = props;
  const [Timemania, setTimemania] = useState([]);
  const [TimemaniaNrConsurso, setTimemaniaNrConsurso] = useState("");
  const [TimemaniaNome, setTimemaniaNome] = useState("");
  const [TimemaniaData, setTimemaniaData] = useState("");
  const date = new Date(TimemaniaData);
  const dataFormatada = date.toLocaleDateString("en-GB");

  useEffect(() => {
    axios
      .get(
        "https://apiloterias.com.br/app/resultado?loteria=timemania&token=Cg4qDgYQVXlbwWW"
      )
      .then((resposta) => {
        setTimemania(resposta.data.dezenas);
        setTimemaniaNrConsurso(resposta.data.numero_concurso);
        setTimemaniaData(resposta.data.data_concurso);
        setTimemaniaNome(resposta.data.nome);
        console.log(resposta);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <div className={estilos.timemania}>
      <div className={estilos.box}>
        <div className={estilos.botao}>
          <MenuNav navValue={navValue} setNavValue={setNavValue} />
        </div>
        <div className={estilos.cabecalho}>
          <img className={estilos.imagem} src={logo} />
          <h1 className={estilos.titulo}>{TimemaniaNome}</h1>
        </div>
        <div>
          <h2 className={estilos.concurso}>CONCURSO Nº {TimemaniaNrConsurso}</h2>
          <h2 className={estilos.concurso__tablet}>CONCURSO</h2>
          <h3 className={estilos.concurso__data}>{TimemaniaNrConsurso} - {dataFormatada}</h3>
        </div>
      </div>
      <div className={estilos.numeros}>
        <div className={estilos.numeros__conteiner}>
          <div className={estilos.numeros__sorteados}>
            {Timemania.map((item, index) => (
              <h2 className={estilos.resultados} key={index}>{item}</h2>
            ))}
          </div>
        </div>
        <div className={estilos.sobre}>
          <h1>CONCURSO</h1>
          <h2>{TimemaniaNrConsurso} - {dataFormatada}</h2>
        </div>
      </div>
    </div>
  );
}
