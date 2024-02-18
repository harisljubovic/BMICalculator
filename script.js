function calculateBMI() {
  let weightInput = document.getElementById("weight-input");
  let heightInput = document.getElementById("height-input");
  let resultDiv = document.getElementById("bmi_result");
  let adviceSection = document.getElementById("description-p");
  let adviceHeading = document.getElementById("description-h3");

  let height = parseInt(heightInput.value);
  let weight = parseInt(weightInput.value);

  if (isNaN(height) || isNaN(weight)) {
    resultDiv.innerHTML = "Please enter valid height and weight!";

    return;
  }

  let bmi = weight / (height / 100) ** 2;
  let category = "";
  let advice = "";
  let adviceHead = "";

  if (bmi < 18.5) {
    category = "Underweight";
    resultDiv.style.backgroundColor = "blue";
    resultDiv.style.color = "white";
    adviceHead = "Potentional risks:";
    advice =
      "Compromised immune function, respiratory disease, digestive disease, cancer, osteoporosis. Please, consult your doctor !";
    adviceSection.classList.add("description-blue");
  } else if (bmi < 25) {
    category = "Normal Weight";
    resultDiv.style.backgroundColor = "green";
    adviceHead = "Congratulations !";
    advice = "Your BMI is great, keep it up!";
    adviceSection.classList.add("description-green");
  } else if (bmi < 30) {
    category = "Overweight";
    resultDiv.style.backgroundColor = "red";
    resultDiv.style.color = "white";
    adviceHead = "Potentional risks:";
    advice =
      "Cardiovascular disease, gallbladder disease, high blood pressure, type 2 diabetes, osteoarthritis, depression. Please, consult your doctor !";
    adviceSection.classList.add("description-red");
  } else {
    category = "Obese";
    resultDiv.style.backgroundColor = "red";
    resultDiv.style.color = "white";
    adviceHead = "Potentional risks:";
    advice =
      "Cardiovascular disease, gallbladder disease, high blood pressure, type 2 diabetes, osteoarthritis, depression. Please, consult your doctor !";
    adviceSection.classList.add("description-red");
  }

  resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)} ${category}`;
  adviceSection.innerHTML = advice;
  adviceHeading.innerHTML = adviceHead;
}
