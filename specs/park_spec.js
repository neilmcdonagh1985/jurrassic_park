const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park1;
  let dinosaur1
  let dinosaur2
  let dinosaur3
  let dinosaur4

  beforeEach(function () {
    park1 = new Park('Jurrasic Park', 10);
    dinosaur1 = new Dinosaur('t-rex', 'omnivore', 250)
    dinosaur2 = new Dinosaur('diplodocus', 'herbivore', 150)
    dinosaur3 = new Dinosaur('stegosaurus', 'carnivore', 100)
    dinosaur4 = new Dinosaur('triceratops', 'carnivore', 125)
  });

  it('should have a name', function() {
    assert.strictEqual(park1.name, 'Jurrasic Park');
  });

  it('should have a ticket price', function() {
    assert.strictEqual(park1.ticketPrice, 10)
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park1.collectionOfDinosaurs
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function() {
    park1.addDinosaurToCollection(dinosaur1)
    assert.deepStrictEqual(park1.collectionOfDinosaurs, [dinosaur1])
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park1.addDinosaurToCollection(dinosaur2)
    park1.addDinosaurToCollection(dinosaur3)
    park1.addDinosaurToCollection(dinosaur4)
    park1.removeDinosaurFromCollection(dinosaur3)
    const expected = [dinosaur2, dinosaur4]
    assert.deepStrictEqual(park1.collectionOfDinosaurs, expected)
  });


  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park1.addDinosaurToCollection(dinosaur1)
    park1.addDinosaurToCollection(dinosaur2)
    park1.addDinosaurToCollection(dinosaur3)
    park1.addDinosaurToCollection(dinosaur4)
    actual = park1.findMostPopularDinosaur()
    assert.deepStrictEqual(actual, dinosaur1)
  });

  // it('should be able to find all dinosaurs of a particular species', function(species) {
  //   park1.addDinosaurToCollection(dinosaur1)
  //   park1.addDinosaurToCollection(dinosaur2)
  //   park1.addDinosaurToCollection(dinosaur3)
  //   park1.addDinosaurToCollection(dinosaur4)
  //   assert.deepStrictEqual(park1.findAllOfOneSpecies('triceratops'), [dinosaur4])
  // });

  it('should be able to calculate the total number of visitors per day', function () {
    park1.addDinosaurToCollection(dinosaur1)
    park1.addDinosaurToCollection(dinosaur2)
    park1.addDinosaurToCollection(dinosaur3)
    assert.strictEqual(park1.totalVisitorsPerDay(), 500)
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park1.addDinosaurToCollection(dinosaur1)
    park1.addDinosaurToCollection(dinosaur2)
    park1.addDinosaurToCollection(dinosaur3)
    park1.addDinosaurToCollection(dinosaur4)
    assert.strictEqual(park1.totalGuestsPerYear(), 228125)
  });

  it('should be able to calculate total revenue for one year', function() {
    park1.addDinosaurToCollection(dinosaur1)
    park1.addDinosaurToCollection(dinosaur2)
    park1.addDinosaurToCollection(dinosaur3)
    park1.addDinosaurToCollection(dinosaur4)
    assert.strictEqual(park1.revenuePerYear(), 2281250)
  });

  // it('should be able to remove all dinosaurs of a particular species',  function () {
  //   park1.addDinosaurToCollection(dinosaur1)
  //   park1.addDinosaurToCollection(dinosaur2)
  //   park1.addDinosaurToCollection(dinosaur3)
  //   park1.addDinosaurToCollection(dinosaur4)
  //   actual = park1.removeOneSpecies('diplodocus')
  //   assert.deepStrictEqual(actual, [dinosaur1, dinosaur3, dinosaur4])
  // })

});
