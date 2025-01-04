const errorPage = (request, response) => {
  response.json({ message: "Route not found" });
};
module.exports = errorPage;
