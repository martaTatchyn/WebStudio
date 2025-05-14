const btncOpenModal = document.querySelectorAll("[data-open-modal]")
const bacdrop = document.querySelector(".bacdrop")
const btncCloseModal = document.querySelector(".modal-close")

btncOpenModal.forEach((btn) => {
   btn.addEventListener("click", () => {
    bacdrop.classList.remove("is-hidden")
    document.body.style.overflow = "hidden"
   })
})

btncCloseModal.addEventListener("click", () => {
    bacdrop.classList.add("is-hidden")
        document.body.style.overflow = "auto"
   })