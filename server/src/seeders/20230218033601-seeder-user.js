"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("Users", [
      {
        firstName: "Nguyễn",
        lastName: "Tuấn Kiệt",
        password: "123456",
        email: "admin@gmail.com",
        address: "Phú Yên",
        phonenumber: "0355882728",
        gender: "1",
        positionId: "",
        roleId: "R1",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
