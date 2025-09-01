const request = require("supertest");
const app = require("../index");

test("GET / returns 200", async () => {
  const response = await request(app).get("/");
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe("E-Commerce API is running 🚀");
});
