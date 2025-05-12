const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

// Define User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    maxLength: [30, "Your name cannot exceed 30 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: [6, "Your password must be longer than 6 characters"],
    select: false, // Prevents password from being returned in queries
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: function (value) {
      return value === this.password;
    },
    message: "Passwords are not the same!",
  },
  avatar: {
    public_id: { type: String, required: true },
    url: { type: String, required: true },
  },
  role: {
    type: String,
    enum: ["user", "admin", "restaurant-owner"],
    default: "user",
  },
  phoneNumber: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  passwordChangedAt: Date,
  active: { type: Boolean, default: true, select: false },
  passwordResetToken: String,
  passwordResetExpires: Date,
});

// Middleware: Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

// Method to check if entered password matches stored password
userSchema.methods.correctPassword = async function (enteredPassword, storedPassword) {
  return await bcrypt.compare(enteredPassword, storedPassword);
};

// Method to check if password was changed after token was issued
userSchema.methods.changedPasswordAfter = function (JWTTimeStamp) {
  if (this.passwordChangedAt) {
    const changedTime = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
    return JWTTimeStamp < changedTime;
  }
  return false;
};

// Generate password reset token
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex");
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000; // Expires in 10 minutes

  return resetToken;
};

// Export Model
module.exports = mongoose.model("User", userSchema);
