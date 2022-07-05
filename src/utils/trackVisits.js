export function trackVisits() {
  var visits = localStorage.getItem("visits");
  if (visits === null) {
    visits = 1;
  } else {
    visits = parseInt(visits) + 1;
  }
  localStorage.setItem("visits", visits);
  return visits;
}
