const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const convertButton = document.getElementById('convertButton');
const convertedTempDisplay = document.getElementById('convertedTemp');

convertButton.addEventListener('click', function() {
  const temperature = parseFloat(temperatureInput.value);
  if (!isNaN(temperature)) {
    const unit = unitSelect.value;
    let convertedTemp;
    if (unit === 'celsius') {
      convertedTemp = (temperature * 9/5) + 32;
      convertedTempDisplay.textContent = `${convertedTemp.toFixed(2)} °F`;
    } else {
      convertedTemp = (temperature - 32) * 5/9;
      convertedTempDisplay.textContent = `${convertedTemp.toFixed(2)} °C`;
    }
  } else {
    convertedTempDisplay.textContent = "Please enter a valid number";
  }
});
