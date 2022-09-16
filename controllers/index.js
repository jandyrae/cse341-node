const data = "Jason Kiger at controllers index";

const index = (_req, res) => {
  if (res.status(200)) {
    res.send(data);
  } else {
    res.send("Voldemort says server error!");
  }
};

module.exports = {
  index,
};