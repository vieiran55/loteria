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
  const [quinaNome, setQuinaNome] = useState("");
  const [quinaData, setQuinaData] = useState("");
  const date = new Date(quinaData);
  const dataFormatada = date.toLocaleDateString("en-GB");

  useEffect(() => {
    axios
      .get(
        "https://apiloterias.com.br/app/resultado?loteria=quina&token=Cg4qDgYQVXlbwWW"
      )
      .then((resposta) => {
        setQuina(resposta.data.dezenas);
        setQuinaNrConsurso(resposta.data.numero_concurso);
        setQuinaData(resposta.data.data_concurso);
        setQuinaNome(resposta.data.nome);
        console.log(resposta);
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
          <h1 className={estilos.titulo}>{quinaNome}</h1>
        </div>
        <div>
          <h2 className={estilos.concurso}>CONCURSO Nº {quinaNrConsurso}</h2>
          <h2 className={estilos.concurso__tablet}>CONCURSO</h2>
          <h3 className={estilos.concurso__data}>{quinaNrConsurso} - {dataFormatada}</h3>
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
          <h2>{quinaNrConsurso} - {dataFormatada}</h2>
        </div>
      </div>
    </div>
  );
}
