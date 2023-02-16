<<<<<<< HEAD
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgba(0, 0, 0, 0.486)",
  border: "2px solid white",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({children}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  /* --HIJO 1 = NOMBRE DEL BOTON HIJO 2= DESCRIPCION HIJO 3 = FUNCION A REALIZAR */
  return (
    <>
      <Button variant="contained" color="warning"  onClick={handleOpen}>{children[0]}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Advertencia
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 3 }}>
            {children[1]}
          </Typography>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
          >
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="contained" color="warning" onClick={children[2]}>
              Eliminar
            </Button>
          </Stack>
        </Box>
      </Modal>
      </>
  );
}
=======
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgba(0, 0, 0, 0.486)",
  border: "2px solid white",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({children}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  /* --HIJO 1 = NOMBRE DEL BOTON HIJO 2= DESCRIPCION HIJO 3 = FUNCION A REALIZAR */
  return (
    <>
      <Button variant="contained" color="warning"  onClick={handleOpen}>{children[0]}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Advertencia
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 3 }}>
            {children[1]}
          </Typography>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
          >
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="contained" color="warning" onClick={children[2]}>
              Eliminar
            </Button>
          </Stack>
        </Box>
      </Modal>
      </>
  );
}
>>>>>>> b754d4ab2c15008b3fab54500ca08345d8087dbc
