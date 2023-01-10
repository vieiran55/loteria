import axios from "axios";
import { useState, useEffect } from "react";
import MenuNav from "../../components/MenuNav";
import INav from "../../interfaces/INav";
import estilos from "../../styles/Loterias.module.scss";
import logo from "imgs/Logo_Sena.svg";

export default function Lotofacil(props: INav) {
  const {navValue, setNavValue} = props;
  const [Lotofacil, setLotofacil] = useState([]);
  const [LotofacilNrConsurso, setLotofacilNrConsurso] = useState("");
  const [LotofacilNome, setLotofacilNome] = useState("");
  const [LotofacilData, setLotofacilData] = useState("");
  const date = new Date(LotofacilData);
  const dataFormatada = date.toLocaleDateString("en-GB");

  useEffect(() => {
    axios
      .get(
        "https://apiloterias.com.br/app/resultado?loteria=lotofacil&token=Cg4qDgYQVXlbwWW"
      )
      .then((resposta) => {
        setLotofacil(resposta.data.dezenas);
        setLotofacilNrConsurso(resposta.data.numero_concurso);
        setLotofacilData(resposta.data.data_concurso);
        setLotofacilNome(resposta.data.nome);
        console.log(resposta);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <div className={estilos.lotofacil}>
      <div className={estilos.box}>
        <div className={estilos.botao}>
          <MenuNav navValue={navValue} setNavValue={setNavValue} />
        </div>
        <div className={estilos.cabecalho}>
          <img className={estilos.imagem} src={logo} />
          <h1 className={estilos.titulo}>{LotofacilNome}</h1>
        </div>
        <div>
          <h2 className={estilos.concurso}>CONCURSO Nº {LotofacilNrConsurso}</h2>
          <h2 className={estilos.concurso__tablet}>CONCURSO</h2>
          <h3 className={estilos.concurso__data}>{LotofacilNrConsurso} - {dataFormatada}</h3>
        </div>
      </div>
      <div className={estilos.numeros}>
        <div className={estilos.numeros__conteiner}>
          <div className={estilos.numeros__sorteados}>
            {Lotofacil.map((item, index) => (
              <h2 className={estilos.resultados} key={index}>{item}</h2>
            ))}
          </div>
        </div>
        <div className={estilos.sobre}>
          <h1>CONCURSO</h1>
          <h2>{LotofacilNrConsurso} - {dataFormatada}</h2>
        </div>
      </div>
    </div>
  );
}
