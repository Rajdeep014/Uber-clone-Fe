import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { Box, Button, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      {/* Top Section */}
      <Box
        sx={{
          height: "70%",
          backgroundImage:
            "url('https://cdn.wallpapersafari.com/79/56/8co7QZ.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          px: 2,
          pt: 2,
        }}
      >
        {/* Uber Logo - Top Left */}
        <Box sx={{ display: "inline-block" }}>
          <img
            src="https://logospng.org/download/uber/logo-uber-4096.png"
            alt="Uber Logo"
            style={{ width: "120px" }}
          />
        </Box>

        {/* Right Arrow - Top Right */}
        <TrendingFlatIcon
          sx={{
            position: "absolute",
            top: 55,
            right: 16,
            color: "#000",
            fontSize: "48px",
            height: "48px",
            width: "48px",
            borderRadius: "50%",
            backgroundColor: "#fff",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            cursor: "pointer",
            transition: "transform 0.3s ease",
          }}
        />
      </Box>

      {/* Bottom Content */}
      <Box
        sx={{
          height: "30%",
          px: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 600, color: "#111" }}>
          Get Started with Uber
        </Typography>

        <Typography variant="body1" sx={{ mt: 1, color: "gray" }}>
          Ride smarter. Earn faster. Travel safer. Join the Uber movement today.
        </Typography>

        {/* Button wrapped in anchor tag */}
        <a
          href="/login"
          style={{
            textDecoration: "none",
            marginTop: 24,
            width: "fit-content",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              height: 50,
              width: "350px",
              fontSize: "16px",
              fontWeight: 600,
              textTransform: "none",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              "&:hover": {
                backgroundColor: "#1976d2",
                boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
              },
            }}
          >
            Get Started
          </Button>
        </a>
      </Box>
    </Box>
  );
};

export default Home;
