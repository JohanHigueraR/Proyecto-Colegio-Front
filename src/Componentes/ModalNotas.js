import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, Stack } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalNotas({ children }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [nota, setNota] = useState({
    id_asignatura: "",
    id_estudiante: "",
    tema: "",
    valor_nota: "",
  });
  const handleChange = (e) => {
    setNota({ ...nota, [e.target.name]: e.target.value });
  };
  const cargarArgumentos = () => {
    setNota({
      ...nota,
      id_asignatura: children[0],
      id_estudiante: children[1],
    });
  };
  const editarNota = async (id, valor_nota, tema) => {
    var body = { ...nota, id_nota: id };
    if (nota.tema === "") {
      body.tema = tema;
    }
    if (nota.valor_nota === "") {
      body.valor_nota = valor_nota;
    }
    await fetch("http://localhost:4000/notas", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json" },
    });
    handleClose();
    console.log(body);
  };
  useEffect(() => {
    cargarArgumentos();
  }, []);
  const eliminarNota = async (id_nota) => {
    var body={
      id_nota: id_nota
    }
    await fetch("http://localhost:4000/notas", {
      method: "DELETE",
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json" },
    });
    handleClose();
  };
  const crearNota = async () => {
    await fetch("http://localhost:4000/notas", {
      method: "POST",
      body: JSON.stringify(nota),
      headers: { "Content-type": "application/json" },
    });
    handleClose();
  };
  return (
    <>
      <Button onClick={handleOpen} variant="outlined">
        {children[2] === "Crear" ? "Crear Nueva Nota" : children[2]}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          style={{
            background: "rgba(0,0,0, 0.2)",
            margin: "0 auto",
            padding: "1rem",
            backdropFilter: "blur(3px)",
            border: "solid 1px #0698D6",
          }}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              color={"#0698D6"}
            >
              {children[2] === "Crear" ? "Crear Nueva Nota" : "Editar nota"}
            </Typography>
            <TextField
              label="Tema:"
              sx={{ mt: 2 }}
              focused
              inputProps={{ style: { color: "white" } }}
              name="tema"
              onChange={handleChange}
              required
              placeholder={children[3]}
            ></TextField>
            <TextField
              label="Valor de la nota:"
              sx={{ mt: 2 }}
              focused
              inputProps={{
                style: { color: "white" },
                inputMode: "numeric",
                pattern: "[0-9]*",
              }}
              name="valor_nota"
              type="number"
              onChange={handleChange}
              required
              placeholder={children[2] === "Crear" ? "" : children[2]}
            ></TextField>
            {children[2] === "Crear" ? (
              <Button variant="outlined" onClick={() => crearNota()}>
                Guardar
              </Button>
            ) : (
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  onClick={() =>
                    editarNota(children[4], children[2], children[3])
                  }
                >
                  Editar nota
                </Button>
                <Button variant="outlined" color="warning" onClick={()=>eliminarNota(children[4])}>
                  Eliminar nota
                </Button>
              </Stack>
            )}
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
