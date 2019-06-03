import {loadSearch} from "./search";

const sections = document.querySelectorAll(".spa-page");
const links = document.querySelectorAll(".section-link");

export function addNavigationHandlers() {
	links.forEach(l => {
		l.addEventListener("click", e => showSection(e.target), false);
		// event loop is broken by previous statement, so link action won't execute
	});

	// showSection(document.querySelector("#link-search")); // TODO remove, only for dev
}

function showSection(link) {
	// remove active class from current link
	const activeItem = document.querySelector("li.active");
	if (activeItem) activeItem.classList.remove('active');

	// get name of section to be shown
	const name = link.dataset.section;
	link.parentNode.classList.add('active'); // add active class to link for current page
	// show selected section, hide others
	sections.forEach(s => {
		if (`section-${name}` === s.id) {
			s.style.display = 'block';
		} else {
			s.style.display = 'none';
		}
	});

	if (name === "search") {
		loadSearch(); // extra call for loading search page
	}
}
