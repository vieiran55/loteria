import axios from "axios";
import { useState, useEffect } from "react";
import MenuNav from "../../components/nav";
import INav from "../../interfaces/INav";

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
    <>
      <MenuNav navValue={navValue} setNavValue={setNavValue}/>
      <div>
        {DiaDeSorteNrConsurso} / {dataFormatada} / {DiaDeSorteNome}
      </div>
      <div>
        {DiaDeSorte.map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
      </div>
    </>
  );
}
