<<<<<<< HEAD
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  List,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
  Alert,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ModalNotas from "./ModalNotas";

function Notas() {
  const params = useParams();
  const [asignatura, setAsignatura] = useState([
    {
      nombre_asignatura: "",
    },
  ]);
  const cargarAsignatura = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/cursos/${params.id}/detallescurso/asignarmaterias/delete`
    );
    const data = await response.json();
    data.map((dato) => {
      if (dato.id_asignatura.toString() === params.asignatura.toString()) {
        setAsignatura(dato);
      }
      return dato;
    });
  };
  const [estudiantes, setEstudiantes] = useState([]);

  const cargarEstudiante = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/notas/${params.id}`
    );
    const data = await response.json();
    setEstudiantes(data);

  };
  const [notas, setNotas] = useState([]);
  const cargarNotas = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/notas/cargar/${params.asignatura}`
    );
    const data = await response.json();
    setNotas(data);
  };
  const [promedio, setPromedio] = useState([]);
  const cargarPromedio = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/notas/promedio/${params.asignatura}`
    );
    const data = await response.json();
    setPromedio(data);
  };

  useEffect(() => {
    cargarAsignatura();
    cargarEstudiante();
    
  },);
  useEffect(()=>{
    cargarNotas();
    cargarPromedio();
  },)
  return (
    <>
      <h1>{asignatura.nombre_asignatura}</h1>
      {estudiantes.length > 0 ? (
        <List>
          {estudiantes.map((asig, index) => (
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
                <Typography>
                  {asig.nombre_estudiante} {asig.apellido_estudiante}
                </Typography>
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
                  justifyContent="space-between"
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
                  {notas.length > 0 ? (
                    notas.map((dato, index) =>
                      asig.id_estudiante === dato.id_estudiante ? (
                        <Stack
                          direction="row"
                          justifyContent="flex-end"
                          alignItems="center"
                          spacing={1}
                          key={index}
                        >
                          <Typography textTransform={"uppercase"}>
                            {dato.tema} :
                          </Typography>
                          <ModalNotas>
                            {params.asignatura}
                            {asig.id_estudiante}
                            {dato.valor_nota}
                            {dato.tema}
                            {dato.id_nota}
                          </ModalNotas>
                        </Stack>
                      ) : null
                    )
                  ) : (
                    <Typography>Estudiante sin notas asignadas</Typography>
                  )}
                  <Stack
                    direction="row-reverse"
                    alignItems="center"
                    justifyContent="space-around"
                    divider={<Divider orientation="horizontal" flexItem />}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "2rem",
                      }}
                    >
                      {promedio.length>0?promedio.map((prom, index) =>
                        asig.id_estudiante === prom.id_estudiante ? (
                          <Button
                            variant="outlined"
                            style={{ color: "white", cursor: "auto" }}
                            key={index}
                          >
                            Promedio: {prom.trunc}
                          </Button>
                        ) : null
                      ):null}
                    </div>
                    <ModalNotas>
                      {params.asignatura}
                      {asig.id_estudiante}
                      {"Crear"}
                      {""}
                    </ModalNotas>
                  </Stack>
                </Stack>
              </AccordionDetails>
            </Accordion>
          ))}
        </List>
      ) : (
        <Alert
          severity="error"
          color="error"
          style={{ background: "rgba(0,0,0, 0.8)", color: "#0698D6" }}
        >
          Este curso no tiene estudiantes
        </Alert>
      )}
    </>
  );
}

export default Notas;
=======
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  List,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
  Alert,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ModalNotas from "./ModalNotas";

function Notas() {
  const params = useParams();
  const [asignatura, setAsignatura] = useState([
    {
      nombre_asignatura: "",
    },
  ]);
  const cargarAsignatura = async () => {
    const response = await fetch(
      "http://localhost:4000/cursos/" +
        params.id +
        "/detallescurso/asignarmaterias/delete"
    );
    const data = await response.json();
    data.map((dato) => {
      if (dato.id_asignatura.toString() === params.asignatura.toString()) {
        setAsignatura(dato);
      }
      return dato;
    });
  };
  const [estudiantes, setEstudiantes] = useState([]);

  const cargarEstudiante = async () => {
    const response = await fetch(
      "http://localhost:4000/notas/" + params.id + ""
    );
    const data = await response.json();
    setEstudiantes(data);

  };
  const [notas, setNotas] = useState([]);
  const cargarNotas = async () => {
    const response = await fetch(
      "http://localhost:4000/notas/cargar/" + params.asignatura
    );
    const data = await response.json();
    setNotas(data);
  };
  const [promedio, setPromedio] = useState([]);
  const cargarPromedio = async () => {
    const response = await fetch(
      "http://localhost:4000/notas/promedio/" + params.asignatura
    );
    const data = await response.json();
    setPromedio(data);
  };

  useEffect(() => {
    cargarAsignatura();
    cargarEstudiante();
    
  },);
  useEffect(()=>{
    cargarNotas();
    cargarPromedio();
  },)
  return (
    <>
      <h1>{asignatura.nombre_asignatura}</h1>
      {estudiantes.length > 0 ? (
        <List>
          {estudiantes.map((asig, index) => (
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
                <Typography>
                  {asig.nombre_estudiante} {asig.apellido_estudiante}
                </Typography>
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
                  justifyContent="space-between"
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
                  {notas.length > 0 ? (
                    notas.map((dato, index) =>
                      asig.id_estudiante === dato.id_estudiante ? (
                        <Stack
                          direction="row"
                          justifyContent="flex-end"
                          alignItems="center"
                          spacing={1}
                          key={index}
                        >
                          <Typography textTransform={"uppercase"}>
                            {dato.tema} :
                          </Typography>
                          <ModalNotas>
                            {params.asignatura}
                            {asig.id_estudiante}
                            {dato.valor_nota}
                            {dato.tema}
                            {dato.id_nota}
                          </ModalNotas>
                        </Stack>
                      ) : null
                    )
                  ) : (
                    <Typography>Estudiante sin notas asignadas</Typography>
                  )}
                  <Stack
                    direction="row-reverse"
                    alignItems="center"
                    justifyContent="space-around"
                    divider={<Divider orientation="horizontal" flexItem />}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "2rem",
                      }}
                    >
                      {promedio.length>0?promedio.map((prom, index) =>
                        asig.id_estudiante === prom.id_estudiante ? (
                          <Button
                            variant="outlined"
                            style={{ color: "white", cursor: "auto" }}
                            key={index}
                          >
                            Promedio: {prom.trunc}
                          </Button>
                        ) : null
                      ):null}
                    </div>
                    <ModalNotas>
                      {params.asignatura}
                      {asig.id_estudiante}
                      {"Crear"}
                      {""}
                    </ModalNotas>
                  </Stack>
                </Stack>
              </AccordionDetails>
            </Accordion>
          ))}
        </List>
      ) : (
        <Alert
          severity="error"
          color="error"
          style={{ background: "rgba(0,0,0, 0.8)", color: "#0698D6" }}
        >
          Este curso no tiene estudiantes
        </Alert>
      )}
    </>
  );
}

export default Notas;
>>>>>>> b754d4ab2c15008b3fab54500ca08345d8087dbc
