const btncOpenModal = document.querySelectorAll("[data-open-modal]")
const bacdrop = document.querySelector(".bacdrop")
const btncCloseModal = document.querySelector(".modal__close")
const modal = document.querySelector(".modal")

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