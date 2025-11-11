import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  Home as HomeIcon,
  CheckCircle as ReadIcon,
  Bookmark as ToReadIcon,
  Favorite as FavoriteIcon,
  CloudUpload as UploadIcon,
  Article as BlogIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router";
import { useState, useEffect } from "react";

const DRAWER_WIDTH_EXPANDED = 240;
const DRAWER_WIDTH_COLLAPSED = 70;

interface SideNavProps {
  onToggle?: (expanded: boolean) => void;
}

export function SideNav({ onToggle }: SideNavProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Verificar si el usuario está logueado
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  const toggleDrawer = () => {
    const newExpandedState = !isExpanded;
    setIsExpanded(newExpandedState);
    if (onToggle) {
      onToggle(newExpandedState);
    }
  };

  const menuItems = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "/",
      requiresAuth: false,
    },
    {
      text: "Leídos",
      icon: <ReadIcon />,
      path: "/read",
      requiresAuth: false,
    },
    {
      text: "To Read",
      icon: <ToReadIcon />,
      path: "/to-read",
      requiresAuth: false,
    },
    {
      text: "Favoritos",
      icon: <FavoriteIcon />,
      path: "/favorites",
      requiresAuth: false,
    },
  ];

  const authMenuItems = [
    {
      text: "Uploaded",
      icon: <UploadIcon />,
      path: "/uploaded",
      requiresAuth: true,
    },
    {
      text: "Blog",
      icon: <BlogIcon />,
      path: "/blog",
      requiresAuth: true,
    },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="right"
      sx={{
        width: isExpanded ? DRAWER_WIDTH_EXPANDED : DRAWER_WIDTH_COLLAPSED,
        flexShrink: 0,
        transition: "width 0.3s ease",
        "& .MuiDrawer-paper": {
          width: isExpanded ? DRAWER_WIDTH_EXPANDED : DRAWER_WIDTH_COLLAPSED,
          boxSizing: "border-box",
          backgroundColor: "#101010",
          borderLeft: "1px solid #343a40",
          transition: "width 0.3s ease",
          overflowX: "hidden",
        },
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Toggle button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: isExpanded ? "flex-end" : "center",
            padding: "16px 8px",
            borderBottom: "1px solid #343a40",
          }}
        >
          <IconButton
            onClick={toggleDrawer}
            sx={{
              color: "#EBEBEB",
              padding: "8px",
              "&:hover": {
                backgroundColor: "#252525",
              },
            }}
          >
            {isExpanded ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>

        {/* Main menu items */}
        <List sx={{ flex: 1, padding: "8px 0" }}>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <Tooltip title={!isExpanded ? item.text : ""} placement="left">
                <ListItemButton
                  selected={location.pathname === item.path}
                  onClick={() => navigate(item.path)}
                  sx={{
                    minHeight: 48,
                    justifyContent: isExpanded ? "initial" : "center",
                    px: isExpanded ? 2.5 : 0,
                    my: 0.5,
                    mx: 1,
                    borderRadius: "8px",
                    transition: "all 0.2s ease",
                    "&.Mui-selected": {
                      backgroundColor: "#252525",
                      borderLeft: "3px solid #EBEBEB",
                      "&:hover": {
                        backgroundColor: "#343a40",
                      },
                    },
                    "&:hover": {
                      backgroundColor: "#252525",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: isExpanded ? 2 : "auto",
                      justifyContent: "center",
                      color: "#EBEBEB",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {isExpanded && (
                    <ListItemText
                      primary={item.text}
                      sx={{
                        opacity: 1,
                        "& .MuiTypography-root": {
                          fontSize: "14px",
                          fontWeight: 500,
                        },
                      }}
                    />
                  )}
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}

          {/* Authenticated menu items */}
          {isLoggedIn && (
            <>
              <Divider sx={{ my: 2, mx: 2, borderColor: "#343a40" }} />
              {authMenuItems.map((item) => (
                <ListItem
                  key={item.text}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <Tooltip
                    title={!isExpanded ? item.text : ""}
                    placement="left"
                  >
                    <ListItemButton
                      selected={location.pathname === item.path}
                      onClick={() => navigate(item.path)}
                      sx={{
                        minHeight: 48,
                        justifyContent: isExpanded ? "initial" : "center",
                        px: isExpanded ? 2.5 : 0,
                        my: 0.5,
                        mx: 1,
                        borderRadius: "8px",
                        transition: "all 0.2s ease",
                        "&.Mui-selected": {
                          backgroundColor: "#252525",
                          borderLeft: "3px solid #EBEBEB",
                          "&:hover": {
                            backgroundColor: "#343a40",
                          },
                        },
                        "&:hover": {
                          backgroundColor: "#252525",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: isExpanded ? 2 : "auto",
                          justifyContent: "center",
                          color: "#EBEBEB",
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      {isExpanded && (
                        <ListItemText
                          primary={item.text}
                          sx={{
                            opacity: 1,
                            "& .MuiTypography-root": {
                              fontSize: "14px",
                              fontWeight: 500,
                            },
                          }}
                        />
                      )}
                    </ListItemButton>
                  </Tooltip>
                </ListItem>
              ))}
            </>
          )}
        </List>

        {/* Login/Logout button at bottom */}
        <Box sx={{ padding: "16px 8px", borderTop: "1px solid #343a40" }}>
          {isLoggedIn ? (
            <Tooltip
              title={!isExpanded ? "Cerrar sesión" : ""}
              placement="left"
            >
              <IconButton
                onClick={handleLogout}
                sx={{
                  width: "100%",
                  justifyContent: isExpanded ? "flex-start" : "center",
                  color: "#EBEBEB",
                  padding: "12px",
                  borderRadius: "8px",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "#252525",
                  },
                }}
              >
                <LogoutIcon sx={{ fontSize: 24 }} />
                {isExpanded && (
                  <Box
                    component="span"
                    sx={{
                      ml: 2,
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    Cerrar sesión
                  </Box>
                )}
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip
              title={!isExpanded ? "Iniciar sesión" : ""}
              placement="left"
            >
              <IconButton
                onClick={() => navigate("/login")}
                sx={{
                  width: "100%",
                  justifyContent: isExpanded ? "flex-start" : "center",
                  color: "#EBEBEB",
                  padding: "12px",
                  borderRadius: "8px",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "#252525",
                  },
                }}
              >
                <LoginIcon sx={{ fontSize: 24 }} />
                {isExpanded && (
                  <Box
                    component="span"
                    sx={{
                      ml: 2,
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    Iniciar sesión
                  </Box>
                )}
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </Box>
    </Drawer>
  );
}
