import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
  Link,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router";

export function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validaciones
    if (!name || !nickname || !email || !password || !confirmPassword) {
      setError("Por favor completa todos los campos");
      return;
    }

    if (!email.includes("@")) {
      setError("Por favor ingresa un correo electrónico válido");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    // TODO: Implementar lógica de registro real
    setSuccess("Cuenta creada exitosamente. Redirigiendo...");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#101010",
        padding: "32px",
      }}
    >
      <Card
        sx={{
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "transparent",
          border: "1px solid #343a40",
          boxShadow: "none",
        }}
      >
        <CardContent sx={{ padding: "32px" }}>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            sx={{
              color: "#EBEBEB",
              fontWeight: 500,
              textAlign: "center",
              mb: 4,
            }}
          >
            Crear Cuenta
          </Typography>

          {error && (
            <Alert
              severity="error"
              sx={{
                mb: 3,
                backgroundColor: "transparent",
                color: "#EBEBEB",
                border: "1px solid #495057",
                fontSize: "13px",
              }}
            >
              {error}
            </Alert>
          )}

          {success && (
            <Alert
              severity="success"
              sx={{
                mb: 3,
                backgroundColor: "transparent",
                color: "#EBEBEB",
                border: "1px solid #adb5bd",
                fontSize: "13px",
              }}
            >
              {success}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Nombre"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                mb: 2.5,
                "& .MuiOutlinedInput-root": {
                  color: "#EBEBEB",
                  fontSize: "14px",
                  "& fieldset": {
                    borderColor: "#343a40",
                  },
                  "&:hover fieldset": {
                    borderColor: "#495057",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#495057",
                    borderWidth: "1px",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#7b7c7e",
                  fontSize: "14px",
                  "&.Mui-focused": {
                    color: "#b6b8bb",
                  },
                },
              }}
            />

            <TextField
              fullWidth
              label="Nickname o Apodo"
              variant="outlined"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              sx={{
                mb: 2.5,
                "& .MuiOutlinedInput-root": {
                  color: "#EBEBEB",
                  fontSize: "14px",
                  "& fieldset": {
                    borderColor: "#343a40",
                  },
                  "&:hover fieldset": {
                    borderColor: "#495057",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#495057",
                    borderWidth: "1px",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#7b7c7e",
                  fontSize: "14px",
                  "&.Mui-focused": {
                    color: "#b6b8bb",
                  },
                },
              }}
            />

            <TextField
              fullWidth
              type="email"
              label="Correo electrónico"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                mb: 2.5,
                "& .MuiOutlinedInput-root": {
                  color: "#EBEBEB",
                  fontSize: "14px",
                  "& fieldset": {
                    borderColor: "#343a40",
                  },
                  "&:hover fieldset": {
                    borderColor: "#495057",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#495057",
                    borderWidth: "1px",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#7b7c7e",
                  fontSize: "14px",
                  "&.Mui-focused": {
                    color: "#b6b8bb",
                  },
                },
              }}
            />

            <TextField
              fullWidth
              type="password"
              label="Contraseña"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                mb: 2.5,
                "& .MuiOutlinedInput-root": {
                  color: "#EBEBEB",
                  fontSize: "14px",
                  "& fieldset": {
                    borderColor: "#343a40",
                  },
                  "&:hover fieldset": {
                    borderColor: "#495057",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#495057",
                    borderWidth: "1px",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#7b7c7e",
                  fontSize: "14px",
                  "&.Mui-focused": {
                    color: "#b6b8bb",
                  },
                },
              }}
            />

            <TextField
              fullWidth
              type="password"
              label="Repetir Contraseña"
              variant="outlined"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  color: "#EBEBEB",
                  fontSize: "14px",
                  "& fieldset": {
                    borderColor: "#343a40",
                  },
                  "&:hover fieldset": {
                    borderColor: "#495057",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#495057",
                    borderWidth: "1px",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#7b7c7e",
                  fontSize: "14px",
                  "&.Mui-focused": {
                    color: "#b6b8bb",
                  },
                },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mb: 2,
                padding: "10px",
                backgroundColor: "transparent",
                border: "1px solid #343a40",
                color: "#EBEBEB",
                fontWeight: 400,
                fontSize: "14px",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#252525",
                  borderColor: "#495057",
                  boxShadow: "none",
                },
              }}
            >
              Crear Cuenta
            </Button>

            <Box sx={{ textAlign: "center", mt: 3 }}>
              <Typography
                variant="body2"
                sx={{ color: "#7b7c7e", fontSize: "13px" }}
              >
                ¿Ya tienes cuenta?{" "}
                <Link
                  component="button"
                  type="button"
                  onClick={() => navigate("/login")}
                  sx={{
                    color: "#EBEBEB",
                    textDecoration: "none",
                    fontWeight: 400,
                    cursor: "pointer",
                    "&:hover": {
                      color: "#c9e6fd",
                    },
                  }}
                >
                  Iniciar sesión
                </Link>
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
