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


function FormCrearAsignatura() {
    const navigate = useNavigate();
    const params = useParams();
    const [asignatura, setAsignatura] = useState({
      nombre_asignatura: "",
    });
    const [loading, setLoading] = useState(false);
    const [editar, setEditar] = useState(false);
    const handleChange = (e) => {
      setAsignatura({ ...asignatura, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      if (editar) {
          await fetch(`${process.env.REACT_APP_SERVER_URL}/asignaturas/${params.id}/crearasignatura`, {
          method: "PUT",
          body: JSON.stringify(asignatura),
          headers: { "Content-type": "application/json" },
        });
        setLoading(false);
        navigate("/asignaturas");
      } else {
          await fetch(`${process.env.REACT_APP_SERVER_URL}/asignaturas/crearasignatura`, {
          method: "POST",
          body: JSON.stringify(asignatura),
          headers: { "Content-type": "application/json" },
        });
      }
  
      setLoading(false);
      navigate("/asignaturas");
    };
    const cargarAsignatura = async (id) => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/asignaturas/${id}/crearasignatura`
      );
      const data = await response.json();
      setAsignatura({ nombre_asignatura: data.nombre_asignatura });
      setEditar(true);
    };
    useEffect(() => {
      if (params.id) {
        cargarAsignatura(params.id);
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
              {editar? "Editar Asignatura": "Crear Asignatura"}
            </Typography>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField
                  variant="filled"
                  label="Nombre de la asignatura:"
                  sx={{ display: "block", margin: "0.5rem" }}
                  inputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                  name="nombre_asignatura"
                  value={asignatura.nombre_asignatura}
                  onChange={handleChange}
                ></TextField>
               
                
  
                <Button
                  variant="contained"
                  style={{ marginLeft: "3rem" }}
                  type="sumbit"
                  disabled={!asignatura.nombre_asignatura}
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

export default FormCrearAsignatura