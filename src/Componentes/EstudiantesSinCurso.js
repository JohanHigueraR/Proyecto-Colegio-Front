import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Typography, Stack, Menu, MenuItem, Button } from "@mui/material";

import { useParams } from "react-router-dom";

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

function EstudiantesSinCurso() {
  const params = useParams();
  const [selectedRow, setSelectedRow] = useState();
  const [contextMenu, setContextMenu] = useState(null);
  const handleContextMenu = (event) => {
    event.preventDefault();
    setSelectedRow(Number(event.currentTarget.getAttribute("data-id")));
    setContextMenu(
      contextMenu === null
        ? { mouseX: event.clientX - 2, mouseY: event.clientY - 4 }
        : null
    );
  };

  const asignarEstudianteSinCurso = async () => {
    const body = {
      id_estudiante: selectedRow,
    };
    await fetch(`${process.env.REACT_APP_SERVER_URL}/estudiantes/sincurso/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json" },
    });
    setEstudiantes(
      estudiantes.filter((estu) => estu.id_asignatura !== selectedRow)
    );
  };
  const handleClose = () => {
    setContextMenu(null);
  };

  const [estudiantes, setEstudiantes] = useState([]);
  const cargarEstudiantesSinCurso = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/estudiantes/sinCurso`);
    const data = await response.json();
    data.map((dato) => (dato.id = dato.id_estudiante));
    setEstudiantes(data);
  };

  useEffect(() => {
    cargarEstudiantesSinCurso();
  },);
  const [curso, setCurso] = useState([]);
  const cargarCurso = async (id) => {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/cursos/${id}/detallescurso`
    );
    const data = await response.json();
    setCurso(data);
  };
  useEffect(() => {
    if (params.id) {
      cargarCurso(params.id);
    }
  }, []);

  return (
    <div style={{ marginTop: "3rem" }}>
      <h1>{curso.nombre_curso}</h1>
      <Typography variant="h4">Lista de estudiantes sin curso</Typography>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        sx={{ marginBottom: "0.5rem" }}
      ></Stack>
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
            row: {
              /* onClick: ()=>navigate("/estudiantes/"+estudiantes.id_estudiante+"/actualizar")  */
              onClick: handleContextMenu,
              style: { cursor: "context-menu" },
            },
          }}
        ></DataGrid>
      </Box>
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
        componentsProps={{
          root: {
            onContextMenu: (e) => {
              e.preventDefault();
              handleClose();
            },
          },
        }}
      >
        <MenuItem
          onClick={() => {
            asignarEstudianteSinCurso();
            handleClose();
          }}
        >
          <Button variant="contained"> Asignar a este curso</Button>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default EstudiantesSinCurso;
