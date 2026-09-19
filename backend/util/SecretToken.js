const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") }); 

module.exports.createSecretToken = (id) => {
  let secretKey = process.env.TOKEN_KEY || process.env.JWT_SECRET;
  if (!secretKey) {
    console.warn("⚠️ WARNING: .env file not found. Using a temporary hardcoded secret key.");
    secretKey = "my_temporary_super_secret_safe_key_123";
  }
  return jwt.sign({ id }, secretKey, {
    expiresIn: "3d",
  });
};
