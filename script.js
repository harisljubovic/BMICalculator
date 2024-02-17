function calculateBMI() {
  let weightInput = document.getElementById("weight-input");
  let heightInput = document.getElementById("height-input");
  let resultDiv = document.getElementById("bmi_result");

  let height = parseInt(heightInput.value);
  let weight = parseInt(weightInput.value);

  if (isNaN(height) || isNaN(weight)) {
    resultDiv.innerHTML = "Please enter valid height and weight!";
    return;
  }

  let bmi = weight / (height / 100) ** 2;
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
    resultDiv.style.backgroundColor = "blue";
    resultDiv.style.color = "white";
  } else if (bmi < 25) {
    category = "Normal Weight";
    resultDiv.style.backgroundColor = "green";
  } else if (bmi < 30) {
    category = "Overweight";
    resultDiv.style.backgroundColor = "red";
    resultDiv.style.color = "white";
  } else {
    category = "Obese";
    resultDiv.style.backgroundColor = "red";
    resultDiv.style.color = "white";
  }

  resultDiv.innerHTML = "Your BMI is " + bmi.toFixed(2) + " (" + category + ")";
}
