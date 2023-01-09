import axios from "axios";
import { useState, useEffect } from "react";
import MenuNav from "../../components/nav";
import INav from "../../interfaces/INav";

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
    <>
      <MenuNav navValue={navValue} setNavValue={setNavValue}/>
      <div>
        {LotofacilNrConsurso} / {dataFormatada} / {LotofacilNome}
      </div>
      <div>
        {Lotofacil.map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
      </div>
    </>
  );
}
