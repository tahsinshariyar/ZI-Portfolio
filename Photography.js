const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropdown_menu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropdown_menu.classList.toggle('open')
    const isOpen = dropdown_menu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}
function handleSectionIntersect(entries, observer) {
	entries.forEach((entry) => {
	  if (entry.isIntersecting) {
		entry.target.classList.add("active");
	  } else {
		entry.target.classList.remove("active");
	  }
	});
  }
  
  // Create an observer
  const sectionObserver = new IntersectionObserver(handleSectionIntersect, {
	root: null, // viewport
	rootMargin: "0px",
	threshold: 0.2, // 20% of the section must be visible
  });
  
  // Target sections with the scroll-animation class
  const sections = document.querySelectorAll(".scroll-animation");
  
  sections.forEach((section) => {
	sectionObserver.observe(section);
  });