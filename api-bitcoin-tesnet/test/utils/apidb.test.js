const mockAxios = require('axios')
const apiBd = require('../../utils/apidb');

it('call axios un method DB ', () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
        data: 

    }))
    const  servicesCreate = apiBd.getData("/api/user",{email: "jorge@gmail.com"})
    console.log(servicesCreate)

});