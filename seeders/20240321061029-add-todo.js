"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Todos", [
      {
        task: "Self Learning",
        dueDate: new Date(2024, 2, 23),
      },
      {
        task: "Mentoring",
        dueDate: new Date(2024, 2, 20),
      },
      {
        task: "Live Session",
        dueDate: new Date(2024, 2, 24),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Todos', null, {})
  },
};
