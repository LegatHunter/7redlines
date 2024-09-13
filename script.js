const buttons = document.querySelectorAll('.btn');
const boxes = document.querySelectorAll('.box1, .box2');

let position = {};

buttons.forEach(btn => {
  position[btn.id] = {
    parent: btn.parentElement,
    index: Array.from(btn.parentElement.children).indexOf(btn)
  };

  btn.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  });
});


boxes.forEach(box => {
  box.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  box.addEventListener('drop', (e) => {
    e.preventDefault();
    const btnId = e.dataTransfer.getData('text/plain');
    const dragBtn = document.getElementById(btnId);

    let targetBox = e.target;
    while (targetBox && !targetBox.classList.contains('box1') && !targetBox.classList.contains('box2')) {
      targetBox = targetBox.parentElement;
    }

    const { index } = position[btnId];

    if (targetBox !== dragBtn.parentElement) {
      dragBtn.parentElement.removeChild(dragBtn);
    }

    const referenceNode = targetBox.children[index] || null;
    targetBox.insertBefore(dragBtn, referenceNode);
  });
});
