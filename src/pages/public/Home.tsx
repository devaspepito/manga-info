import { useEffect, useState } from "react";
import type { MangaInfoDTO } from "../../models/Anilist";
import { getPopularMangasWithPageInfo } from "../../services/getAnilistMangas";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Typography,
  Skeleton,
} from "@mui/material";
import { useNavigate } from "react-router";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";

export function Home() {
  const [mangas, setMangas] = useState<MangaInfoDTO[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedIds, setLoadedIds] = useState<Set<string | number | null>>(
    new Set(),
  );
  const navigate = useNavigate();

  const loadMoreMangas = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const result = await getPopularMangasWithPageInfo(page, 6);

      // Filter out duplicates
      const newMangas = result.mangas.filter(
        (manga) => !loadedIds.has(manga.id),
      );

      if (newMangas.length > 0) {
        setMangas((prev) => [...prev, ...newMangas]);
        setLoadedIds((prev) => {
          const newSet = new Set(prev);
          newMangas.forEach((manga) => newSet.add(manga.id));
          return newSet;
        });
      }

      setHasMore(result.pageInfo.hasNextPage);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error loading mangas:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (mangas.length === 0) {
      loadMoreMangas();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMoreRef = useInfiniteScroll({
    onLoadMore: loadMoreMangas,
    hasMore,
    isLoading,
    threshold: 300,
  });

  const handleMangaClick = (manga: MangaInfoDTO) => {
    navigate(`/manga/${manga.id}`, { state: { manga } });
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
        {/* Grid container for 6 mangas horizontal (6x1) */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 131px)",
            gap: "16px",
          }}
        >
          {mangas.map((manga) => (
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

        {/* Skeleton Loader */}
        {isLoading && (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 131px)",
              gap: "16px",
            }}
          >
            {[...Array(6)].map((_, index) => (
              <Box key={`skeleton-${index}`}>
                <Skeleton
                  variant="rectangular"
                  width={131}
                  height={186}
                  sx={{
                    backgroundColor: "#252525",
                    borderRadius: "4px",
                  }}
                />
                <Box sx={{ padding: "8px 4px", minHeight: "40px" }}>
                  <Skeleton
                    variant="text"
                    width="100%"
                    height={16}
                    sx={{ backgroundColor: "#252525" }}
                  />
                  <Skeleton
                    variant="text"
                    width="80%"
                    height={16}
                    sx={{ backgroundColor: "#252525", marginTop: "4px" }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        )}

        {/* Loading indicator and infinite scroll trigger */}
        <Box
          ref={loadMoreRef}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 0",
            minHeight: "80px",
          }}
        >
          {!hasMore && mangas.length > 0 && (
            <Typography
              variant="body2"
              sx={{
                color: "#7b7c7e",
                fontSize: "13px",
                textAlign: "center",
              }}
            >
              No hay más mangas
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
}
