const emailInput = document.getElementById("footer-email");
const emailForm = document.querySelector(".footer__form");
const modalForm = document.getElementById('modal__form');
const closeModalButton = document.getElementById("close-modal");
const openModalButton = document.getElementById('open-modal');
const modal = document.getElementById('modal');
let user;

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log({ email: emailInput.value });
});

openModalButton.addEventListener("click",() => {
  modal.classList.add("modal-showed");
});

closeModalButton.addEventListener('click',() =>{
  modal.classList.remove('modal-showed')
});

modalForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(modalForm));
  if (formData.password !== formData.repeatPassword) {
    alert('Пароли не совпадают');
    return;
  }

  if (modalForm.checkValidity() === false) {
    alert('не соблюдены ограничения HTML');
    modalForm.reportValidity();
    return;
  }

  formData.createdOn  = new Date();
  user = formData;

  console.log(formData);
  modal.classList.remove('modal-showed');
});