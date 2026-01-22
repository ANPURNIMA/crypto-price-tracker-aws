import React, { useEffect } from "react";
import {
  Container,
  Card,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    // 🔐 Protect admin route
    if (!token || role !== "admin") {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: "100%",
          p: 4,
          borderRadius: 3,
        }}
      >
        {/* HEADER */}
        <Typography variant="h4" gutterBottom>
          👑 Admin Dashboard
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          Welcome Admin. You have full control over the system.
        </Typography>

        {/* DASHBOARD CARDS */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 3,
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <span style={{ fontSize: "2.2rem" }}>👥</span>
              <div>
                <Typography variant="h6">Users</Typography>
                <Typography variant="body2" color="text.secondary">
                  Manage registered users
                </Typography>
              </div>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 3,
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <span style={{ fontSize: "2.2rem" }}>📈</span>
              <div>
                <Typography variant="h6">Crypto Services</Typography>
                <Typography variant="body2" color="text.secondary">
                  Market data & APIs
                </Typography>
              </div>
            </Card>
          </Grid>
        </Grid>

        {/* LOGOUT */}
        <Button
          variant="contained"
          color="error"
          sx={{ mt: 4 }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Card>
    </Container>
  );
}

export default Admin;
