const data = "Jason Kiger at controllers index";

const index = (_req, res) => {
  res.send(data);
};

module.exports = {
  index,
};