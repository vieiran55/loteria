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
import logo from "imgs/Logo_Sena.svg";
import estilos from "./Home.module.scss";

export default function Home(props: INav) {
  const { navValue, setNavValue } = props;

  return (
    <>
      <section className={estilos.principal}>
        <img
          className={estilos.logo__principal}
          src={logo}
          alt="icone de mergulhador"
        />
        <div className={estilos.texto}>
          <h1 className={estilos.titulo}>Loterias</h1>
          <p className={estilos.descricao}>
            Escolha qual resultado de loteria deseja consultar.
          </p>
          <MenuNav navValue={navValue} setNavValue={setNavValue} />
        </div>
      </section>
    </>
  );
}
