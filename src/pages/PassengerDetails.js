import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  TextField,
  Button,
  Box,
  Paper,
  Typography,
  Stack,
} from "@mui/material";
import axios from "../services/api";

const PassengerDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [updatedFields, setUpdatedFields] = useState({});

  useEffect(() => {
    axios.get(`/passenger/${id}`).then((response) => setDetails(response.data));
  }, [id]);

  const handleUpdate = () => {
    axios.put(`/passenger/${id}`, updatedFields).then(() => alert("Updated!"));
  };

  return (
    <Box p={4}>
      <Paper elevation={3} sx={{ padding: 3, maxWidth: 600, margin: "0 auto" }}>
        <Typography variant="h4" gutterBottom>
          Update Passenger Details
        </Typography>
        <Stack spacing={3}>
          {Object.keys(details).map((key) =>
            key !== "id" && key !== "missingFields" ? (
              <TextField
                key={key}
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                defaultValue={details[key]}
                fullWidth
                onChange={(e) =>
                  setUpdatedFields({ ...updatedFields, [key]: e.target.value })
                }
              />
            ) : null
          )}
          <Button variant="contained" color="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default PassengerDetails;