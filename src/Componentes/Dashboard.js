<<<<<<< HEAD
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useState, useEffect } from "react";

Chart.defaults.color = "white";
function Dashboard() {
  const [estudiantes, setEstudiantes] = useState([]);
  const cargarPromedio = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/dashboard/estudiantes`);
    const data = await response.json();
    setEstudiantes(data);
  };
  useEffect(() => {
    cargarPromedio();
  });
  const consoleLog = () => {
    console.log(estudiantes);
  };

  const data = {
    labels:
      estudiantes.length > 0
        ? [
            estudiantes[0].nombre_estudiante,
            estudiantes[1].nombre_estudiante,
            estudiantes[2].nombre_estudiante,
          ]
        : ["Sin estudiantes activos"],
    datasets: [
      {
        label: "Promedio:",
        backgroundColor: "#1E0382",
        borderColor: "#183DC2",
        pointBackgroundColor: "white",
        pointBorderColor: "white",
        borderWidth: 3,
        data:
          estudiantes.length > 0
            ? [estudiantes[0].trunc, estudiantes[1].trunc, estudiantes[2].trunc]
            : [10, 5, 4],
      },
    ],
  };
  const config = {
    data: data,
  };
  return (
    <>
      <div
        style={{
          display: "grid",
          gap: "5rem",
          gridAutoFlow: "22rem",
          gridTemplateColumns: "repeat(auto-fill, minmax(23rem, 1fr)",
          marginTop: "3rem",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            background: "rgba(3, 3, 61, 0.8)",
            width: "100%",
            padding: "1rem 0",
            margin: "0",
            textAlign: "center",
            marginTop: "3rem",
            borderRadius: "1%",
          }}
        >
          <Typography variant="h5" onClick={() => consoleLog()}>
            <EmojiEventsIcon></EmojiEventsIcon> Mejores estudiantes por promedio{" "}
          </Typography>
          <Bar data={data} options={config}></Bar>
        </div>

        <div
          style={{
            width: "100%",
            background: "rgba(3, 3, 61, 0.8)",
            padding: "1rem 0",
            margin: "0",
            textAlign: "center",
            marginTop: "3rem",
            borderRadius: "1%",
          }}
        >
          <Typography variant="h5">
            <EmojiEventsIcon></EmojiEventsIcon> Mejores cursos por promedio
          </Typography>
          <Bar data={data} options={config}></Bar>
        </div>
      </div>
      <Card
        sx={{
          width: "100%",
          marginTop: "2rem",
          color: "white",
          background: "rgba(3, 3, 61, 0.8)",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image="https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="green iguana"
            style={{ backgroundSize: "cover" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Notificaciones
            </Typography>
            <Typography variant="body2" color="white">
              El proximo jueves 15/dic/2022 se tiene la ceremonia de fin de año
              y entrega de diplomas a los egresados, si son directores de curso
              de grado 11, asistir a las 7:00 de la mañana. Muchas gracias!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default Dashboard;
=======
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useState, useEffect } from "react";

Chart.defaults.color = "white";
function Dashboard() {
  const [estudiantes, setEstudiantes] = useState([]);
  const cargarPromedio = async () => {
    const response = await fetch("http://localhost:4000/dashboard/estudiantes");
    const data = await response.json()
    setEstudiantes(data)
  };
  useEffect(()=>{
    cargarPromedio()
  },)
  const consoleLog = ()=>{
    console.log(estudiantes)
  }

  const data = { 
    labels: estudiantes.length> 0 ?[estudiantes[0].nombre_estudiante, estudiantes[1].nombre_estudiante, estudiantes[2].nombre_estudiante]:["Sin estudiantes activos"],
    datasets: [
      {
        label: "Promedio:",
        backgroundColor: "#1E0382",
        borderColor: "#183DC2",
        pointBackgroundColor: "white",
        pointBorderColor: "white",
        borderWidth: 3,
        data: estudiantes.length> 0 ?[estudiantes[0].trunc, estudiantes[1].trunc,estudiantes[2].trunc]:[10,5,4],
      },
    ],
  };
  const config = {
    data: data,
  };
  return (
    <>
      <div
        style={{
          display: "grid",
          gap: "5rem",
          gridAutoFlow: "22rem",
          gridTemplateColumns: "repeat(auto-fill, minmax(23rem, 1fr)",
          marginTop: "3rem",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            background: "rgba(3, 3, 61, 0.8)",
            width: "100%",
            padding: "1rem 0",
            margin: "0",
            textAlign: "center",
            marginTop: "3rem",
            borderRadius: "1%",
          }}
        >
          <Typography variant="h5" onClick={()=>consoleLog()}>
            <EmojiEventsIcon></EmojiEventsIcon> Mejores estudiantes por promedio{" "}
          </Typography>
          <Bar data={data} options={config}></Bar>
        </div>

        <div
          style={{
            width: "100%",
            background: "rgba(3, 3, 61, 0.8)",
            padding: "1rem 0",
            margin: "0",
            textAlign: "center",
            marginTop: "3rem",
            borderRadius: "1%",
          }}
        >
          <Typography variant="h5">
            <EmojiEventsIcon></EmojiEventsIcon> Mejores cursos por promedio
          </Typography>
          <Bar data={data} options={config}></Bar>
        </div>
      </div>
      <Card
        sx={{
          width: "100%",
          marginTop: "2rem",
          color: "white",
          background: "rgba(3, 3, 61, 0.8)",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image="https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="green iguana"
            style={{ backgroundSize: "cover" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Notificaciones
            </Typography>
            <Typography variant="body2" color="white">
              El proximo jueves 15/dic/2022 se tiene la ceremonia de fin de año
              y entrega de diplomas a los egresados, si son directores de curso
              de grado 11, asistir a las 7:00 de la mañana. Muchas gracias!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default Dashboard;
>>>>>>> b754d4ab2c15008b3fab54500ca08345d8087dbc
