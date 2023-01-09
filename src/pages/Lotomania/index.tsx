import axios from "axios";
import { useState, useEffect } from "react";
import MenuNav from "../../components/nav";
import INav from "../../interfaces/INav";

export default function Lotomania(props: INav) {
  const {navValue, setNavValue} = props;
  const [Lotomania, setLotomania] = useState([]);
  const [LotomaniaNrConsurso, setLotomaniaNrConsurso] = useState("");
  const [LotomaniaNome, setLotomaniaNome] = useState("");
  const [LotomaniaData, setLotomaniaData] = useState("");
  const date = new Date(LotomaniaData);
  const dataFormatada = date.toLocaleDateString("en-GB");

  useEffect(() => {
    axios
      .get(
        "https://apiloterias.com.br/app/resultado?loteria=lotomania&token=Cg4qDgYQVXlbwWW"
      )
      .then((resposta) => {
        setLotomania(resposta.data.dezenas);
        setLotomaniaNrConsurso(resposta.data.numero_concurso);
        setLotomaniaData(resposta.data.data_concurso);
        setLotomaniaNome(resposta.data.nome);
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
        {LotomaniaNrConsurso} / {dataFormatada} / {LotomaniaNome}
      </div>
      <div>
        {Lotomania.map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
      </div>
    </>
  );
}
