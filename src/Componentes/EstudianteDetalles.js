import {
  List,
  ListItemButton,
  ListItem,
  ListItemText,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BasicModal from './Modal'

function EstudianteDetalles() {
  const navigate = useNavigate();
  const params = useParams();
  const [estudiante, setEstudiante] = useState([
    {
      id_estudiante: "",
      nombre_estudiante: "",
      apellido_estudiante: "",
      curso_estudiante: "",
    },
  ]);
  const cargarEstudiante = async (id) => {
    const response = await fetch(
      "http://localhost:4000/estudiantes/" + id + "/detalles"
    );
    const data = await response.json();
    setEstudiante(data);
  };
 
  const eliminarEstudiante = async(id) => {
    await fetch(
        "http://localhost:4000/estudiantes/"+id+"/archivar",{
            method:"PUT"
        }
    )
    navigate("/estudiantes")
  };
  const [notas, setNotas] = useState([])
  const cargarNotas = async () => {
    const response = await fetch(
      "http://localhost:4000/notas/cargar/estudiante/"+params.id
    );
    const data = await response.json();
    setNotas(data);
  };
  const [promedio, setPromedio] = useState([])
  const cargarPromedio = async () => {
    const response = await fetch(
      "http://localhost:4000/notas/promedio/estudiante/"+params.id
    );
    const data = await response.json();
    setPromedio(data);
  };
  const [promedioGeneral, setPromedioGeneral] = useState([])
  const cargarPromedioGeneral =async () => {
    const response = await fetch(
      "http://localhost:4000/notas/promedio/general/"+params.id
    );
    const data = await response.json();
    setPromedioGeneral(data);
    
  };
  useEffect(() => {
    cargarEstudiante(params.id);
    cargarNotas()
    cargarPromedio()
    cargarPromedioGeneral()
  });

  return (
    <>
      <h1>
        {estudiante[0].nombre_estudiante} {estudiante[0].apellido_estudiante}
      </h1>
      <h2>{estudiante[0].nombre_curso}</h2>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h6">Registro de Notas:</Typography>
        <div>
          <Button
            sx={{marginRight:'1rem'}}
            variant="contained"
            onClick={() => navigate("/estudiantes/" + params.id + "/editar")}
          >
            Editar Estudiante
          </Button>
          <BasicModal>
          <Typography component={"span"}>Eliminar Estudiante</Typography>
          <Typography component={"span"}>
            Estas seguro que deseas eliminar el estudiante {estudiante[0].nombre_estudiante}
          </Typography>
          {() => eliminarEstudiante(params.id)}
          </BasicModal>
        </div>
      </Stack>
      <List>
        {estudiante.map((asig,index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.9)",

                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.93)",
                },
                color: "white",
              }}
              key={index}
            >
              <Typography>{asig.nombre_asignatura}</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.85)",

                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.85)",
                },
                color: "white",
              }}
            >
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
                divider={
                  <Divider
                    orientation="horizontal"
                    flexItem
                    style={{ color: "white" }}
                  />
                }
              >
                {notas.length>0?notas.map((nota, index)=>(
                  asig.id_asignatura === nota.id_asignatura? <Typography key={index}>{nota.tema}: {nota.valor_nota}</Typography>:null
                )):<Typography>Estudiante sin notas asignadas</Typography>}
                {promedio.length>0?promedio.map((prom, index)=>(
                  asig.id_asignatura === prom.id_asignatura? <Typography key={index}>Promedio: {prom.trunc}</Typography>: null
                )):<Typography>Estudiante sin notas asignadas</Typography>}
                
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}
        <ListItem
          disablePadding
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            marginBottom: "1px",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.75)",
            },
          }}
        >
          <ListItemButton>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              {promedio.length>0?<ListItemText>Promedio general: {promedioGeneral[0].trunc}</ListItemText>:null}
            </Stack>
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
}

export default EstudianteDetalles;
