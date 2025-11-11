import { useLocation, useNavigate } from "react-router";
import type { MangaInfoDTO } from "../../models/Anilist";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Typography,
  TextField,
  Paper,
  Avatar,
} from "@mui/material";
import { Interweave } from "interweave";
import { useState } from "react";

interface Comment {
  id: number;
  user: string;
  text: string;
  date: string;
}

export function Manga() {
  const location = useLocation();
  const navigate = useNavigate();
  const manga = location.state?.manga as MangaInfoDTO;
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  if (!manga) {
    return (
      <Container sx={{ padding: "40px" }}>
        <Typography variant="h4" sx={{ color: "#EBEBEB", mb: 3 }}>
          Manga no encontrado
        </Typography>
        <Button
          onClick={() => navigate("/")}
          variant="contained"
          sx={{
            backgroundColor: "#252525",
            color: "#EBEBEB",
            "&:hover": {
              backgroundColor: "#343a40",
            },
          }}
        >
          Volver al inicio
        </Button>
      </Container>
    );
  }

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      const newComment: Comment = {
        id: Date.now(),
        user: "Usuario",
        text: comment,
        date: new Date().toLocaleDateString(),
      };
      setComments([...comments, newComment]);
      setComment("");
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{ padding: "32px", backgroundColor: "#101010", minHeight: "100vh" }}
    >
      <Button
        onClick={() => navigate("/")}
        variant="text"
        sx={{
          marginBottom: "24px",
          color: "#b6b8bb",
          fontSize: "13px",
          fontWeight: 400,
          padding: "4px 8px",
          "&:hover": {
            backgroundColor: "transparent",
            color: "#EBEBEB",
          },
        }}
      >
        ← Volver
      </Button>

      <Card
        sx={{
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
        }}
      >
        {manga.imagenBanner && (
          <CardMedia
            component="img"
            image={manga.imagenBanner}
            alt={manga.nombre}
            sx={{
              width: "100%",
              maxHeight: "300px",
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
        )}

        <CardContent sx={{ padding: "32px 0" }}>
          <Box sx={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            {manga.imagenPortada && (
              <Box>
                <CardMedia
                  component="img"
                  image={manga.imagenPortada}
                  alt={manga.nombre}
                  sx={{
                    width: "200px",
                    height: "auto",
                    borderRadius: "4px",
                  }}
                />
              </Box>
            )}

            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{ color: "#EBEBEB", fontWeight: 500, mb: 3 }}
              >
                {manga.nombre}
              </Typography>

              {manga.titulos && (
                <Box sx={{ marginBottom: "24px" }}>
                  {manga.titulos.romaji && (
                    <Typography
                      variant="body2"
                      sx={{ color: "#7b7c7e", fontSize: "13px", mb: 0.5 }}
                    >
                      {manga.titulos.romaji}
                    </Typography>
                  )}
                  {manga.titulos.english && (
                    <Typography
                      variant="body2"
                      sx={{ color: "#7b7c7e", fontSize: "13px", mb: 0.5 }}
                    >
                      {manga.titulos.english}
                    </Typography>
                  )}
                  {manga.titulos.native && (
                    <Typography
                      variant="body2"
                      sx={{ color: "#7b7c7e", fontSize: "13px", mb: 0.5 }}
                    >
                      {manga.titulos.native}
                    </Typography>
                  )}
                </Box>
              )}

              <Box
                sx={{
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                  marginBottom: "24px",
                }}
              >
                {manga.generos?.map((genero) => (
                  <Chip
                    key={genero}
                    label={genero}
                    size="small"
                    sx={{
                      backgroundColor: "transparent",
                      color: "#7b7c7e",
                      border: "1px solid #343a40",
                      fontSize: "12px",
                      height: "24px",
                      "&:hover": {
                        borderColor: "#495057",
                        color: "#b6b8bb",
                      },
                    }}
                  />
                ))}
              </Box>

              <Box sx={{ marginBottom: "24px" }}>
                <Typography
                  variant="body2"
                  sx={{ color: "#7b7c7e", fontSize: "13px", mb: 0.5 }}
                >
                  {manga.estado} · {manga.fechaInicio}
                </Typography>
                {manga.formato && (
                  <Typography
                    variant="body2"
                    sx={{ color: "#7b7c7e", fontSize: "13px", mb: 0.5 }}
                  >
                    {manga.formato}
                  </Typography>
                )}
                {(manga.capitulos || manga.volumenes) && (
                  <Typography
                    variant="body2"
                    sx={{ color: "#7b7c7e", fontSize: "13px", mb: 0.5 }}
                  >
                    {manga.capitulos && `${manga.capitulos} capítulos`}
                    {manga.capitulos && manga.volumenes && " · "}
                    {manga.volumenes && `${manga.volumenes} volúmenes`}
                  </Typography>
                )}
                {manga.meanScore !== null && (
                  <Typography
                    variant="body2"
                    sx={{ color: "#7b7c7e", fontSize: "13px", mb: 0.5 }}
                  >
                    {manga.meanScore}/100
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>

          {manga.descripcion && (
            <Box
              sx={{
                marginTop: "48px",
                paddingTop: "24px",
                borderTop: "1px solid #343a40",
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#b6b8bb", lineHeight: 1.8, fontSize: "14px" }}
              >
                <Interweave content={manga.descripcion} />
              </Typography>
            </Box>
          )}

          {manga.notas && (
            <Box sx={{ marginTop: "24px" }}>
              <Typography
                variant="body2"
                sx={{ color: "#7b7c7e", fontSize: "13px", fontStyle: "italic" }}
              >
                {manga.notas}
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>

      {/* Comments Section */}
      <Box sx={{ marginTop: "64px" }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ color: "#EBEBEB", fontWeight: 500, mb: 3 }}
        >
          Comentarios
        </Typography>

        {/* Comment Form */}
        <Paper
          sx={{
            padding: "16px",
            marginBottom: "24px",
            backgroundColor: "transparent",
            border: "1px solid #343a40",
            boxShadow: "none",
          }}
        >
          <TextField
            fullWidth
            multiline
            rows={3}
            placeholder="Escribe tu comentario..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            variant="outlined"
            sx={{
              marginBottom: "12px",
              "& .MuiOutlinedInput-root": {
                color: "#EBEBEB",
                fontSize: "14px",
                backgroundColor: "#101010",
                "& fieldset": {
                  borderColor: "#343a40",
                },
                "&:hover fieldset": {
                  borderColor: "#495057",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#495057",
                },
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#7b7c7e",
                opacity: 1,
              },
            }}
          />
          <Button
            variant="text"
            onClick={handleCommentSubmit}
            sx={{
              color: "#b6b8bb",
              fontSize: "13px",
              padding: "6px 12px",
              "&:hover": {
                backgroundColor: "#252525",
                color: "#EBEBEB",
              },
            }}
          >
            Publicar
          </Button>
        </Paper>

        {/* Comments List */}
        <Box>
          {comments.length === 0 ? (
            <Typography
              variant="body2"
              sx={{ color: "#7b7c7e", fontSize: "13px" }}
            >
              No hay comentarios aún.
            </Typography>
          ) : (
            comments.map((c) => (
              <Paper
                key={c.id}
                sx={{
                  padding: "16px",
                  marginBottom: "12px",
                  backgroundColor: "transparent",
                  border: "1px solid #343a40",
                  boxShadow: "none",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "flex-start", mb: 1.5 }}
                >
                  <Avatar
                    sx={{
                      backgroundColor: "transparent",
                      border: "1px solid #343a40",
                      color: "#7b7c7e",
                      mr: 1.5,
                      width: 32,
                      height: 32,
                      fontSize: "14px",
                    }}
                  >
                    {c.user[0]}
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        alignItems: "baseline",
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#EBEBEB",
                          fontWeight: 500,
                          fontSize: "13px",
                        }}
                      >
                        {c.user}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "#7b7c7e", fontSize: "12px" }}
                      >
                        {c.date}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#b6b8bb",
                        fontSize: "14px",
                        lineHeight: 1.6,
                      }}
                    >
                      {c.text}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            ))
          )}
        </Box>
      </Box>
    </Container>
  );
}
