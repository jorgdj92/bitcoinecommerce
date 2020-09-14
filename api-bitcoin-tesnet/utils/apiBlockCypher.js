const axios  = require ('axios')

let url = "https://api.blockcypher.com"


async function getInfoWallet(address){
    try {
        let result =  await  axios({
            method:"get",
            url:`${url}/v1/btc/test3/addrs/${address}`
            })
            return result.data
    } catch (error) {
        return error;
    }
}

async function createAddress(){
    try {
        let  result =  await axios({
            method: "post",
            url: `${url}/v1/btc/test3/addrs`
        })
        return result;
    } catch (error) {
        return error
    }
}

async function foundWallet(address,amount){
    var data = {address: address, amount: amount}
    try {
        let result = await  axios.post(`${url}/v1/bcy/test/faucet?token=${process.env.BLOCKCYPHERTOKEN}`,JSON.stringify(data))
        return result
    } catch (error) {
        return error
    }
}

module.exports = {
    getInfoWallet,
    createAddress,
    foundWallet
  };