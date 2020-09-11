const axios = require("axios");

async function create(path, data) {
  try {
    let result = await axios({
      method: "post",
      url: `${process.env.URLAPIDB}${path}`,
      data: data,
    });
    return result;
  } catch (error) {
    return error;
  }
}

async function getData(path, data) {
  try {
    let result = await axios({
      method: "get",
      url: `${process.env.URLAPIDB}${path}`,
      params: data
    });
    return result.data;
  } catch (error) {
    return error;
  }
}

module.exports = {
  create,
  getData
};
