const apiBd = require('../../utils/apidb');

it('call axios un method DB ', () => {
    const  servicesCreate = apiBd.getData("/api/user",{email: "jorge@gmail.com"})
    console.log(servicesCreate)

});