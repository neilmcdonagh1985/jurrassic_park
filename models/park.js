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

Park.prototype.findAllOfOneSpecies = function(type) {
  const allTheSame = [];
  for (const dinosaur of this.collectionOfDinosaurs) {
    if (dinosaur.species === type) {
      allTheSame.push(dinosaur);
    }
  }
  return allTheSame
}

Park.prototype.totalVisitorsPerDay = function() {
  let total = 0;
  for (const dinosaur of this.collectionOfDinosaurs) {
    total += dinosaur.guestsAttractedPerDay;
  }
  return total
}

Park.prototype.totalGuestsPerYear = function() {
  let total = 0;
  for (const dinosaur of this.collectionOfDinosaurs) {
    total += dinosaur.guestsAttractedPerDay;
  }
  return total * 365
}

Park.prototype.revenuePerYear = function() {
  return this.totalGuestsPerYear() * this.ticketPrice
}

// Park.protoype.removeOneSpecies = function(type) {
//
// }


module.exports = Park;
