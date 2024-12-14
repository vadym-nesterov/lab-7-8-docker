const supertest = require("supertest");
const app = require("../app");
const request = supertest(app);

describe("GET /todos", () => {
  it("should retrieve and list todos", async () => {
    const response = await request.get("/todos");

    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.length).toBe(5);
  });
});
