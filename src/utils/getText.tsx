export function getText(html: string) {
  let divContainer = document.createElement("div");
  divContainer.innerHTML = html;
  return divContainer.textContent || divContainer.innerText || "";
}
