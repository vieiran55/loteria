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
  const [DiaDeSorteNome, setDiaDeSorteNome] = useState("");
  const [DiaDeSorteData, setDiaDeSorteData] = useState("");
  const date = new Date(DiaDeSorteData);
  const dataFormatada = date.toLocaleDateString("en-GB");

  useEffect(() => {
    axios
      .get(
        "https://apiloterias.com.br/app/resultado?loteria=diadesorte&token=Cg4qDgYQVXlbwWW"
      )
      .then((resposta) => {
        setDiaDeSorte(resposta.data.dezenas);
        setDiaDeSorteNrConsurso(resposta.data.numero_concurso);
        setDiaDeSorteData(resposta.data.data_concurso);
        setDiaDeSorteNome(resposta.data.nome);
        console.log(resposta);
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
          <h1 className={estilos.titulo}>{DiaDeSorteNome}</h1>
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
