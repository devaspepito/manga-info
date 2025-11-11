import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./router";
import "../public/css/root.css";
import { RouterProvider } from "react-router";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme/theme";

console.log("Rendering main.tsx");
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
