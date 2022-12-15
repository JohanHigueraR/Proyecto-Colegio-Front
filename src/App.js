import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cursos from "./Componentes/Cursos";
import Formcurso from "./Componentes/Formcurso";
import { Container } from "@mui/material";
import CursoEspecifico from "./Componentes/CursoEspecifico";
import Asignaturas from "./Componentes/Asignaturas";
import FormAsignarMaterias from "./Componentes/FormAsignarMaterias";
import FormDeleteMaterias from "./Componentes/FormDeleteMaterias";
import FormCrearAsignatura from "./Componentes/FormCrearAsignatura";
import Autenticacion from "./Componentes/Autenticacion";
import Dashboard from "./Componentes/Dashboard";
import { useState } from "react";
import ResponsiveAppBar from './Componentes/NavbarResponsive'
import Administracion from "./Componentes/Aministracion.js/Administracion";
import Admincursos from "./Componentes/Aministracion.js/Admincursos";
import Adminasignaturas from "./Componentes/Aministracion.js/Adminasignaturas";
import Estudiantes from "./Componentes/Estudiantes";
import FormEstudiante from "./Componentes/Formestudiantes";
import EstudianteDetalles from "./Componentes/EstudianteDetalles";
import Adminestudiantes from "./Componentes/Aministracion.js/Adminestudiantes";
import Notas from "./Componentes/Notas";
import EstudiantesSinCurso from "./Componentes/EstudiantesSinCurso";
import RetirarEstudiante from "./Componentes/Retirar";

const URL = "https://colegio-enyoi-back.onrender.com"


function App() {
  const [login, setLogin] = useState("");
  const ValidarLogin = async (type) => {
    const response = await fetch(URL+"/login", {
      method: "PUT",
      body: JSON.stringify(type),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();
    setLogin(data);
    localStorage.setItem("validar", data);
  };


  return (
    <>
      {localStorage.validar === 'true' ? (
        <>
          <BrowserRouter>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Container>
              <Routes>
                <Route path="/" element={<Dashboard></Dashboard>}></Route>
                <Route path="/cursos" element={<Cursos />} />
                <Route path="/cursos/crearcurso" element={<Formcurso />} />
                <Route
                  path="/cursos/:id/detallescurso"
                  element={<CursoEspecifico />}
                />
                <Route path="/cursos/:id/editarcurso" element={<Formcurso />} />
                <Route
                  path="/cursos/:id/detallescurso/asignarmaterias"
                  element={<FormAsignarMaterias></FormAsignarMaterias>}
                />
                <Route
                  path="/cursos/:id/detallescurso/asignarmaterias/delete"
                  element={<FormDeleteMaterias></FormDeleteMaterias>}
                />
                <Route
                  path="/asignaturas"
                  element={<Asignaturas></Asignaturas>}
                />
                <Route
                  path="/asignaturas/crearasignatura"
                  element={<FormCrearAsignatura></FormCrearAsignatura>}
                />
                <Route
                  path="/asignaturas/:id/actualizar"
                  element={<FormCrearAsignatura></FormCrearAsignatura>}
                />
                <Route path="/estudiantes" element={<Estudiantes></Estudiantes>}></Route>
                <Route path="/estudiantes/crearestudiante" element={<FormEstudiante></FormEstudiante>}></Route>
                <Route path="/estudiantes/:id/detalles" element={<EstudianteDetalles></EstudianteDetalles>}></Route>
                <Route path="/estudiantes/:id/editar" element={<FormEstudiante></FormEstudiante>}></Route>
                <Route path="/administracion" element={<Administracion></Administracion>}></Route>
                <Route path="/administracion/cursos" element={<Admincursos></Admincursos>}></Route>
                <Route path="/administracion/asignaturas" element={<Adminasignaturas></Adminasignaturas>}></Route>
                <Route path="/administracion/estudiantes" element={<Adminestudiantes></Adminestudiantes>}></Route>
                <Route path="/cursos/:id/asignatura/:asignatura/notas" element={<Notas></Notas>}></Route>
                <Route path="/cursos/:id/asignarestudiantes" element={<EstudiantesSinCurso></EstudiantesSinCurso>}></Route>
                <Route path="/cursos/:id/retirarestudiantes" element={<RetirarEstudiante></RetirarEstudiante>}></Route>
                
              </Routes>
            </Container>
          </BrowserRouter>
        </>
      ) : (
        <>
          <Autenticacion
            validarLogin={ValidarLogin}
            login={login}
          ></Autenticacion>
        </>
      )}
    </>
  );
}

export default App;
