document.addEventListener("DOMContentLoaded", function () {
  const inputBill = document.querySelector(".input_bill");
  const inputNumberOfPeople = document.querySelector(".input_number_of_people");
  const resultTotal = document.querySelector(".result_total");
  const resultTipAmount = document.querySelector(".result_tip_amount");
  const resetButton = document.querySelector(".button_reset");

  function calculate() {
    const billAmount = parseFloat(inputBill.value);
    const numberOfPeople = parseFloat(inputNumberOfPeople.value);

    const selectedTipPercentage = getSelectedTipPercentage();

    const tipAmount = (billAmount * selectedTipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;
    const totalPerPerson = totalAmount / numberOfPeople;

    resultTipAmount.innerText = "$" + tipAmount.toFixed(2);
    resultTotal.innerText = "$" + totalPerPerson.toFixed(2);
  }

  //   const startPrice = () => {
  //     let priceValue = 0;
  //   };

  function getSelectedTipPercentage() {
    const buttons = document.querySelectorAll(
      ".container_button_first div, .container_button_second div"
    );
    for (const button of buttons) {
      if (button.classList.contains("selected")) {
        return parseFloat(button.textContent);
      }
    }
    return 0;
  }

  resetButton.addEventListener("click", () => {
    inputBill.value = "";
    inputNumberOfPeople.value = "";
    resultTipAmount.innerText = "$0.00";
    resultTotal.innerText = "$0.00";
    clearSelectedTipButtons();
  });

  const tipButtons = document.querySelectorAll(
    ".container_button_first div, .container_button_second div"
  );
  tipButtons.forEach((button) => {
    button.addEventListener("click", () => {
      clearSelectedTipButtons();
      button.classList.add("selected");
      calculate();
    });
  });

  function clearSelectedTipButtons() {
    tipButtons.forEach((button) => {
      button.classList.remove("selected");
    });
  }
});
