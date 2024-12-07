import React from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";

const Navbar = () => (
  <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <FlightIcon />
      </IconButton>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Flight Info Manager
      </Typography>
      <Button
        color="inherit"
        component={NavLink}
        to="/"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        Dashboard
      </Button>
      <Button
        color="inherit"
        component={NavLink}
        to="/flights"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        Flights
      </Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;