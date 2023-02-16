import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, React } from "react";
import BasicModal from "./Modal";

import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  ButtonGroup,
} from "@mui/material";

function CursoEspecifico() {
  const navigate = useNavigate();
  const params = useParams();
  const [curso, setCurso] = useState([]);
  const cargarCurso = async (id) => {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/cursos/${id}/detallescurso`
    );
    const data = await response.json();
    setCurso(data);
  };
  useEffect(() => {
    if (params.id) {
      cargarCurso(params.id);
    }
  }, [params.id]);
  const eliminarCurso = async (id) => {
    await fetch(`${process.env.REACT_APP_SERVER_URL}/${id}/eliminar`, {
      method: "PUT",
    });
    navigate("/cursos");
  };
  const [asignatura, setAsignatura] = useState([
    {
      id_asignatura: "",
      nombre_asignatura: "",
      nombre_curso: "",
    },
  ]);

  const cargarAsignatura = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/cursos/${params.id}/detallescurso/asignarmaterias/delete`
    );
    const data = await response.json();
    setAsignatura(data);
  };
  cargarAsignatura();
  return (
    <>
      <h1>{curso.nombre_curso}</h1>
      <h3>Director: {curso.director_curso}</h3>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={2}
      >
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            variant="contained"
            onClick={() =>
              navigate("/cursos/" + curso.id_curso + "/editarcurso")
            }
          >
            Editar Curso
          </Button>
          <BasicModal>
            <Typography component={"span"}>Eliminar Curso</Typography>
            <Typography component={"span"}>
              Estas seguro que deseas eliminar el curso {curso.nombre_curso}
            </Typography>
            {() => eliminarCurso(curso.id_curso)}
          </BasicModal>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="contained" color="primary" onClick={()=>navigate("/cursos/"+params.id+"/asignarestudiantes")}> 
            Agregar Estudiante
          </Button>
          <Button variant="contained" color="warning" onClick={()=>navigate("/cursos/"+params.id+"/retirarestudiantes")}>Retirar estudiante</Button>
            
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            onClick={() =>
              navigate(
                "/cursos/" + curso.id_curso + "/detallescurso/asignarmaterias"
              )
            }
          >
            Asignar Materias
          </Button>
          <Button
            color="warning"
            onClick={() =>
              navigate(
                "/cursos/" +
                  curso.id_curso +
                  "/detallescurso/asignarmaterias/delete"
              )
            }
          >
            Eliminar Materias
          </Button>
        </ButtonGroup>
      </Stack>

      <List>
        <h1>Lista de Asignaturas</h1>
        {asignatura.map((asig) => (
          <ListItem
            key={asig.id_asignatura}
            disablePadding
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.486)",
              marginBottom: "1px",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 4)",
              },
            }}
          >
            <ListItemButton>
              <ListItemText
                onClick={() =>
                  navigate(
                    "/cursos/" +
                      params.id +
                      "/asignatura/" +
                      asig.id_asignatura +
                      "/notas"
                  )
                }
              >
                {asig.nombre_asignatura}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default CursoEspecifico;
