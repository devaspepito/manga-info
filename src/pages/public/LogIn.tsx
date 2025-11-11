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

export function LogIn() {
  const navigate = useNavigate();
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!emailOrUsername || !password) {
      setError("Por favor completa todos los campos");
      return;
    }

    // TODO: Implementar lógica de autenticación real
    // Por ahora simulamos un login exitoso
    localStorage.setItem("token", "dummy-token");
    localStorage.setItem("user", JSON.stringify({ name: emailOrUsername }));
    navigate("/");
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
            Iniciar Sesión
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

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Correo electrónico o usuario"
              variant="outlined"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
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
              Iniciar Sesión
            </Button>

            <Box sx={{ textAlign: "center", mt: 3 }}>
              <Typography
                variant="body2"
                sx={{ color: "#7b7c7e", fontSize: "13px" }}
              >
                ¿No tienes cuenta?{" "}
                <Link
                  component="button"
                  type="button"
                  onClick={() => navigate("/register")}
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
                  Crear cuenta
                </Link>
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
