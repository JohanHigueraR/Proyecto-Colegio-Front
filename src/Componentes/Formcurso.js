<<<<<<< HEAD
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
} from "@mui/material";

function Formcurso() {
  const navigate = useNavigate();
  const params = useParams();
  const [curso, setCurso] = useState({
    nombre_curso: "",
    director_curso: "",
  });
  const [loading, setLoading] = useState(false);
  const [editar, setEditar] = useState(false);
  const handleChange = (e) => {
    setCurso({ ...curso, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (editar) {
        await fetch(`${process.env.REACT_APP_SERVER_URL}/cursos/${params.id}/editarcurso`, {
        method: "PUT",
        body: JSON.stringify(curso),
        headers: { "Content-type": "application/json" },
      });
      setLoading(false);
      navigate("/cursos");
    } else {
        await fetch(`${process.env.REACT_APP_SERVER_URL}/cursos/crearcurso`, {
        method: "POST",
        body: JSON.stringify(curso),
        headers: { "Content-type": "application/json" },
      });
    }

    setLoading(false);
    navigate("/cursos");
  };
  const cargarCurso = async (id) => {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/cursos/${id}/detallescurso`
    );
    const data = await response.json();
    setCurso({ nombre_curso: data.nombre_curso, director_curso: data.director_curso });
    setEditar(true);
  };
  useEffect(() => {
    if (params.id) {
      cargarCurso(params.id);
    }
  }, [params.id]);
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{ backgroundColor: "#1e272e", padding: "1rem" }}
        >
          <Typography variant="h5" textAlign={"center"} color="white">
            {editar ? "Editar Curso": "Crear Curso"}
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Nombre del curso:"
                sx={{ display: "block", margin: "0.5rem" }}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                name="nombre_curso"
                value={curso.nombre_curso}
                onChange={handleChange}
              ></TextField>
              <TextField
                variant="filled"
                label="Nombre del director:"
                sx={{ display: "block", margin: "0.5rem" }}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                name="director_curso"
                value={curso.director_curso}
                onChange={handleChange}
              ></TextField>
              

              <Button
                variant="contained"
                style={{ marginLeft: "3rem" }}
                type="sumbit"
                disabled={!curso.nombre_curso || !curso.director_curso}
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

export default Formcurso;
=======
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
} from "@mui/material";

function Formcurso() {
  const navigate = useNavigate();
  const params = useParams();
  const [curso, setCurso] = useState({
    nombre_curso: "",
    director_curso: "",
  });
  const [loading, setLoading] = useState(false);
  const [editar, setEditar] = useState(false);
  const handleChange = (e) => {
    setCurso({ ...curso, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (editar) {
        await fetch("http://localhost:4000/cursos/"+params.id+"/editarcurso", {
        method: "PUT",
        body: JSON.stringify(curso),
        headers: { "Content-type": "application/json" },
      });
      setLoading(false);
      navigate("/cursos");
    } else {
        await fetch("http://localhost:4000/cursos/crearcurso", {
        method: "POST",
        body: JSON.stringify(curso),
        headers: { "Content-type": "application/json" },
      });
    }

    setLoading(false);
    navigate("/cursos");
  };
  const cargarCurso = async (id) => {
    const response = await fetch(
      "http://localhost:4000/cursos/" + id + "/detallescurso"
    );
    const data = await response.json();
    setCurso({ nombre_curso: data.nombre_curso, director_curso: data.director_curso });
    setEditar(true);
  };
  useEffect(() => {
    if (params.id) {
      cargarCurso(params.id);
    }
  }, [params.id]);
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{ backgroundColor: "#1e272e", padding: "1rem" }}
        >
          <Typography variant="h5" textAlign={"center"} color="white">
            {editar ? "Editar Curso": "Crear Curso"}
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Nombre del curso:"
                sx={{ display: "block", margin: "0.5rem" }}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                name="nombre_curso"
                value={curso.nombre_curso}
                onChange={handleChange}
              ></TextField>
              <TextField
                variant="filled"
                label="Nombre del director:"
                sx={{ display: "block", margin: "0.5rem" }}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                name="director_curso"
                value={curso.director_curso}
                onChange={handleChange}
              ></TextField>
              

              <Button
                variant="contained"
                style={{ marginLeft: "3rem" }}
                type="sumbit"
                disabled={!curso.nombre_curso || !curso.director_curso}
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

export default Formcurso;
>>>>>>> b754d4ab2c15008b3fab54500ca08345d8087dbc
