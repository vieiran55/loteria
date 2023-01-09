import axios from "axios";
import { useState, useEffect } from "react";
import MenuNav from "../../components/nav";
import INav from "../../interfaces/INav";

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
    <>
      <MenuNav navValue={navValue} setNavValue={setNavValue}/>
      <div>
        {TimemaniaNrConsurso} / {dataFormatada} / {TimemaniaNome}
      </div>
      <div>
        {Timemania.map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
      </div>
    </>
  );
}
