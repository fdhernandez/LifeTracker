const bcrypt = require("bcrypt")
const { BadRequestError, UnauthorizedError } = require("../utils/errors");
const db = require("../db");
const {BCRYPT_WORK_FACTOR} = require("../config")
class User {
  static async login(credentials) {
    
    throw new UnauthorizedError("Invalid email/password combo");
  }

  static async register(credentials) {
    // if any field missing, throw an error
    const requiredFields = [
      "email",
      "password",
      "username",
      "first_name",
      "last_name",
    ];
    
    requiredFields.forEach((field) => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body.`);
      }
    });

    if (credentials.email.indexOf("@") <= 0) {
      throw new BadRequestError("Invalid email.");
    }

  
    const existingUser = await User.fetchUserByEmail(credentials.email);
    if (existingUser) {
      throw new BadRequestError(
        `A user already exists with this email: ${credentials.email}`
      );
    }

    
    const hashedPW = await bcrypt.hash(credentials.password, BCRYPT_WORK_FACTOR)
    const lowercasedEmail = credentials.email.toLowerCase();

    const result = await db.query(
      `
            INSERT INTO users (
                email,
                password,
                username,
                first_name,
                last_name
            )
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, email, password, username, first_name, last_name;
        `,
      [lowercasedEmail, hashedPW, credentials.username, credentials.first_name, credentials.last_name]
    );

    const user = result.rows[0];
    return user;
  }

  static async fetchUserByEmail(email) {
    if (!email) {
      throw new BadRequestError("No email provided");
    }
    const query = `SELECT * FROM users WHERE email = $1`;
    const result = await db.query(query, [email.toLowerCase()]); 
    const user = result.rows[0]; 
    return user;
  }
}

module.exports = User;