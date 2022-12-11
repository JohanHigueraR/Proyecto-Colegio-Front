import {
  List,
  ListItemButton,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material";
import { useState} from "react";
import { useParams} from "react-router-dom";
import Modal from './Modal'


function FormAsignarMaterias() {
  const params = useParams();
  const [asignatura, setAsignatura] = useState([{
    id_asignatura:"",
    nombre_asignatura:"",
    nombre_curso:""
  }]);
 
  const cargarAsignatura = async () => {
    const response = await fetch(
      "http://localhost:4000/cursos/" +
        params.id +
        "/detallescurso/asignarmaterias/delete"
    );
    const data = await response.json();
    setAsignatura(data);
  };
  cargarAsignatura()
  const handleChangeCheckbox =async (id_asignatura) => {
    const body ={
      id_asignatura: id_asignatura
    } 
    await fetch("http://localhost:4000/cursos/" +
    params.id +
    "/detallescurso/asignarmaterias/delete",{
      method: 'DELETE',
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    }) 
    setAsignatura(asignatura.filter((asigna)=> asigna.id_asignatura !== id_asignatura))
  };
 

  
  return (
    <>
      <h1>Lista de Asignaturas para eliminar</h1>
      <List>
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
              <ListItemText>{asig.nombre_asignatura}</ListItemText>
              <Modal>
              <Typography component={"span"}>Eliminar Materia</Typography>
          <Typography component={"span"}>
            Estas seguro que deseas eliminar el curso {asig.nombre_asignatura}
          </Typography>
              {()=>handleChangeCheckbox(asig.id_asignatura)}
              </Modal>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default FormAsignarMaterias;
