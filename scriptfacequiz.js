// // const questions = document.querySelectorAll('.question');
// // const nextButtons = document.querySelectorAll('.next-btn');
// // const completeScreen = document.querySelector('.complete-screen');

// // const responses = {};

// // // Handle option selection
// // document.querySelectorAll('.option').forEach(option => {
// //   option.addEventListener('click', () => {
// //     const parent = option.parentElement;
// //     parent.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
// //     option.classList.add('selected');
// //   });
// // });

// // // Handle next buttons
// // nextButtons.forEach((btn, index) => {
// //   btn.addEventListener('click', async () => {
// //     const currentQuestion = questions[index];
// //     const key = currentQuestion.dataset.question;
// //     const selectedOption = currentQuestion.querySelector('.option.selected');
    
// //     if (!selectedOption) {
// //       alert("Please select an option to continue.");
// //       return;
// //     }

// //     responses[key] = selectedOption.textContent;

// //     currentQuestion.classList.remove('active');
// //     if (index < questions.length - 1) {
// //       questions[index + 1].classList.add('active');
// //     } else {
// //       completeScreen.classList.add('active');
      
      
// //     }
// //   });
// // });
// document.addEventListener("DOMContentLoaded", () => {
//   const questions = document.querySelectorAll(".question");
//   const nextButtons = document.querySelectorAll(".next-btn");
//   const completeScreen = document.querySelector(".complete-screen");

//   let currentQuestion = 0;
//   let answers = {};

//   nextButtons.forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//       const activeQuestion = questions[currentQuestion];
//       const selectedOption = activeQuestion.querySelector(".option.selected");

//       if (!selectedOption) {
//         alert("Please select an option before proceeding.");
//         return;
//       }

//       // Store answer
//       const questionKey = activeQuestion.dataset.question;
//       answers[questionKey] = selectedOption.textContent;

//       // Hide current question and move to next
//       activeQuestion.classList.remove("active");
//       currentQuestion++;

//       if (currentQuestion < questions.length) {
//         questions[currentQuestion].classList.add("active");
//       } else {
//         sendAnswersToAPI(answers);  // Send data to API after last question
//       }
//     });
//   });

//   // Select option logic
//   document.querySelectorAll(".option").forEach(option => {
//     option.addEventListener("click", () => {
//       option.parentElement.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
//       option.classList.add("selected");
//     });
//   });

//   // Send answers to API
//   function sendAnswersToAPI(data) {
//     fetch("https://api.skincareai.com/recommendations", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": "Bearer YOUR_API_KEY"  // Add your API Key here
//       },
//       body: JSON.stringify(data)
//     })
//     .then(res => res.json())
//     .then(response => {
//       displayResults(response);  // Show results
//     })
//     .catch(err => {
//       completeScreen.innerHTML = `<p>There was an error getting your recommendations. Please try again later.</p>`;
//       completeScreen.style.display = "block";
//       console.error("API error:", err);
//     });
//   }

//   // Display the API response
//   function displayResults(response) {
//     completeScreen.innerHTML = `
//       <h2>🎉 Here are your personalized recommendations!</h2>
//       <h3>Recommended Products:</h3>
//       <ul>${response.recommended_products.map(p => `<li>${p}</li>`).join("")}</ul>
//       <h3>Your Skincare Routine:</h3>
//       <ul>${response.routine.map(step => `<li>${step}</li>`).join("")}</ul>
//     `;
//     completeScreen.style.display = "block";
//   }
// });

// Store user's answers
// let userAnswers = {
//   skinGoals: null,
//   skinType: null,
//   skincareFrequency: null,
//   skinConcerns: null,
//   productPreference: null
// };

// // Elements
// const questions = document.querySelectorAll('.question');
// const nextBtns = document.querySelectorAll('.next-btn');
// const productRecommendations = document.getElementById('productRecommendations');
// const completeScreen = document.querySelector('.complete-screen');

// // Event Listener for Next buttons
// nextBtns.forEach((btn) => {
//   btn.addEventListener('click', () => {
//       const currentQuestion = btn.closest('.question');
//       const questionId = currentQuestion.getAttribute('data-question');
//       const selectedOption = currentQuestion.querySelector('.option.selected');

//       if (!selectedOption) {
//           alert('Please select an option!');
//           return;
//       }

//       // Save user answer
//       userAnswers[questionId] = selectedOption.getAttribute('data-option');

