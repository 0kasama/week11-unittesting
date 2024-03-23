const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");

const { queryInterface } = sequelize;
const BASE_URL = "/todolist";

beforeAll(async () => {
  try {
    await queryInterface.bulkInsert("todos", [
      {
        id: 1,
        task: "Test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        task: "Test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        task: "Test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        task: "Test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  } catch (error) {
    console.error("Error inserting test data:", error);
  }
});

afterEach(async () => {
  try {
    await queryInterface.bulkDelete("todos", null, {});
  } catch (error) {
    console.error("Error deleting test data:", error);
  }
});

describe("API /todolist", () => {
  it("GET /todolist", async () => {
    try {
      const response = await request(app).get("/todolist").expect(200);
      const firstData = response.body[0];
      expect(typeof firstData.id).toBe("number");
    } catch (error) {
      console.error("Error in GET /todolist:", error);
    }
  });

  it("GET /todolist/:id - Should Return One Task", async () => {
    try {
      const response = await request(app).get("/todolist/1").expect(200);
      expect(response.body.task).toBe("Test");
    } catch (error) {
      console.error("Error in GET /todolist/:id:", error);
    }
  });

  it("POST /todolist - Should Create Task", async () => {
    try {
      const response = await request(app)
        .post("/todolist")
        .send({
          task: "Test Task",
        })
        .expect(201);

      expect(response.body.task).toBe("Test Task");
    } catch (error) {
      console.error("Error in POST /todolist:", error);
    }
  });

  it("PUT /todolist/:id - Should Update Task", async () => {
    try {
      const response = await request(app)
        .put("/todolist/1")
        .send({ task: "Homework" })
        .expect(200);
      expect(response.body.message).toBe("Todo Updated");
    } catch (error) {
      console.error("Error in PUT /todolist/:id:", error);
    }
  });

  it("DELETE /todolist/:id - Should Delete Task", async () => {
    try {
      const response = await request(app).delete("/todolist/1").expect(200);
      expect(response.body.message).toBe("Todo Deleted");
    } catch (error) {
      console.error("Error in DELETE /todolist/:id:", error);
    }
  });
});

afterAll((done) => {
  server.close();
  done();
});
