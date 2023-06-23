const request = require("supertest")("https://kasir-api.belajarqa.com")
const expect = require("chai").expect;

describe("POST User REQRES", function () {
    it("Success Register", async function () {
        const response = await request
            .post("/registration")
            .send({

                name: "Cobamocharofik",
                email: "sample@ex.com",
                password: "cobaPassword",

            });
        expect(response.body.data.name).to.eql('Cobamocharofik')
        expect(response.body.data.email).to.eql('sample@ex.com')
        // expect(response.body.data.password).to.eql('cobaPassword')
    })
})

describe("Login User REQRES", function () {
    it("Success Login", async function () {
        const response = await request
            .post("/authentications")
            .send({
                email: "sample@example.com",
                password: "123adsfadf@"
            });
        // expect(response.status).to.eql(201)
        expect(response.body.data.user.email).to.eql('sample@example.com')
        // expect(response.body.data.user.role).to.eql('admin/kasir')
        // expect(response.body.data.password).to.eql("123adsfadf@")
        // expect(response.body.data.password).to.eql('cobaPassword')
    })
})