import { useNavigate } from "react-router-dom";
import {
  Button,
  List,
  ListItemButton,
  ListItem,
  ListItemText,
  Stack
} from "@mui/material";
import { useState, useEffect } from "react";
function ListaAsignaturas() {
  const navigate = useNavigate();
  const [asignatura, setAsignatura] = useState([]);
  const cargarAsignatura = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/asignaturas`);
    const data = await response.json();
    setAsignatura(data);
  };
  const archivarAsignatura = async (id) => {
    const body = {
      id_asignatura: id,
    };
    fetch(`${process.env.REACT_APP_SERVER_URL}/asignaturas`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json" },
    });
  };
  useEffect(() => {
    cargarAsignatura();
  }, []);
  return (
    <>
      <h1>Lista de Asignaturas</h1>
      <Button
        variant="contained"
        onClick={() => navigate("/asignaturas/crearasignatura")}
      >
        Crear Asignatura
      </Button>
      <List>
        {asignatura.map((asig) => (
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
              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={2}
              >
                <Button
                  variant="contained"
                  color="success"
                  onClick={() =>
                    navigate(
                      "/asignaturas/" + asig.id_asignatura + "/actualizar"
                    )
                  }
                >
                  Actualizar
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => archivarAsignatura(asig.id_asignatura)}
                >
                  Eliminar
                </Button>
              </Stack>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListaAsignaturas;
