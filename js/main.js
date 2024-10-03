class Points {
  constructor(Points = 0) {
    this.Points = Points;
  }

  displayPoints() {
    return `The total points are ${this.Points}.`;
  }

  totalPoints() {
    return this.Points;
  }

  removePoints(points) {
    if (points <= this.Points && points > 0) {
      this.Points -= points;
      return this.displayPoints(); 
    } else {
      return "No points to remove or invalid value.";
    }
  }

  addPoints(points) {
    if (points >= 0) {
      this.Points += points; 
      return this.displayPoints();
    } else {
      return "Cannot add negative points."; 
    }
  }
}

let firstTeam = new Points(10);
console.log(firstTeam.removePoints(5)); 
console.log(firstTeam.addPoints(5)); 
console.log(firstTeam.displayPoints());
