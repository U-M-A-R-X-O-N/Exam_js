function sumSalaries(salaries) {
  var lorem = 0;
  for (var salary of Object.values(salaries)) {
    lorem += salary;
  }

  return lorem;
}

var salaries = {
  "Akmal": 1200,
  "Salim": 5200,
  "Karima": 1800,
};

alert(sumSalaries(salaries));
