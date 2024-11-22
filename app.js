const express = require("express");
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

const app = express();
const port = 3000;

app.get("/db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to connect to database" });
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to the Node.js API connected to PostgreSQL!");
});

app.listen(port, async () => {
  console.log(`API server running on http://localhost:${port}`);
});