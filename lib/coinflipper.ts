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
    this.firsts = 0;
  }

  resetPoints() {
    this.points = this.startingPoints;
  }
}

const entries = [
  new Entry('Dan', 1),
  new Entry('Hazel', 5),
  new Entry('Ada', 6)
];

for(let i=0; i<iter; i++) {
  for(let entry of entries) {
    entry.resetPoints();
    for(let j=0; j<gamesRemaining; j++) {
      if(Math.random() > 0.5) {
        entry.points++;
      }
    }
  }

  // Determine who's in first place
  firstPlace(entries).firsts++;
}

printStandings();

function firstPlace(entries: Entry[]) {
  let winningEntry = new Entry(null, null);
  winningEntry.points = -1;
  for(let entry of entries) {
    // obvious issues with ties
    if(entry.points > winningEntry.points) {
      winningEntry = entry;
    }
  }
  return winningEntry;
}

function printStandings() {
  for(let entry of entries) {
    console.log(entry.firsts + ' ' + entry.name);
  }
}