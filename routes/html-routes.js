// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/members");
    // }
    res.render("index");
    // res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    res.render("login");
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/members");
    // }
    // res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", (req, res) => {
    res.render("signup");
  });

  app.get("/owner", (req, res) => {
    res.render("owner");
  });

  app.get("/pet-info", (req, res) => {
    res.render("petinfo");
  });

  app.get("/owner-checkin", (req, res) => {
    res.render("ownerCheckin");
  });

  app.get("/new-trip", (req, res) => {
    res.render("newtrip");
  });

  app.get("/sitter", (req, res) => {
    res.render("sitter");
  });

  app.get("/sitterCheckin", (req, res) => {
    res.render("sitterCheckIn");
  });

  // // Here we've add our isAuthenticated middleware to this route.
  // // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/members", isAuthenticated, (req, res) => {
  //   res.sendFile(path.join(__dirname, "../public/members.html"));
  // });
};
