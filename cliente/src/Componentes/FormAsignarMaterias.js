import {
  Button,
  List,
  ListItemButton,
  ListItem,
  ListItemText,
  Checkbox,
  Stack,
  
} from "@mui/material";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function FormAsignarMaterias() {
  const params = useParams();
  const navigate = useNavigate();
  const [asignatura, setAsignatura] = useState([]);
  const [active, setActive] = useState([
    {
      id_asignatura: "",
    },
  ]);
  const cargarAsignatura = async () => {
    const response = await fetch("http://localhost:4000/asignaturas");
    const data = await response.json();
    setAsignatura(data);
  };
  const handleChangeCheckbox = (e) => {
    if (e.target.checked) {
      setActive([...active, { id_asignatura: e.target.name }]);
    }
  };
  const handleSubmit = () => {
    active.map(
      async (asignatura) =>
        await fetch(
          "http://localhost:4000/cursos/" +
            params.id +
            "/detallescurso/asignarmaterias",
          {
            method: "POST",
            body: JSON.stringify(asignatura),
            headers: { "Content-type": "application/json" },
          }
        )
        );
        navigate("/cursos/"+params.id+"/detallescurso")
  };

  useEffect(() => {
    cargarAsignatura();
  }, []);
  return (
    <>
      <h1>Lista de Asignaturas</h1>
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
              <Checkbox
                sx={{ color: "white" }}
                color="default"
                onClick={handleChangeCheckbox}
                name={asig.id_asignatura.toString()}
              ></Checkbox>
              <ListItemText>{asig.nombre_asignatura}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
          mt={1}
        >
          <Button variant="contained" onClick={handleSubmit}>
            Asignar
          </Button>
        </Stack>
      </List>
    </>
  );
}

export default FormAsignarMaterias;
