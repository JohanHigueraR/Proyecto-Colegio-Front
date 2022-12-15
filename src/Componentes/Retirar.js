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
  
  
  function RetirarEstudiante() {
    const params = useParams();
    const [asignatura, setAsignatura] = useState([{
      id_asignatura:"",
      nombre_asignatura:"",
      nombre_curso:""
    }]);
   
    const cargarAsignatura = async () => {
      const response = await fetch(
        "http://localhost:4000/notas/"+params.id
      );
      const data = await response.json();
      setAsignatura(data);
    };
    cargarAsignatura()
    const handleChangeCheckbox =async (id_estudiante) => {
      const body ={
        id_estudiante: id_estudiante
      } 
      await fetch("http://localhost:4000/estudiantes/retirar",{
        method: 'PUT',
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      }) 
      setAsignatura(asignatura.filter((asigna)=> asigna.id_asignatura !== id_estudiante))
    };
   
  
    
    return (
      <>
        <h1>Lista de estudiantes para retirar</h1>
        <List>
          {asignatura.map((asig,index) => (
            <ListItem 
              key={index}
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
                <ListItemText>{asig.nombre_estudiante} {asig.apellido_estudiante}</ListItemText>
                <Modal>
                <Typography component={"span"}>Retirar Estudiante</Typography>
            <Typography component={"span"}>
              Estas seguro que deseas retirar el estudiante {asig.nombre_estudiante}
            </Typography>
                {()=>handleChangeCheckbox(asig.id_estudiante)}
                </Modal>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </>
    );
  }
  
  export default RetirarEstudiante;
  