//       // Move to next question
//       currentQuestion.classList.remove('active');
//       const nextQuestion = currentQuestion.nextElementSibling;
//       if (nextQuestion) {
//           nextQuestion.classList.add('active');
//       } else {
//           // All questions done, show recommendations
//           showRecommendations();
//       }
//   });
// });

// // Option Selection
// document.querySelectorAll('.option').forEach((option) => {
//   option.addEventListener('click', () => {
//       option.parentElement.querySelectorAll('.option').forEach((opt) => {
//           opt.classList.remove('selected');
//       });
//       option.classList.add('selected');
//   });
// });

// // Fetch product recommendations based on user answers
// function showRecommendations() {
//   const queryParams = {
//       skinGoals: userAnswers.skinGoals,
//       skinType: userAnswers.skinType,
//       skincareFrequency: userAnswers.skincareFrequency,
//       skinConcerns: userAnswers.skinConcerns,
//       productPreference: userAnswers.productPreference
//   };

//   // Call Skincare API with query parameters
//   fetchProductRecommendations(queryParams);
// }

// // Function to interact with Skincare API
// function fetchProductRecommendations(answers) {
//   const apiUrl = 'https://skincare-api.herokuapp.com/products'; // API URL
//   const query = `?goal=${answers.skinGoals}&type=${answers.skinType}&frequency=${answers.skincareFrequency}&concern=${answers.skinConcerns}&preference=${answers.productPreference}`;

//   fetch(apiUrl + query)
//       .then((response) => response.json())
//       .then((data) => {
//           displayProducts(data);
//       })
//       .catch((error) => {
//           console.error('Error fetching product recommendations:', error);
//           productRecommendations.innerHTML = 'Sorry, we couldn\'t fetch recommendations at this time.';
//       });
// }

// // Display the recommended products
// function displayProducts(products) {
//   if (products.length > 0) {
//       let productHTML = '<h3>Recommended Products:</h3>';
//       products.forEach((product) => {
//           productHTML += `<div><h4>${product.name}</h4><p>${product.description}</p><p><strong>Price:</strong> ${product.price}</p></div>`;
//       });
//       productRecommendations.innerHTML = productHTML;
//   } else {
//       productRecommendations.innerHTML = 'No products found matching your criteria.';
//   }

//   completeScreen.style.display = 'block';
// }



// const productRecommendations = document.getElementById('productRecommendations');
// const completeScreen = document.getElementById('completeScreen');
// const nextBtn = document.querySelectorAll('.next-btn');

// const answers = {};

// nextBtn.forEach((btn) => {
//   btn.addEventListener('click', function() {
//     const currentQuestion = btn.closest('.question');
//     const questionId = currentQuestion.getAttribute('data-question');
//     const selectedOption = currentQuestion.querySelector('.option.selected');
//     if (selectedOption) {
//       answers[questionId] = selectedOption.textContent.trim();
//       currentQuestion.classList.remove('active');
//       const nextQuestion = currentQuestion.nextElementSibling;
//       if (nextQuestion) {
//         nextQuestion.classList.add('active');
//       } else {
//         fetchProductRecommendations(answers);
//       }
//     }
//   });
// });

// function fetchProductRecommendations(answers) {
//     const apiUrl = 'https://skincare-routine-api.p.rapidapi.com/routine'; // Change with actual API URL
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // Use your RapidAPI Key here
//             'X-RapidAPI-Host': 'skincare-routine-api.p.rapidapi.com'
//         },
//         body: JSON.stringify({
//             skinGoals: answers.skinGoals,
//             skinType: answers.skinType,
//             skincareFrequency: answers.skincareFrequency,
//             skinConcerns: answers.skinConcerns,
//             productPreference: answers.productPreference
//         })
//     };

//     fetch(apiUrl, options)
//         .then(response => response.json())
//         .then(data => {
//             console.log('API Response:', data);
//             displayProducts(data);
//         })
//         .catch(error => {
//             console.error('Error fetching product recommendations:', error);
//             productRecommendations.innerHTML = 'Sorry, we couldn’t fetch recommendations at this time.';
//         });
// }

// function displayProducts(data) {
//     if (data && data.products && data.products.length > 0) {
//         let productHTML = '<h3>Recommended Products:</h3>';
//         data.products.forEach((product) => {
//             productHTML += `
//                 <div>
//                     <h4>${product.name}</h4>
//                     <p>${product.description}</p>
//                     <p><strong>Price:</strong> ${product.price}</p>
//                 </div>
//             `;
//         });
//         productRecommendations.innerHTML = productHTML;
//     } else {
//         productRecommendations.innerHTML = 'No products found matching your criteria.';
//     }

