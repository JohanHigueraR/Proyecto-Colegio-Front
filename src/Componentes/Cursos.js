<<<<<<< HEAD
import { useEffect, useState } from "react";
import { List, ListItemButton, ListItem, ListItemText, Button} from "@mui/material";
import {useNavigate} from 'react-router-dom'

function ListaCursos() {
  const navigate = useNavigate()
  const [cursos, setCursos] = useState([]);
  const cargarCursos = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/cursos`);
    const data = await response.json();
    setCursos(data);
  };
  useEffect(() => {
    cargarCursos();
  }, []);
  
  return (
    <>
      <h1>Lista de Cursos</h1>
      <Button variant="contained" onClick={()=> navigate("/cursos/crearcurso")}>Crear Curso</Button>
      <List>
        {cursos.map((curso) => (
          <ListItem
            disablePadding
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.486)",
              marginBottom: "1px",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 4)",
              },
            }}
            key={curso.id_curso}
            onClick={()=>navigate("/cursos/"+curso.id_curso+"/detallescurso")}
          >
            <ListItemButton>
              <ListItemText>{curso.nombre_curso}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListaCursos;
=======
import { useEffect, useState } from "react";
import { List, ListItemButton, ListItem, ListItemText, Button} from "@mui/material";
import {useNavigate} from 'react-router-dom'

function ListaCursos() {
  const navigate = useNavigate()
  const [cursos, setCursos] = useState([]);
  const cargarCursos = async () => {
    const response = await fetch("http://localhost:4000/cursos");
    const data = await response.json();
    setCursos(data);
  };
  useEffect(() => {
    cargarCursos();
  }, []);
  
  return (
    <>
      <h1>Lista de Cursos</h1>
      <Button variant="contained" onClick={()=> navigate("/cursos/crearcurso")}>Crear Curso</Button>
      <List>
        {cursos.map((curso) => (
          <ListItem
            disablePadding
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.486)",
              marginBottom: "1px",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 4)",
              },
            }}
            key={curso.id_curso}
            onClick={()=>navigate("/cursos/"+curso.id_curso+"/detallescurso")}
          >
            <ListItemButton>
              <ListItemText>{curso.nombre_curso}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListaCursos;
>>>>>>> b754d4ab2c15008b3fab54500ca08345d8087dbc
