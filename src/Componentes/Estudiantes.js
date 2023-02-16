<<<<<<< HEAD
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Typography, Stack } from "@mui/material";
import {useNavigate} from 'react-router-dom'

const columns = [
  {
    field: "nombre_estudiante",
    headerName: "Nombre",
    width: 220,
    editable: false,
  },
  {
    field: "apellido_estudiante",
    headerName: "Apellido",
    width: 220,
    editable: false,
  },
  {
    field: "nombre_curso",
    headerName: "Curso",
    width: 160,
    editable: false,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 440,
    valueGetter: (params) =>
      `${params.row.nombre_estudiante || ""} ${
        params.row.apellido_estudiante || ""
      }`,
  },
  
];

export default function Estudiantes() {
  const navigate = useNavigate()

  const [estudiantes, setEstudiantes] = useState([]);
  const cargarEstudiantes = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/estudiantes`);
    const data = await response.json();
    data.map((dato)=>(
      dato.id = dato.id_estudiante
    ))
    setEstudiantes(data)
    
    }
    
  useEffect(() => {
    cargarEstudiantes();
  }, []);
  const consoleLog = (e) =>{
    var id = e.currentTarget.getAttribute('data-id')
    navigate("/estudiantes/"+id+"/detalles") 
    
  }

  return (
    <div style={{ marginTop: "3rem" }}>
      <Typography variant="h4">Lista de estudiantes</Typography>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        sx={{marginBottom: '0.5rem'}}
      >
        <Button variant="contained" onClick={() => navigate("/estudiantes/crearestudiante")}>
          {" "}
          Crear Estudiante
        </Button>
      </Stack>
      <Box
        sx={{ height: 640, width: "100%", background: "black", color: "black" }}
      >
        <DataGrid
          style={{
            background: "#1e272e",
            color: "white",
            border: "3px solid black",
          }}
          rows={estudiantes}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          experimentalFeatures={{ newEditingApi: true }}
          componentsProps={{
            row:{
              /* onClick: ()=>navigate("/estudiantes/"+estudiantes.id_estudiante+"/actualizar")  */
              onClick: consoleLog
            }
          }}
          
        >
        </DataGrid>
      </Box>
    </div>
  );
}
=======
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Typography, Stack } from "@mui/material";
import {useNavigate} from 'react-router-dom'

const columns = [
  {
    field: "nombre_estudiante",
    headerName: "Nombre",
    width: 220,
    editable: false,
  },
  {
    field: "apellido_estudiante",
    headerName: "Apellido",
    width: 220,
    editable: false,
  },
  {
    field: "nombre_curso",
    headerName: "Curso",
    width: 160,
    editable: false,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 440,
    valueGetter: (params) =>
      `${params.row.nombre_estudiante || ""} ${
        params.row.apellido_estudiante || ""
      }`,
  },
  
];

export default function Estudiantes() {
  const navigate = useNavigate()

  const [estudiantes, setEstudiantes] = useState([]);
  const cargarEstudiantes = async () => {
    const response = await fetch("http://localhost:4000/estudiantes");
    const data = await response.json();
    data.map((dato)=>(
      dato.id = dato.id_estudiante
    ))
    setEstudiantes(data)
    
    }
    
  useEffect(() => {
    cargarEstudiantes();
  }, []);
  const consoleLog = (e) =>{
    var id = e.currentTarget.getAttribute('data-id')
    navigate("/estudiantes/"+id+"/detalles") 
    
  }

  return (
    <div style={{ marginTop: "3rem" }}>
      <Typography variant="h4">Lista de estudiantes</Typography>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        sx={{marginBottom: '0.5rem'}}
      >
        <Button variant="contained" onClick={() => navigate("/estudiantes/crearestudiante")}>
          {" "}
          Crear Estudiante
        </Button>
      </Stack>
      <Box
        sx={{ height: 640, width: "100%", background: "black", color: "black" }}
      >
        <DataGrid
          style={{
            background: "#1e272e",
            color: "white",
            border: "3px solid black",
          }}
          rows={estudiantes}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          experimentalFeatures={{ newEditingApi: true }}
          componentsProps={{
            row:{
              /* onClick: ()=>navigate("/estudiantes/"+estudiantes.id_estudiante+"/actualizar")  */
              onClick: consoleLog
            }
          }}
          
        >
        </DataGrid>
      </Box>
    </div>
  );
}
>>>>>>> b754d4ab2c15008b3fab54500ca08345d8087dbc
