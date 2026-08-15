document.getElementById("year").textContent = new Date().getFullYear();

const cvLink = document.getElementById("cv-link");

fetch(cvLink.getAttribute("href"), { method: "HEAD", cache: "no-store" })
  .then((response) => {
    if (response.ok) cvLink.hidden = false;
  })
  .catch(() => {
    cvLink.hidden = true;
  });
