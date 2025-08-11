

export function createNavPath(homePath, subPathArray) {
  const ol = document.createElement("ol");
  ol.className =
    "breadcrumb p-3 bg-white-subtle border border-dark-subtle shadow-sm rounded-3";

  const homeLi = document.createElement("li");
  homeLi.className = "breadcrumb-item";

  const homeAnchor = document.createElement("a");
  homeAnchor.setAttribute("href", homePath);
  homeAnchor.className = "link-body-emphasis";
  homeLi.appendChild(homeAnchor);

  const homeIcon = document.createElement("i");
  homeIcon.className = "bi bi-house-door-fill";
  homeIcon.setAttribute("aria-hidden", "true");
  homeAnchor.appendChild(homeIcon);

  const homeSpan = document.createElement("span");
  homeSpan.className = "visually-hidden";
  homeSpan.textContent = "Home";
  homeAnchor.appendChild(homeSpan);

  ol.appendChild(homeLi);

  subPathArray.forEach(({ name, path, isActive }) => {
    const li = document.createElement("li");
    li.classList.add("breadcrumb-item");
    if (isActive) {
      li.classList.add("active");
    }

    const a = document.createElement("a");
    a.className = "link-body-emphasis  text-decoration-none";
    a.setAttribute("href", path);
    a.textContent = name;
    li.appendChild(a);

    ol.appendChild(li);
  });

  return ol;
}
