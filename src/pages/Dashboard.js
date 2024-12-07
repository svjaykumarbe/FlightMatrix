import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // correct
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Avatar,
  Stack,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import axios from "../services/api";

const Dashboard = () => {
  const [passengers, setPassengers] = useState([]);

  useEffect(() => {
    axios.get("/passengers").then((response) => setPassengers(response.data));
  }, []);

  return (
    <Grid container spacing={4} sx={{ padding: "20px" }}>
      {passengers.map((passenger) => (
        <Grid item xs={12} md={4} key={passenger.id}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: "#1976d2" }}>
                  <PersonIcon />
                </Avatar>
                <Typography variant="h5">{passenger.name}</Typography>
              </Stack>
              <Typography color="textSecondary" sx={{ mt: 2 }}>
                Missing Info:{" "}
                <strong>{passenger.missingFields.join(", ")}</strong>
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={`/passenger/${passenger.id}`}
                sx={{ mt: 2 }}
              >
                Fix Details
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Dashboard;