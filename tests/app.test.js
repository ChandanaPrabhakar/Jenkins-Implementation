const request = require("supertest");
const app = require("../src/app");

describe("Test the root endpoint", () =>{
    it("should return Hello, World!", async() =>{
        const response = await request(app).get("/");
        exepect(response.statusCode).toBe(200);
        expect(response.body).toEqual({message: "Hello, World!"});
    });
});