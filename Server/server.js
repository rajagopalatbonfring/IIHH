const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const createAdmin = require("./utils/createAdmin");

const adminAuthRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
const moduleRoutes = require("./routes/moduleRoutes.js");
const programInfoRoutes = require('./routes/programInfoRoutes');
const facultyRoutes = require('./routes/facultyRoutes');
const teamRoutes = require('./routes/teamRoutes');
const faqRoutes = require('./routes/faqRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');


app.get("/", (req, res) => {
  res.send("Welcome to the backend!");
});
app.use("/api/admin", adminAuthRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/programModule", moduleRoutes);
app.use('/api/programInfo', programInfoRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/testimonials', testimonialRoutes);


// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log("MongoDB connected successfully!");
  await createAdmin();
}).catch((error) => console.log("Mongo Error", error));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});