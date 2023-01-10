import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import MenuNav from "../../components/MenuNav";
import INav from "../../interfaces/INav";

export default function Home(props: INav) {
  const {navValue, setNavValue} = props;
  const [megaSena, setMegaSena] = useState([]);
  const [megaNrConsurso, setMegaNrConsurso] = useState("");
  const [megaNome, setMegaNome] = useState("");

  const [megaData, setMegaData] = useState("");
  const date = new Date(megaData);
  const dataFormatada = date.toLocaleDateString("en-GB");

  useEffect(() => {
    axios
      .get(
        "https://apiloterias.com.br/app/resultado?loteria=megasena&token=Cg4qDgYQVXlbwWW"
      )
      .then((resposta) => {
        setMegaSena(resposta.data.dezenas);
        setMegaNrConsurso(resposta.data.numero_concurso);
        setMegaData(resposta.data.data_concurso);
        setMegaNome(resposta.data.nome);
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
        {megaNrConsurso} / {dataFormatada} / {megaNome}
      </div>
      <div>
        {megaSena.map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
      </div>
    </>
  );
}
