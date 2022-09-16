const index = (_req, res) => {
  const data = "Jason Kiger";
  res.send(data);
};

module.exports = {
  index,
};
