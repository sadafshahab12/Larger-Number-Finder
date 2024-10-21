function findInt() {
  const int1 = parseInt(document.getElementById("int1").value);
  const int2 = parseInt(document.getElementById("int2").value);
  const resultDiv = document.querySelector(".result");

  if (int1 === int2) {
    resultDiv.classList.add("display");
    resultDiv.innerHTML = `First integer is equal to Second integer.`;
  } else if (int1 > int2) {
    resultDiv.classList.add("display");
    resultDiv.innerHTML = `First integer is larger than Second integer.`;
  } else {
    resultDiv.classList.add("display");
    resultDiv.innerHTML = `Second integer is larger than First integer.`;
  }
}
