const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
require("dotenv").config();

const createAdmin = async () => {
  try {
    const email = process.env.ADMIN_USERNAME;
    const password = process.env.ADMIN_PASSWORD;

    if (!email || !password) {
      console.log("Admin credentials are missing from environment variables.");
      return;
    }

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      console.log("Admin already exists.");
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({
      email,
      password: hashedPassword,
    });

    await newAdmin.save();
    console.log("Admin created successfully!");
  } catch (err) {
    console.error("Error creating admin:", err);
  }
};

module.exports = createAdmin;
