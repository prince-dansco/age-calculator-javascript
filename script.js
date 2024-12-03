const iconButton = document.querySelector(".icon");
const dayInputField = document.getElementById("day");
const monthInputField = document.getElementById("month");
const yearInputField = document.getElementById("year");

dayInputField.addEventListener("focus", () => {
  document.getElementById("dayError").textContent = "";
});

monthInputField.addEventListener("focus", () => {
  document.getElementById("monthError").textContent = "";
});

yearInputField.addEventListener("focus", () => {
  document.getElementById("yearError").textContent = "";
});

function formatMonthInput() {
  let monthValue = monthInputField.value;
  if (monthValue.length === 1) {
    monthInputField.value = "0" + monthValue;
  }
}
function formatDayInput() {
  let dayValue = dayInputField.value;
  if (dayValue.length === 1) {
    dayInputField.value = "0" + dayValue;
  }
}

monthInputField.addEventListener("blur", formatMonthInput);
dayInputField.addEventListener("blur", formatDayInput);

iconButton.addEventListener("click", () => {
  const daysInput = dayInputField.value;
  const monthsInput = monthInputField.value;
  const yearsInput = yearInputField.value;

  const yearOutput = document.getElementById("yearResult");
  const monthOutput = document.getElementById("monthResult");
  const dayOutput = document.getElementById("dayResult");
  const monthAdds = document.getElementById("monthAdds");
  const dayAdds = document.getElementById("dayAdds");

  const dayError = document.getElementById("dayError");
  const monthError = document.getElementById("monthError");
  const yearError = document.getElementById("yearError");

  let error = false;

  // Day validation
  if (daysInput === "") {
    dayError.textContent = "Field cannot be empty";
    dayError.style.color = "red";
    error = true;
  } else if (isNaN(daysInput)) {
    dayError.textContent = "Please input a number";
    error = true;
  } else if (daysInput > 31) {
    dayError.textContent = "Days cannot be more than 31";
    error = true;
  } else if (daysInput <= 0) {
    dayError.textContent = "Days must be a positive number";
    error = true;
  } else {
    dayError.textContent = "";
  }

  // Month validation
  if (monthsInput === "") {
    monthError.textContent = "Field cannot be empty";
    monthError.style.color = "red";
    error = true;
  } else if (isNaN(monthsInput)) {
    monthError.textContent = "Please input a number";
    error = true;
  } else if (monthsInput > 12) {
    monthError.textContent = "Months cannot be more than 12";
    error = true;
  } else if (monthsInput <= 0) {
    monthError.textContent = "Months must be a positive number";
    error = true;
  } else {
    monthError.textContent = "";
  }
  log

  // Year validation
  let currentYear = new Date().getFullYear();
  if (yearsInput === "") {
    yearError.textContent = "Field cannot be empty";
    yearError.style.color = "red";
    error = true;
  } else if (isNaN(yearsInput)) {
    yearError.textContent = "Please input a number";
    error = true;
  } else if (yearsInput > currentYear) {
    yearError.textContent = "Year cannot be in the future";
    error = true;
  } else {
    yearError.textContent = "";
  }

  // Stop further execution if there's an error
  if (error) return;

  let date = new Date();
  let currentDay = date.getDate();
  let currentMonth = date.getMonth() + 1;
  let day = currentDay - Number(daysInput);
  let month = currentMonth - Number(monthsInput);
  let year = currentYear - Number(yearsInput);

  if (day <= 0) {
    day += 30;
    month--;
  }

  if (month <= 0) {
    month += 12;
    year--;
  }

  // Update the output elements if the date is valid
  yearOutput.innerHTML = year;
  monthOutput.innerHTML = Math.abs(month);
  dayOutput.innerHTML = day;
  monthAdds.innerHTML = month === 1 ? "month" : "months";
  dayAdds.innerHTML = day === 1 ? "day" : "days";
  document.getElementById("yearAdds").innerHTML = year === 1 ? "year" : "years";

  // Clear input fields
  dayInputField.value = "";
  monthInputField.value = "";
  yearInputField.value = "";
});
