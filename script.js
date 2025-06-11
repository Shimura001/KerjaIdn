const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

function filterJobs() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const jobCards = document.querySelectorAll('.job-card');

  jobCards.forEach(card => {
    const title = card.querySelector('h3').innerText.toLowerCase();
    const company = card.querySelector('.job-meta span')?.innerText.toLowerCase() || '';
    const description = card.querySelector('.job-description').innerText.toLowerCase();

    if (title.includes(input) || company.includes(input) || description.includes(input)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

