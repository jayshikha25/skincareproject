const questions = document.querySelectorAll('.question');
const nextButtons = document.querySelectorAll('.next-btn');
const completeScreen = document.querySelector('.complete-screen');

nextButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    questions[index].classList.remove('active');
    if (index < questions.length - 1) {
      questions[index + 1].classList.add('active');
    } else {
      completeScreen.classList.add('active');
    }
  });
});
