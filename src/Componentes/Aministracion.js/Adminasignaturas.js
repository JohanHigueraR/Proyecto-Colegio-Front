import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import {
  Button,
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Alert
} from "@mui/material";
import BasicModal from "../Modal";

function Adminasignaturas() {
  const [asignatura, setAsignatura] = useState([]);
  const cargarAsignatura = async () => {
    const response = await fetch(
      "http://localhost:4000/administracion/asignaturas"
    );
    const data = await response.json();
    setAsignatura(data);
  };
  useEffect(() => {
    cargarAsignatura();
  }, []);
  const eliminarAsignatura = async (id) => {
    const body = {
      id_asignatura: id,
    };
    await fetch("http://localhost:4000/administracion/asignaturas", {
      method: "DELETE",
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json" },
    });
  };
  const restaurarAsignatura = async (id) => {
    const body = {
      id_asignatura: id,
    };
    await fetch("http://localhost:4000/administracion/asignaturas", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json" },
    });
  };

  return (
    <div style={{ margin: "2rem" }}>
      <Typography textTransform={"uppercase"} variant={"h5"}>
        Asignaturas Archivadas
      </Typography>
      <List>
        {asignatura.length>0? asignatura.map((asig) => (
          <ListItem
            disablePadding
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.486)",
              marginBottom: "1px",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 4)",
              },
            }}
            key={asig.id_asignatura}
          >
            <ListItemButton>
              <ListItemText>{asig.nombre_asignatura}</ListItemText>
            </ListItemButton>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Button variant="contained" onClick={()=>restaurarAsignatura(asig.id_asignatura)}>Restaurar</Button>
              <BasicModal>
                <Typography component={"span"}>Eliminar Asignatura</Typography>
                <Typography component={"span"}>
                  ¿Estas seguro que deseas eliminar el curso{" "}
                  {asig.nombre_asignatura}? se perdera toda la información
                  relacionada.
                </Typography>
                {() => eliminarAsignatura(asig.id_asignatura)}
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

export default Adminasignaturas;
