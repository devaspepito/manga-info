import { Box } from "@mui/material";
import { SideNav } from "./SideNav";
import { Outlet } from "react-router";
import { useState } from "react";

const DRAWER_WIDTH_EXPANDED = 240;
const DRAWER_WIDTH_COLLAPSED = 70;

export function Layout() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Main content area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginRight: isExpanded
            ? `${DRAWER_WIDTH_EXPANDED}px`
            : `${DRAWER_WIDTH_COLLAPSED}px`,
          backgroundColor: "#101010",
          minHeight: "100vh",
          transition: "margin-right 0.3s ease",
        }}
      >
        <Outlet />
      </Box>

      {/* Right side navigation */}
      <SideNav onToggle={setIsExpanded} />
    </Box>
  );
}
