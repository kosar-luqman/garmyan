const hamburger = document.querySelector(".hamburger")
const mobileNavbar = document.querySelector(".mobileNavbar")

hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("is-active")) {
    hamburger.classList.remove("is-active")
    mobileNavbar.classList.remove("active")
  } else {
    hamburger.classList.add("is-active")
    mobileNavbar.classList.add("active")
  }
})

// document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
//   toggle.addEventListener("click", function (e) {
//     e.preventDefault()

//     const parentDropdown = this.closest(".dropdown")
//     const menu = parentDropdown.querySelector(":scope > .dropdown-menu")
//     const arrow = this.querySelector(".dropdown-arrow")

//     // Close sibling dropdowns and reset arrows
//     const siblingDropdowns =
//       parentDropdown.parentElement.querySelectorAll(":scope > .dropdown")
//     siblingDropdowns.forEach((sibling) => {
//       if (sibling !== parentDropdown) {
//         const siblingMenu = sibling.querySelector(":scope > .dropdown-menu")
//         const siblingArrow = sibling.querySelector(".dropdown-arrow")
//         siblingMenu?.classList.add("hidden")
//         siblingArrow?.classList.remove("rotate-[-90deg]")
//       }
//     })

//     // Toggle this one
//     const isHidden = menu?.classList.contains("hidden")
//     menu?.classList.toggle("hidden", !isHidden)
//     arrow?.classList.toggle("rotate-[-90deg]", isHidden)
//   })
// })

// // Close all on outside click
// window.addEventListener("click", function (e) {
//   if (!e.target.closest(".dropdown")) {
//     document
//       .querySelectorAll(".dropdown-menu")
//       .forEach((menu) => menu.classList.add("hidden"))
//     document
//       .querySelectorAll(".dropdown-arrow")
//       .forEach((arrow) => arrow.classList.remove("rotate-[-90deg]"))
//   }
// })

document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
  toggle.addEventListener("click", function (e) {
    e.preventDefault()
    e.stopPropagation()

    const dropdown = this.closest(".dropdown")
    const menu = dropdown.querySelector(":scope > .dropdown-menu")
    const arrow = this.querySelector(".dropdown-arrow")

    // Close sibling dropdowns only at this level
    const siblingDropdowns =
      dropdown.parentElement?.querySelectorAll(":scope > .dropdown") || []
    siblingDropdowns.forEach((sibling) => {
      if (sibling !== dropdown) {
        const siblingMenu = sibling.querySelector(":scope > .dropdown-menu")
        const siblingArrow = sibling.querySelector(".dropdown-arrow")
        siblingMenu?.classList.add("hidden")
        siblingArrow?.classList.remove("rotate-open")
      }
    })

    const isHidden = menu.classList.contains("hidden")
    menu.classList.toggle("hidden", !isHidden)
    arrow?.classList.toggle("rotate-open", isHidden)
  })
})

// Handle outside click (does not close if you clicked inside a dropdown)
window.addEventListener("click", function (e) {
  const clickedInsideDropdown = e.target.closest(".dropdown")
  if (!clickedInsideDropdown) {
    document
      .querySelectorAll(".dropdown-menu")
      .forEach((menu) => menu.classList.add("hidden"))
    document
      .querySelectorAll(".dropdown-arrow")
      .forEach((arrow) => arrow.classList.remove("rotate-open"))
  }
})

document.querySelectorAll(".random-img").forEach((img, index) => {
  img.src = `https://picsum.photos/seed/${Math.random()}/1920/1080`
  img.src = `https://picsum.photos/seed/${Math.random()}/1920/1080`
})

document.getElementById("currentYear").textContent = new Date().getFullYear()

// Swiper initialization

// Header Swiper
var swiper = new Swiper(".headerSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  speed: 2000,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>"
    },
  },
})

// Ad Swiper
var swiper = new Swiper(".adSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
})
