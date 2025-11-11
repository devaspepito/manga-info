import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#EBEBEB",
      light: "#f8f9fa",
      dark: "#adb5bd",
    },
    secondary: {
      main: "#495057",
      light: "#6c757d",
      dark: "#343a40",
    },
    background: {
      default: "#101010",
      paper: "#101010",
    },
    text: {
      primary: "#EBEBEB",
      secondary: "#b6b8bb",
      disabled: "#7b7c7e",
    },
    divider: "#343a40",
    action: {
      active: "#EBEBEB",
      hover: "#252525",
      selected: "#252525",
      disabled: "#7b7c7e",
      disabledBackground: "#343a40",
    },
    error: {
      main: "#dee2e6",
    },
    warning: {
      main: "#e9ecef",
    },
    info: {
      main: "#c9e6fd",
    },
    success: {
      main: "#adb5bd",
    },
  },
  typography: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif",
    fontSize: 14,
    h1: {
      color: "#EBEBEB",
      fontWeight: 500,
    },
    h2: {
      color: "#EBEBEB",
      fontWeight: 500,
    },
    h3: {
      color: "#EBEBEB",
      fontWeight: 500,
    },
    h4: {
      color: "#EBEBEB",
      fontWeight: 500,
    },
    h5: {
      color: "#EBEBEB",
      fontWeight: 500,
    },
    h6: {
      color: "#EBEBEB",
      fontWeight: 500,
    },
    body1: {
      color: "#EBEBEB",
      fontSize: "14px",
    },
    body2: {
      color: "#b6b8bb",
      fontSize: "13px",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#101010",
          color: "#EBEBEB",
          scrollbarColor: "#343a40 #101010",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#101010",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#343a40",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#495057",
          },
        },
        "::selection": {
          backgroundColor: "#415166",
          color: "#d6d6d7",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "4px",
          fontWeight: 400,
          fontSize: "13px",
        },
        contained: {
          backgroundColor: "transparent",
          border: "1px solid #343a40",
          color: "#b6b8bb",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#252525",
            borderColor: "#495057",
            color: "#EBEBEB",
            boxShadow: "none",
          },
        },
        text: {
          color: "#b6b8bb",
          "&:hover": {
            backgroundColor: "transparent",
            color: "#EBEBEB",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          borderRadius: "4px",
          boxShadow: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
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
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          color: "#7b7c7e",
          border: "1px solid #343a40",
          fontSize: "12px",
          fontWeight: 400,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#101010",
          boxShadow: "none",
          borderBottom: "1px solid #343a40",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#101010",
          borderLeft: "1px solid #343a40",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          "&:hover": {
            backgroundColor: "#252525",
          },
          "&.Mui-selected": {
            backgroundColor: "#252525",
            "&:hover": {
              backgroundColor: "#343a40",
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          backgroundImage: "none",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          border: "1px solid #343a40",
          fontSize: "13px",
        },
      },
    },
  },
});

export default theme;
