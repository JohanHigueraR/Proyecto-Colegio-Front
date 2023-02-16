import * as React from "react";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";
import Admincursos from "./Admincursos";
import Adminasignaturas from "./Adminasignaturas";
import Adminestudiantes from "./Adminestudiantes";

function AdminNotas() {
    return (
        <div style={{ margin: "2rem" }}>
          <Typography textTransform={"uppercase"} variant={"h5"}>
            Lista de Archivados
          </Typography>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
          >
            <Button variant={"contained"} color={"info"} onClick={<Admincursos></Admincursos>}>
              Cursos
            </Button>
            <Button variant={"contained"} color={"info"} onClick={<Adminasignaturas></Adminasignaturas>}>
              Asignaturas
            </Button>
            <Button variant={"contained"} color={"info"} onClick={<Adminestudiantes></Adminestudiantes>}>
              Estudiantes
            </Button>
            <Button variant={"contained"} color={"info"} onClick={<AdminNotas></AdminNotas>}>
              Notas
            </Button>
          </Stack>
        </div>
      );
}

export default AdminNotas