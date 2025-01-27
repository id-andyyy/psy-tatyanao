function web3form() {
  const formNode = document.querySelector("#form");
  const resultNode = document.querySelector("#formResult");
  const submitButtonNode = document.querySelector("#formSubmit");

  formNode.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(formNode);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    submitButtonNode.classList.add("none");
    resultNode.innerHTML = "Отправка...";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        if (response.status == 200) {
          resultNode.innerHTML = "Заявка успешно отправлена!";
        } else {
          console.log(response);
          resultNode.innerHTML =
            "Что-то не работает... Попробуйте воспользоваться контактами для связи.";
        }
      })
      .catch((error) => {
        console.log(error);
        resultNode.innerHTML =
          "Что-то не работает... Попробуйте воспользоваться контактами для связи.";
      });
  });
}

export default web3form;
