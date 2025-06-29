import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { GoogleLoginButton } from "react-social-login-buttons";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Box sx={{ bgcolor: "#f8f9fa" }}>
      {/* ✅ Top Logo like Navbar */}
      <Box
        sx={{
          height: 80,
          px: 2,
          display: "flex",
          alignItems: "center",
          bgcolor: "#fff",
          boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <a href="/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://logospng.org/download/uber/logo-uber-4096.png"
            alt="Uber Logo"
            style={{ height: 80 }}
          />
        </a>
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
            p: 2,
            borderRadius: 2,
            boxShadow: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h5" textAlign={"center"}>
            Create your Uber account
          </Typography>

          <Divider sx={{}} />
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <Typography>First Name</Typography>
              <TextField
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                required
              />
              <Typography>Last Name</Typography>
              <TextField
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                fullWidth
                required
              />
            </Box>
            <Typography>Email</Typography>
            <TextField
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              sx={{ mb: 2 }}
              required
            />
            <Typography>Password</Typography>
            <TextField
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              sx={{ mb: 2 }}
              required
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
              Sign Up
            </Button>
            <Typography
              variant="body1"
              sx={{ mt: 2, mr: 1, textAlign: "left" }}
            >
              Already have an account?{" "}
              <a
                href="/login"
                style={{
                  color: "#1976d2",
                  textDecoration: "none",
                  fontWeight: 500,
                  textAlign: "left",
                }}
              >
                Login
              </a>
            </Typography>
          </form>
          <Divider sx={{ my: 2 }}>or</Divider>

          <GoogleLoginButton
            style={{
              marginBottom: 8,
              justifyContent: "center",
              borderRadius: 8,
            }}
            onClick={() => {
              /* handle Google signup */
            }}
          />

          <Typography
            variant="body2"
            sx={{ mt: 2, textAlign: "center", color: "text.secondary" }}
          >
            By signing up, you agree to Uber's Terms of Service and Privacy
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

export default Signup;
