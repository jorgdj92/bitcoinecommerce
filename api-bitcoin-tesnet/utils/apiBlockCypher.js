const axios  = require ('axios')
//const bcypher = require('blockcypher');

let url = "https://api.blockcypher.com"

//var bcapi = new bcypher('btc',process.env.CHAIN,process.env.BLOCKCYPHERTOKEN);

async function getInfoWallet(address){
    try {
        let data ={ addresses: address }
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
        let result = await  axios.post(`${url}/v1/bcy/test3/faucet?token=${process.env.BLOCKCYPHERTOKEN}`,JSON.stringify(data))
        return result
    } catch (error) {
        return error
    }
}

async function createTransfer(addressFrom,addressTo,amount){
    var newtx = {
        inputs: [{addresses: [`${addressFrom}`]}],
        outputs: [{addresses: [`${addressTo}`], value: amount}]
      };
      try {
          let  transfer =  await axios.post('https://api.blockcypher.com/v1/bcy/test3/txs/new', JSON.stringify(newtx));
          return transfer
      } catch (error) {
          return error
      }
}

async function singerTransfer(address,priKey,publickey){

    try {
        let signer = await axios({
            method: 'post',
            url:`https://api.blockcypher.com/v1/bcy/test/txs/send?token=${process.env.BLOCKCYPHERTOKEN}`,
            data: {
                
            }
        })
    } catch (error) {
        
    }
}

module.exports = {
    getInfoWallet,
    createAddress,
    foundWallet,
    createTransfer
};