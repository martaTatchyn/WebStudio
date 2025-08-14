const btncOpenModal = document.querySelectorAll("[data-open-modal]")
const bacdrop = document.querySelector(".bacdrop")
const btncCloseModal = document.querySelector(".modal__close")
const modal = document.querySelector(".modal")
const burger = document.querySelector('.header__burger')
const mobileMenu = document.querySelector('.header__menu')

burger.addEventListener('click', () => {
  burger.classList.toggle("burger-active");
  mobileMenu.classList.toggle("menu-active");
});

btncOpenModal.forEach((btn) => {
   btn.addEventListener("click", () => {
    bacdrop.classList.remove("is-hidden")
    document.body.style.overflow = "hidden"
    modal.classList.add("rotate") 
   })
})

btncCloseModal.addEventListener("click", () => {
    bacdrop.classList.add("is-hidden")
        document.body.style.overflow = "auto"
        modal.classList.remove("rotate") 
   })