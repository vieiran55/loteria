import axios from "axios";
import { useState, useEffect } from "react";
import MenuNav from "../../components/nav";
import INav from "../../interfaces/INav";

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
    <>
      <MenuNav navValue={navValue} setNavValue={setNavValue}/>
      <div>
        {quinaNrConsurso} / {dataFormatada} / {quinaNome}
      </div>
      <div>
        {quina.map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
      </div>
    </>
  );
}
