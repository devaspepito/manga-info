import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router";
import type { MangaInfoDTO } from "../../models/Anilist";

export function Uploaded() {
  const navigate = useNavigate();
  const [uploadedMangas, setUploadedMangas] = useState<MangaInfoDTO[]>([]);

  useEffect(() => {
    // Verificar autenticación
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    // TODO: Cargar mangas subidos por el usuario desde el backend
    const savedUploaded = localStorage.getItem("uploadedMangas");
    if (savedUploaded) {
      setUploadedMangas(JSON.parse(savedUploaded));
    }
  }, [navigate]);

  const handleMangaClick = (manga: MangaInfoDTO) => {
    navigate(`/manga/${manga.id}`, { state: { manga } });
  };

  const handleUploadNew = () => {
    // TODO: Navegar a página de upload
    console.log("Upload new manga");
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        width: "100%",
        minHeight: "100vh",
        margin: 0,
        padding: "32px",
        backgroundColor: "#101010",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "fit-content",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#EBEBEB",
            fontWeight: 500,
            mb: 2,
            textAlign: "center",
          }}
        >
          Mis Mangas
        </Typography>

        {uploadedMangas.length === 0 ? (
          <Box
            sx={{
              textAlign: "center",
              mt: 4,
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "#7b7c7e", fontSize: "13px", mb: 2 }}
            >
              No has subido ningún manga aún
            </Typography>
            <Button
              variant="text"
              onClick={handleUploadNew}
              sx={{
                color: "#b6b8bb",
                fontSize: "13px",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#EBEBEB",
                },
              }}
            >
              ➕ Subir manga
            </Button>
          </Box>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 131px)",
              gap: "16px",
            }}
          >
            {uploadedMangas.map((manga) => (
              <Card
                key={manga.id}
                onClick={() => handleMangaClick(manga)}
                sx={{
                  width: "131px",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  border: "none",
                  boxShadow: "none",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    "& img": {
                      filter: "brightness(1.1)",
                    },
                    "& .manga-title": {
                      color: "#EBEBEB",
                    },
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={manga.imagenPortada}
                  alt={manga.titulos.english || manga.nombre}
                  sx={{
                    width: "131px",
                    height: "186px",
                    objectFit: "cover",
                    borderRadius: "4px",
                    transition: "filter 0.3s ease",
                  }}
                />
                <Box
                  sx={{
                    padding: "8px 4px",
                    minHeight: "40px",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    className="manga-title"
                    variant="body2"
                    sx={{
                      color: "#b6b8bb",
                      textAlign: "center",
                      fontWeight: 400,
                      fontSize: "12px",
                      lineHeight: 1.3,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {manga.titulos.english || manga.nombre}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Box>
        )}
      </Box>
    </Container>
  );
}
