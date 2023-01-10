import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import INav from "../../interfaces/INav";
import estilos from "./MenuNav.module.scss";



export default function MenuNav({navValue, setNavValue}: INav) {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  return (
    <div>
      <Button
        className={estilos.botao}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{backgroundColor: "#e5e7eb", color: "black", border: "2px solid"}}
      >
        {navValue}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            setNavValue("MEGA-SENA");
            navigate("/mega");
            setAnchorEl(null);
          }}
        >
          MEGA-SENA
        </MenuItem>
        <MenuItem
          onClick={() => {
            setNavValue("quina");
            navigate("/quina");
            setAnchorEl(null);
          }}
        >
          QUINA
        </MenuItem>
        <MenuItem
          onClick={() => {
            setNavValue("lotofacil");
            navigate("/lotofacil");
            setAnchorEl(null);
          }}
        >
          LOTOFÁCIL
        </MenuItem>
        <MenuItem
          onClick={() => {
            setNavValue("lotomania");
            navigate("/lotomania");
            setAnchorEl(null);
          }}
        >
          LOGOMANIA
        </MenuItem>
        <MenuItem
          onClick={() => {
            setNavValue("TIMEMANIA");
            navigate("/timemania");
            setAnchorEl(null);
          }}
        >
          TIMEMANIA
        </MenuItem>
        <MenuItem
          onClick={() => {
            setNavValue("DIADESORTE");
            navigate("/diadesorte");
            setAnchorEl(null);
          }}
        >
          DIA DE SORTE
        </MenuItem>
      </Menu>
    </div>
  );
}
