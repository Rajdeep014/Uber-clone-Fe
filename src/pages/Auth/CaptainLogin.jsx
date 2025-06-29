import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { useState } from "react";
const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Box sx={{ bgcolor: "#f8f9fa" }}>
      {/* ✅ Top Logo like Navbar */}
      <Box
        sx={{
          // width: "100%",
          height: 80,
          px: 2,
          display: "flex",
          alignItems: "center",
          bgcolor: "#fff",
          boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src="https://logospng.org/download/uber/logo-uber-4096.png"
          alt="Uber Logo"
          style={{ height: 80 }}
        />
      </Box>

      {/* ✅ Centered Form */}
      <Box
        sx={{
          minHeight: "calc(100vh - 80px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          mt: 4,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 500,
            // bgcolor: "#fff",
            p: 2,
            borderRadius: 2,
            boxShadow: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h5" textAlign={"center"}>
            {" "}
            Login as captain{" "}
          </Typography>

          <Divider sx={{}} />
          <form onSubmit={handleSubmit}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, mb: 1, textTransform: "capitalize" }}
            >
              Email
            </Typography>
            <TextField
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              sx={{ mb: 2 }}
            />

            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, mb: 1, textTransform: "capitalize" }}
            >
              Password
            </Typography>
            <TextField
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              sx={{ mb: 2 }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1.1rem",
                height: 48,
                textTransform: "none",
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#222",
                },
              }}
            >
              Continue
            </Button>
            <Typography
              variant="body1"
              sx={{ mt: 2, mr: 1, textAlign: "left" }}
            >
              Don't have an account?{" "}
              <a
                href="/signup"
                style={{
                  color: "#1976d2",
                  textDecoration: "none",
                  fontWeight: 500,
                  textAlign: "left",
                }}
              >
                Register
              </a>
            </Typography>
          </form>
          <Divider sx={{ my: 2 }}>or</Divider>

          <Button
            variant="outlined"
            fullWidth
            sx={{
              marginBottom: 1,
              justifyContent: "center",
              borderRadius: 2,
              fontWeight: "bold",
              color: "#000",
              borderColor: "#000",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#f5f5f5",
                borderColor: "#222",
              },
            }}
            onClick={() => (window.location.href = "/login")}
          >
            Login as User
          </Button>
          <Typography
            variant="body2"
            sx={{ mt: 2, textAlign: "center", color: "text.secondary" }}
          >
            By continuing, you agree to Uber's Terms of Service and Privacy
            Policy. By providing your email, you consent to receive
            communications for account verification and service updates.
          </Typography>
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Typography variant="caption" color="text.secondary">
              This site is protected by reCAPTCHA and the Google&nbsp;
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              &nbsp;and&nbsp;
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>
              &nbsp;apply.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CaptainLogin;
