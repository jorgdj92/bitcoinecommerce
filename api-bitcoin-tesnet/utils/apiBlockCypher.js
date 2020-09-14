const axios  = require ('axios')

let url = "https://api.blockcypher.com/v1/btc/test3/addrs/"


async function getInfoWallet(address){
    try {
        let result =  await  axios({
            method:"get",
            url:`${url}${address}`
            })
            return result.data
    } catch (error) {
        return error;
    }
}

module.exports = {
    getInfoWallet
  };