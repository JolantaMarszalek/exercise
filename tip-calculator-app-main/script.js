// const inputBill = document.querySelector("#input_bill");
// inputBill.addEventListener("change", (event) => {});

function calculate() {
    const inputBill = document.querySelector("input_bill").value;
    const inputPeople = document.querySelector("nput_number_of_people").value;
    const results = Number(inputBill) * Number(inputPeople);
    document.querySelector("result_total").innerHTML = "$ " + results;
  }
  calculate();
  
  // document.forms.
  
  // ---- Button Reset
  
  const startPrice = () => {
    let priceValue = 0;
  };
  
  const resetButton = document.querySelector("#reset");
  resetButton.addEventListener("click", () => startPrice());
  