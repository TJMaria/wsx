function sayHi() {
    const resultDiv = document.getElementById("text");
    resultDiv.innerHTML = "";
    const tipResult = document.createElement("p");
    resultDiv.appendChild(tipResult);
    tipResult.innerHTML = "Hello world! This is a sad excuse for a website, but im hoping to change that soon!";
}


