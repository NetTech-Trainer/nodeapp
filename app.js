const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static frontend
app.use(express.static("public"));

// Routes
app.use("/api/users", userRoutes);

// Sync DB and start server
sequelize.sync()
  .then(() => {
    console.log("Database connected & synced");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(err => console.error(err));
