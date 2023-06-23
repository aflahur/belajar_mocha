const request = require("supertest")("https://reqres.in")
const expect = require("chai").expect;

describe("POST User REQRES", function () {
    it("Success Register", async function () {
        const response = await request
            .post("/api/users")
            .send({ name: "aflahur", job: "QAengineer" });

        expect(response.body.name).to.eql('aflahur')
        expect(response.body.job).to.eql('QAengineer')
    })
})