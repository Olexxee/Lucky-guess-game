const displayMatchedNum = document.getElementById("match-numbers");

// Event listener for the Play button
document.getElementById("playButton").addEventListener("click", () => {
  // Step 1: Get user inputs
  const userNumbers = [
    parseInt(document.getElementById("num1").value),
    parseInt(document.getElementById("num2").value),
    parseInt(document.getElementById("num3").value),
  ];

  // Validate inputs
  if (userNumbers.some((num) => isNaN(num) || num < 0 || num > 50)) {
    document.getElementById("result").innerText =
      "Please enter valid numbers between 0 and 50.";
    return;
  }

  // Step 2: Generate 25 random numbers
  const randomNumbers = [];
  for (let i = 0; i < 25; i++) {
    randomNumbers.push(Math.floor(Math.random() * 51)); // Generates a number from 0 to 50
  }

  // Display the generated numbers dynamically in a specific element
  const displayGenNum = document.getElementById("generated-numbers");
  displayGenNum.innerHTML = randomNumbers.join(", ");

  // Step 3: Check if user numbers are in the random numbers
  const matchedNumbers = userNumbers.filter((num) =>
    randomNumbers.includes(num)
  );

  // Step 4: Display results
  document.getElementById(
    "result"
  ).innerHTML = `Random Numbers: ${randomNumbers.join(", ")}`;

  document.getElementById(
    "user-number"
  ).innerHTML = `Your Numbers: ${userNumbers.join(", ")}`;

  document.getElementById(
    "match-numbers"
  ).innerHTML = `Matched Numbers: ${matchedNumbers.join(", ")}`;

  document.getElementById("win").innerHTML = `${
    matchedNumbers.length === 3
      ? "Congratulations! You won!"
      : "Sorry, you lost!"
  }`;
});
