document.querySelector(".convert-btn").addEventListener("click", function () {
  let fahrenheitTemp = document.getElementById("form-input").value;
  fahrenheitTemp = parseInt(fahrenheitTemp);

  document.getElementById("output").textContent = (
    ((fahrenheitTemp - 32) * 5) /
    9
  ).toFixed(2);
});
