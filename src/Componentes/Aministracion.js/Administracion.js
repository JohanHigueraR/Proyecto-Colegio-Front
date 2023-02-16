<<<<<<< HEAD
import * as React from "react";
import Typography from "@mui/material/Typography";
import {CardActionArea , Card, CardContent, CardMedia  } from "@mui/material";
import {useNavigate} from 'react-router-dom'


export default function Administracion() {
  const navigate = useNavigate()
  return (
    <div style={{ margin: "2rem" }}>
      <Typography textTransform={"uppercase"} variant={"h5"}>
        Lista de Archivados
      </Typography>
      <div style={{display:'grid', gap:'1rem', gridAutoRows:'22rem', gridTemplateColumns:'repeat(auto-fill, minmax(21rem, 1fr))', paddingTop:'2rem'}}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={()=>navigate("/administracion/cursos")}>
        <CardMedia
          component="img"
          height="260"
          image="https://cdn.stocksnap.io/img-thumbs/960w/blue-sky_E1C34B4580.jpg"
          alt="green iguana"
        />
        <CardContent sx={{background: "rgba(20,5,120, 0.9)"}}>
          <Typography gutterBottom variant="h5" component="div" sx={{color:'white'}}>
            Cursos
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{color:'white'}}>
            Aca puedes ver los cursos eliminados
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={()=>navigate("/administracion/asignaturas")}>
        <CardMedia
          component="img"
          height="260"
          image="https://cdn.stocksnap.io/img-thumbs/960w/monochrome-art_SQS0VU89P1.jpg"
          alt="green iguana"
        />
        <CardContent sx={{background: "rgba(20,5,120, 0.9)"}}>
          <Typography gutterBottom variant="h5" component="div" sx={{color:'white'}}>
            Asignaturas
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{color:'white'}}>
            Aca puedes ver las asignaturas eliminados
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={()=>navigate("/administracion/estudiantes")}>
        <CardMedia
          component="img"
          height="260"
          image="https://cdn.stocksnap.io/img-thumbs/960w/open-books_HECYA5SP1L.jpg"
          alt="green iguana"
        />
        <CardContent sx={{background: "rgba(20,5,120, 0.9)"}}>
          <Typography gutterBottom variant="h5" component="div" sx={{color:'white'}}>
            Estudiantes
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{color:'white'}}>
            Aca puedes ver los estudiantes eliminados
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
  );
}
=======
import * as React from "react";
import Typography from "@mui/material/Typography";
import {CardActionArea , Card, CardContent, CardMedia  } from "@mui/material";
import {useNavigate} from 'react-router-dom'


export default function Administracion() {
  const navigate = useNavigate()
  return (
    <div style={{ margin: "2rem" }}>
      <Typography textTransform={"uppercase"} variant={"h5"}>
        Lista de Archivados
      </Typography>
      <div style={{display:'grid', gap:'1rem', gridAutoRows:'22rem', gridTemplateColumns:'repeat(auto-fill, minmax(21rem, 1fr))', paddingTop:'2rem'}}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={()=>navigate("/administracion/cursos")}>
        <CardMedia
          component="img"
          height="260"
          image="https://cdn.stocksnap.io/img-thumbs/960w/blue-sky_E1C34B4580.jpg"
          alt="green iguana"
        />
        <CardContent sx={{background: "rgba(20,5,120, 0.9)"}}>
          <Typography gutterBottom variant="h5" component="div" sx={{color:'white'}}>
            Cursos
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{color:'white'}}>
            Aca puedes ver los cursos eliminados
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={()=>navigate("/administracion/asignaturas")}>
        <CardMedia
          component="img"
          height="260"
          image="https://cdn.stocksnap.io/img-thumbs/960w/monochrome-art_SQS0VU89P1.jpg"
          alt="green iguana"
        />
        <CardContent sx={{background: "rgba(20,5,120, 0.9)"}}>
          <Typography gutterBottom variant="h5" component="div" sx={{color:'white'}}>
            Asignaturas
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{color:'white'}}>
            Aca puedes ver las asignaturas eliminados
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={()=>navigate("/administracion/estudiantes")}>
        <CardMedia
          component="img"
          height="260"
          image="https://cdn.stocksnap.io/img-thumbs/960w/open-books_HECYA5SP1L.jpg"
          alt="green iguana"
        />
        <CardContent sx={{background: "rgba(20,5,120, 0.9)"}}>
          <Typography gutterBottom variant="h5" component="div" sx={{color:'white'}}>
            Estudiantes
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{color:'white'}}>
            Aca puedes ver los estudiantes eliminados
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
  );
}
>>>>>>> b754d4ab2c15008b3fab54500ca08345d8087dbc
