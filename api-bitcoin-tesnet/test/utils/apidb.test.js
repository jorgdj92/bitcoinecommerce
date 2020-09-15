const apiBd = require("../../utils/apidb");
const axios = require("axios");

jest.mock("axios");

describe("Test api DB firebase ", () => {
    it("Create Api test", async () => {
        let path = "";
        let data = {};
        const getData = await apiBd.getData(path, data);
        console.log(getData);
    });
});
