export function getExperience(dateString: string) {
  let timeDifference = new Date() - new Date(dateString);
  return Math.floor(timeDifference / 1000 / 60 / 60 / 24 / 365);
}