//     completeScreen.style.display = 'block';
// }


// const productRecommendations = document.getElementById('productRecommendations');
// const completeScreen = document.querySelector('.complete-screen');
// const nextBtn = document.querySelectorAll('.next-btn');
// const questions = document.querySelectorAll('.question');
// const answers = {};

// nextBtn.forEach((btn) => {
//   btn.addEventListener('click', function() {
//     const currentQuestion = btn.closest('.question');
//     const questionId = currentQuestion.textContent.trim();
//     const selectedOption = currentQuestion.querySelector('.option.selected');
//     if (selectedOption) {
//       answers[questionId] = selectedOption.textContent.trim();
//       currentQuestion.classList.remove('active');
//       const nextQuestion = currentQuestion.nextElementSibling;
//       if (nextQuestion) {
//         nextQuestion.classList.add('active');
//       } else {
//         fetchProductRecommendations(answers);
//       }
//     }
//   });
// });

// document.querySelectorAll('.option').forEach(option => {
//     option.addEventListener('click', function() {
//       const parent = this.parentElement;
//       parent.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
//         this.classList.add('selected');
//     });
// });

// function fetchProductRecommendations(answers) {
//     const apiUrl = 'https://skincare-api.p.rapidapi.com/skincare '; // Change with actual API URL
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-RapidAPI-Key': 'aff4c69d03msh988e59763155012p1b406djsn74b9cdb665ca', // Use your RapidAPI Key here
//             'X-RapidAPI-Host': 'skincare-api.p.rapidapi.com'
//         },
//         body: JSON.stringify({
//             skinGoals: answers.skin_goals,
//             skinType: answers.skin_type,
//             skincareFrequency: answers.skincare_frequency,
//             skinConcerns: answers.skin_concerns,
//             productPreference: answers.product_preference
//         })
//     };

//     fetch(apiUrl, options)
//         .then(response => response.json())
//         .then(data => {
//             console.log('API Response:', data);
//             displayProducts(data);
//         })
//         .catch(error => {
//             console.error('Error fetching product recommendations:', error);
//             productRecommendations.innerHTML = 'Sorry, we couldn’t fetch recommendations at this time.';
//         });
// }

// function displayProducts(data) {
//     if (data && data.products && data.products.length > 0) {
//       console.log("API Response:", data);
//         let productHTML = '<h3>Recommended Products:</h3>';
//         data.forEach((product) => {
//             productHTML += `
//                 <div>
//                     <h4>${product.name}</h4>
//                     <p>${product.description}</p>
//                     <p><strong>Price:</strong> ${product.price}</p>
//                 </div>
//             `;
//         });
//         productRecommendations.innerHTML = productHTML;
//         completeScreen.style.display = 'block';
//     } else {
//         productRecommendations.innerHTML = 'No products found matching your criteria.';
//     }

   
// }

document.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', function () {
    const parent = this.parentElement;
    parent.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    this.classList.add('selected');
  });
});

const answers = {};
document.querySelectorAll('.next-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const currentQuestion = btn.closest('.question');
    const questionId = currentQuestion.getAttribute('data-question');
    const selectedOption = currentQuestion.querySelector('.option.selected');
    if (!selectedOption) {
      alert('Please select an option.');
      return;
    }

    answers[questionId] = selectedOption.textContent.trim();
    currentQuestion.classList.remove('active');
    const nextQuestion = currentQuestion.nextElementSibling;
    if (nextQuestion) {
      nextQuestion.classList.add('active');
    } else {
      fetchProductRecommendations(answers);
    }
  });
});



  function fetchProductRecommendations(answers) {
    const productRecommendations = document.getElementById('productRecommendations');
    const completeScreen = document.querySelector('.complete-screen');
  }
    const apiUrl = 'https://skincare-treatment-london.p.rapidapi.com/ '; // Ensure this is correct
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': 'aff4c69d03msh988e59763155012p1b406djsn74b9cdb665ca',
            'X-RapidAPI-Host': 'skincare-treatment-london.p.rapidapi.com'
        },
        body: JSON.stringify(answers)
    };
  
    fetch(apiUrl, options)
        .then(response => response.json())
        .then(data => {
            console.log('API Response:', data);
            displayProducts(data);
        })
        .catch(error => {
            console.error('Error fetching product recommendations:', error);
            productRecommendations.innerHTML = 'Sorry, we couldn’t fetch recommendations at this time.';
        });
  
  