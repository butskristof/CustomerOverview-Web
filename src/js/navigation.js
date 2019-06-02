const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".section-link");

export function addNavigationHandlers() {
	console.log("Adding navigation handlers.");
	links.forEach(l => {
		l.addEventListener("click", e => showSection(e.target), false);
	})
}

function showSection(link) {
	const activeItem = document.querySelector("li.active");
	if (activeItem) activeItem.classList.remove('active');

	const name = link.dataset.section;
	link.parentNode.classList.add('active');
	sections.forEach(s => {
		if (`section-${name}` === s.id) {
			s.style.display = 'block';
		} else {
			s.style.display = 'none';
		}
	})
}
