const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ message: "No token provided!" });
  }

  jwt.verify(token.split(" ")[1], process.env.JWT_SECRET || "aslfkaworkw3eokmdvkefepfosdksdvk", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized!" });
    }
    req.user = { id: decoded.id, role: decoded.role }; // Store user details in req.user
    next();
  });
};


// Middleware to check if the user is an admin
exports.verifyAdmin = (req, res, next) => {
  if (req.userRole !== "Admin") {
    return res.status(403).json({ message: "Access denied. Admins only!" });
  }
  next();
};
