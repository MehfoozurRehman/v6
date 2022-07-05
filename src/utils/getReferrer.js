export function getReferrer() {
  var referrer = document.referrer;
  if (referrer === "") {
    referrer = "Direct";
  }
  return referrer;
}
