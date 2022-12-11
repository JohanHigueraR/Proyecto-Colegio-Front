import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  Grid,
  Typography,
  CardContent,
  TextField,
  Button,
  CircularProgress,
  MenuItem,
  Alert,
} from "@mui/material";

function FormEstudiante() {
  const [cursos, setCursos] = useState([]);
  const cargarCursos = async () => {
    const response = await fetch(
      "http://localhost:4000/estudiantes/asignarcurso"
    );
    const data = await response.json();
    setCursos(data);
  };
  useEffect(() => {
    cargarCursos();
  }, []);
  const [prueba1, setPrueba1] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const [estudiante, setEstudiante] = useState({
    nombre_estudiante: "",
    apellido_estudiante: "",
    nombre_curso: "",
  });
  const handleChangeList = (event) => {
    setPrueba1(event.target.value);
    setEstudiante({ ...estudiante, [event.target.name]: event.target.value });
    console.log(event.target);
  };
  const [loading, setLoading] = useState(false);
  const [editar, setEditar] = useState(false);
  const handleChange = (e) => {
    setEstudiante({ ...estudiante, [e.target.name]: e.target.value });
    console.log(estudiante);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (editar) {
      await fetch(
        "http://localhost:4000/estudiantes/" + params.id + "/editar",
        {
          method: "PUT",
          body: JSON.stringify(estudiante),
          headers: { "Content-type": "application/json" },
        }
      );
      setLoading(false);
      navigate("/estudiantes");
    } else {
      await fetch("http://localhost:4000/estudiantes", {
        method: "POST",
        body: JSON.stringify(estudiante),
        headers: { "Content-type": "application/json" },
      });
    }

    setLoading(false);
    navigate("/estudiantes");
  };
  const [student, setStudent] = useState([
    {
      nombre_estudiante: "",
      apellido_estudiante: "",
      nombre_curso: "",
    },
  ]);
  const cargarCurso = async (id) => {
    const response = await fetch(
      "http://localhost:4000/estudiantes/" + id + "/detalles"
    );
    const data = await response.json();
    setStudent(data);
    setEditar(true);
  };
  console.log(student[0])
  useEffect(() => {
    if (params.id) {
      cargarCurso(params.id);
    }
  }, [params.id]);

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={3}>
        <Alert
          severity="info"
          sx={{ color: "white", backgroundColor: "#00229E", margin: "1rem" }}
        >
          Recuerda que los cursos deben tener materias asignadas para poder
          seleccionarlos en este formulario
        </Alert>
        <Card
          sx={{ mt: 5 }}
          style={{ backgroundColor: "#1e272e", padding: "1rem" }}
        >
          <Typography variant="h5" textAlign={"center"} color="white">
            {editar ? "Editar estudiante" : "Crear estudiante"}
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Nombre del estudiante:"
                sx={{ display: "block", margin: "0.5rem" }}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                name="nombre_estudiante"
                onChange={handleChange}
                
                
              ></TextField>
              <TextField
                variant="filled"
                label="Apellido estudiante:"
                sx={{ display: "block", margin: "0.5rem" }}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                name="apellido_estudiante"
                onChange={handleChange}
              ></TextField>
              <TextField
                name="nombre_curso"
                id="outlined-select-currency"
                select
                label={editar ? student.nombre_curso : "Seleccionar Curso"}
                value={prueba1}
                onChange={handleChangeList}
                sx={{ margin: "0.5rem", color: "white" }}
                InputLabelProps={{ style: { color: "white" } }}
                variant="outlined"
                InputProps={{ style: { color: "white", width: "13rem" } }}
              >
                {cursos.map((option) => (
                  <MenuItem key={option.id_curso} value={option.nombre_curso}>
                    {option.nombre_curso}
                  </MenuItem>
                ))}
              </TextField>
              <Button
                variant="contained"
                style={{ marginLeft: "3rem" }}
                type="sumbit"
                disabled={
                  !estudiante.nombre_estudiante ||
                  !estudiante.apellido_estudiante ||
                  !estudiante.nombre_curso
                }
              >
                {loading ? (
                  <CircularProgress
                    color="inherit"
                    size={24}
                  ></CircularProgress>
                ) : (
                  "Guardar"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default FormEstudiante;
