const server = require("../server.js");
const request = require("supertest");

describe("user-router.js", () => {
  describe("GET /api/users", () => {
    it("returns 200 OK", () => {
      return request(server)
        .get(`/`)
        .set(
          "Authorization",
          `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFub3RoZXIgb25lISIsImlhdCI6MTU2ODkyNDEzMywiZXhwIjoxNTY5MDEwNTMzfQ.qUOGGRmO6LSiQ8U7cdUbuZFUxWQFJ0mRRT2IxC59BFc`
        )
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("returns JSON", () => {
      return request(server)
        .get(`/`)
        .set(
          "Authorization",
          `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFub3RoZXIgb25lISIsImlhdCI6MTU2ODkyNDEzMywiZXhwIjoxNTY5MDEwNTMzfQ.qUOGGRmO6LSiQ8U7cdUbuZFUxWQFJ0mRRT2IxC59BFc`
        )
        .then(res => {
          // expect(res.type).toMatch(/xml/i) // try with failing
          expect(res.type).toMatch(/json/i);
        });
    });
  });
});
