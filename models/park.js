const Park = function(name, ticketPrice) {
  this.name = name
  this.ticketPrice = ticketPrice
  this.collectionOfDinosaurs = []
}

Park.prototype.addDinosaurToCollection = function(dinosaur) {
  this.collectionOfDinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaurFromCollection = function(dinosaur) {
  const dinosaursStillThere = [];
  for (const i of this.collectionOfDinosaurs) {
    if (i !== dinosaur) {
      dinosaursStillThere.push(i);
    }
  }
  this.collectionOfDinosaurs = dinosaursStillThere;
}

Park.prototype.findMostPopularDinosaur = function() {
  const guestsFiguresForEachDinosaur = [];
  for (const dinosaur of this.collectionOfDinosaurs) {
    guestsFiguresForEachDinosaur.push(dinosaur.guestsAttractedPerDay)
  }
  const largest = Math.max.apply(Math, guestsFiguresForEachDinosaur);
  for (const i of this.collectionOfDinosaurs) {
    if (i.guestsAttractedPerDay === largest) {
      return i
    }
  }
}

// Park.prototype.findAllOfOneSpecies = function(type) {
//   const allTheSame = [];
//   for (const dinosaur of this.collectionOfDinosaurs) {
//     if (dinosaur.species === type) {
//       allTheSame.push(dinosaur);
//     }
//   }
//   return allTheSame
// }





module.exports = Park;

// Array.max = function( array ){
//     return Math.max.apply( Math, array );
// };



// A name
// A ticket price
// A collection of dinosaurs
// A park must be able to:
//
// Add a dinosaur to its collection of dinosaurs
// Remove a dinosaur from its collection of dinosaurs
// Find the dinosaur that attracts the most visitors
// Find all dinosaurs of a particular species
// Calculate the total number of visitors per day
// Calculate the total number of visitors per year
// Calculate the total revenue from ticket sales for one year
