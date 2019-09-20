const server = require("./server");
const request = require("supertest");

// done
describe("server.js", () => {
  describe("GET /", () => {
    it("returns 200 OK", () => {
      return request(server)
        .get(`/`)
        .then(res => {
          // expect(res.status).toBe(500); // should fail
          expect(res.status).toBe(200); // should fail
        });
    });
  });
});
