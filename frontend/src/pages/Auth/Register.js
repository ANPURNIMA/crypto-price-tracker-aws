import React, { useState } from "react";
import { Container, Card, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import API from "../../api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", {
        email,
        password,
      });
      alert("Registration successful");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Register failed");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Card sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Register
        </Typography>

        <TextField
          fullWidth
          label="Email"
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleRegister}>
          Register
        </Button>
      </Card>
    </Container>
  );
}
