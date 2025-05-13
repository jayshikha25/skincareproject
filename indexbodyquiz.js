// const questions = document.querySelectorAll('.question');
// const nextButtons = document.querySelectorAll('.next-btn');
// const completeScreen = document.querySelector('.complete-screen');

// const responses = {};

// // Handle option selection
// document.querySelectorAll('.option').forEach(option => {
//   option.addEventListener('click', () => {
//     const parent = option.parentElement;
//     parent.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
//     option.classList.add('selected');
//   });
// });

// // Handle next buttons
// nextButtons.forEach((btn, index) => {
//   btn.addEventListener('click', async () => {
//     const currentQuestion = questions[index];
//     const key = currentQuestion.dataset.question;
//     const selectedOption = currentQuestion.querySelector('.option.selected');
    
//     if (!selectedOption) {
//       alert("Please select an option to continue.");
//       return;
//     }

//     responses[key] = selectedOption.textContent;

//     currentQuestion.classList.remove('active');
//     if (index < questions.length - 1) {
//       questions[index + 1].classList.add('active');
//     } else {
//       completeScreen.classList.add('active');
      
      
//     }
//   });
// });


document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question");
  const nextButtons = document.querySelectorAll(".next-btn");
  const completeScreen = document.querySelector(".complete-screen");

  let currentQuestion = 0;
  let answers = {};

  nextButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const activeQuestion = questions[currentQuestion];
      const selectedOption = activeQuestion.querySelector(".option.selected");

      if (!selectedOption) {
        alert("Please select an option before proceeding.");
        return;
      }

      // Store answer
      const questionKey = activeQuestion.dataset.question;
      answers[questionKey] = selectedOption.textContent;

      // Hide current question and move to next
      activeQuestion.classList.remove("active");
      currentQuestion++;

      if (currentQuestion < questions.length) {
        questions[currentQuestion].classList.add("active");
      } else {
        sendAnswersToAPI(answers);  // Send data to API after last question
      }
    });
  });

  // Select option logic
  document.querySelectorAll(".option").forEach(option => {
    option.addEventListener("click", () => {
      option.parentElement.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
      option.classList.add("selected");
    });
  });

  // Send answers to API
  function sendAnswersToAPI(data) {
    fetch("https://api.skincareai.com/recommendations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_API_KEY"  // Add your API Key here
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => {
      displayResults(response);  // Show results
    })
    .catch(err => {
      completeScreen.innerHTML = `<p>There was an error getting your recommendations. Please try again later.</p>`;
      completeScreen.style.display = "block";
      console.error("API error:", err);
    });
  }

  // Display the API response
  function displayResults(response) {
    completeScreen.innerHTML = `
      <h2>🎉 Here are your personalized body care recommendations!</h2>
      <h3>Recommended Products:</h3>
      <ul>${response.recommended_products.map(p => `<li>${p}</li>`).join("")}</ul>
      <h3>Your Skincare Routine:</h3>
      <ul>${response.routine.map(step => `<li>${step}</li>`).join("")}</ul>
    `;
    completeScreen.style.display = "block";
  }
});