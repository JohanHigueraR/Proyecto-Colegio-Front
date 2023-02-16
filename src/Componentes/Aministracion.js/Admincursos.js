<<<<<<< HEAD
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import {
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";
import BasicModal from "../Modal";
import Alert from '@mui/material/Alert';
function Admincursos() {
  const [cursos, setCursos] = useState([]);
  const cargarCursos = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/administracion/cursos`);
    const data = await response.json();
    setCursos(data);
  };
  useEffect(() => {
    cargarCursos();
  }, []);
  const restaurarCurso = async (id) => {
    const body = {
      id_curso: id
    }
    await fetch(`${process.env.REACT_APP_SERVER_URL}/administracion/cursos`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json" },
    });
  };
  const eliminarCurso = async(id) =>{
    const body = {
      id_curso: id
    }
    await fetch(`${process.env.REACT_APP_SERVER_URL}/cursos/10/eliminar`,{
      method: "DELETE",
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json" },
    })
  }

  return (
    <div style={{ margin: "2rem" }}>
      <Typography textTransform={"uppercase"} variant={"h5"}>
        Cursos Archivados
      </Typography>
      <List>
        {cursos.length>0?cursos.map((curso) => (
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
          >
            <ListItemButton>
              <ListItemText>{curso.nombre_curso}</ListItemText>
            </ListItemButton>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Button
                variant="contained"
                onClick={() => restaurarCurso(curso.id_curso)}
              >
                Restaurar
              </Button>
              <BasicModal>
                <Typography component={"span"}>Eliminar Curso</Typography>
                <Typography component={"span"}>
                  Estas seguro que deseas eliminar el curso {curso.nombre_curso}
                </Typography>
                  {()=>eliminarCurso(curso.id_curso)}
              </BasicModal>
            </Stack>
          </ListItem>
        )):<Alert
        severity="error"
        color="error"
        style={{ background: "rgba(0,0,0, 0.8)", color: "#0698D6" }}
      >
        No hay cursos archivados
      </Alert>}
      </List>
    </div>
  );
}

export default Admincursos;
=======
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import {
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";
import BasicModal from "../Modal";
import Alert from '@mui/material/Alert';
function Admincursos() {
  const [cursos, setCursos] = useState([]);
  const cargarCursos = async () => {
    const response = await fetch("http://localhost:4000/administracion/cursos");
    const data = await response.json();
    setCursos(data);
  };
  useEffect(() => {
    cargarCursos();
  }, []);
  const restaurarCurso = async (id) => {
    const body = {
      id_curso: id
    }
    await fetch("http://localhost:4000/administracion/cursos", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json" },
    });
  };
  const eliminarCurso = async(id) =>{
    const body = {
      id_curso: id
    }
    await fetch("http://localhost:4000/cursos/10/eliminar",{
      method: "DELETE",
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json" },
    })
  }

  return (
    <div style={{ margin: "2rem" }}>
      <Typography textTransform={"uppercase"} variant={"h5"}>
        Cursos Archivados
      </Typography>
      <List>
        {cursos.length>0?cursos.map((curso) => (
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
          >
            <ListItemButton>
              <ListItemText>{curso.nombre_curso}</ListItemText>
            </ListItemButton>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Button
                variant="contained"
                onClick={() => restaurarCurso(curso.id_curso)}
              >
                Restaurar
              </Button>
              <BasicModal>
                <Typography component={"span"}>Eliminar Curso</Typography>
                <Typography component={"span"}>
                  Estas seguro que deseas eliminar el curso {curso.nombre_curso}
                </Typography>
                  {()=>eliminarCurso(curso.id_curso)}
              </BasicModal>
            </Stack>
          </ListItem>
        )):<Alert
        severity="error"
        color="error"
        style={{ background: "rgba(0,0,0, 0.8)", color: "#0698D6" }}
      >
        No hay cursos archivados
      </Alert>}
      </List>
    </div>
  );
}

export default Admincursos;
>>>>>>> b754d4ab2c15008b3fab54500ca08345d8087dbc
