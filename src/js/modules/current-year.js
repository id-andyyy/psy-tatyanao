function currentYear() {
  document.querySelector('#year').textContent = new Date().getFullYear();
}

export default currentYear;