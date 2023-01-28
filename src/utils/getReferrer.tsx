export function getReferrer() {
  let referrer = document.referrer;
  if (referrer === "") {
    referrer = "Direct";
  }
  return referrer;
}
