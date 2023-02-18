const container = document.querySelector('.wrapper');

container.addEventListener('click', event => {
  if (event.target.classList.contains('question')) {
    const question = event.target;
    const answer = question.nextElementSibling;

    question.classList.toggle('active');

    if (question.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = 0;
    }
  }
});
