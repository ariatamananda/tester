'use strict';
const fs = require("fs")

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    let data = JSON.parse(fs.readFileSync("./toys.json", "utf-8"))
    let toys = []

    for(let i = 0; i < data.length; i++){
      let toyName = data[i].name
      let toyCountry = data[i].country
      let toyBrand = data[i].brand
      let toyQuantity = data[i].quantity
      let toyPicture = data[i].picture

      toys.push({
        name: toyName,
        country: toyCountry,
        brand: toyBrand,
        quantity: toyQuantity,
        picture: toyPicture,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert("Toys", toys, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Toys", null, {})
  }
};
