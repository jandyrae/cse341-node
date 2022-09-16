const data = "Jason Kiger at controllers index";

const index = (_req, res) => {
  res.status(200).send(data);
  res.status(503).send("Voldemort says server error!")
};

module.exports = {
  index,
};