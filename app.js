let yesOrNoQuestion = document.getElementById('yes-or-no-question');

function randomYesOrNo(e) {
  e.preventDefault();
  const trueOrFalse = Math.floor(Math.random() * 2);
  if (trueOrFalse === 1) {
    yesOrNoQuestion.innerHTML = 'Yes';
  } else {
    yesOrNoQuestion.innerHTML = 'No';
  }
}
