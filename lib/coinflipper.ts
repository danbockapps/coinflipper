const iter = 1000;
const gamesRemaining = 96;

class Entry {
  name: String;
  startingPoints: number;
  points: number;
  firsts: number; // needs all places

  constructor(name: String, startingPoints: number) {
    this.startingPoints = startingPoints;
    this.name = name;
  }

  resetPoints() {
    this.points = this.startingPoints;
  }
}

const entries = [
  new Entry('Dan', 1),
  new Entry('Hazel', 5)
];

for(let i=0; i<iter; i++) {
  for(let entry of entries) {
    for(let j=0; j<gamesRemaining; j++) {
      if(Math.random() > 0.5) {
        entry.points++;
      }
    }
  }
}