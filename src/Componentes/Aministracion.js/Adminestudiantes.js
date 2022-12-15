import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Typography, Stack, Menu, MenuItem, Button} from "@mui/material";
import BasicModal from "../Modal";
/* import {useNavigate} from 'react-router-dom' */

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

function Adminestudiantes() {
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
  const restaurarEstudiante = async () => {
    const body = {
      id_estudiante: selectedRow,
    };
    await fetch("http://localhost:4000/administracion/estudiantes", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json" },
    });

    setEstudiantes(
      estudiantes.filter((estu) => estu.id_asignatura !== selectedRow)
    );
  };

  const eliminarEstudiante = async() => {
    const body = {
      id_estudiante: selectedRow,
    };
    await fetch("http://localhost:4000/administracion/estudiantes", {
      method: "DELETE",
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
  const cargarEstudiantes = async () => {
    const response = await fetch(
      "http://localhost:4000/administracion/estudiantes"
    );
    const data = await response.json();
    data.map((dato) => (dato.id = dato.id_estudiante));
    setEstudiantes(data);
  };

  useEffect(() => {
    cargarEstudiantes();
  },);
  /* const consoleLog = (e) =>{
    var id = e.currentTarget.getAttribute('data-id')
    navigate("/estudiantes/"+id+"/detalles") } */

  return (
    <div style={{ marginTop: "3rem" }}>
      <Typography variant="h4">Lista de estudiantes archivados</Typography>
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
        <MenuItem onClick={restaurarEstudiante}><Button variant="contained"> Restaurar estudiante</Button></MenuItem>
        <MenuItem>
          <BasicModal>
          <Typography component={"span"}>Eliminar Estudiante</Typography>
          <Typography component={"span"}>
            Estas seguro que deseas eliminar el curso {estudiantes.nombre_estudiante}
          </Typography>
              {()=>{eliminarEstudiante(); handleClose()}}
          </BasicModal>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Adminestudiantes;
