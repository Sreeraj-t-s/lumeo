
// like button javascript start

function toggleLike(el) {
  const countEl = el.querySelector('.count');
  let count = parseInt(countEl.innerText);

  if (el.classList.contains('liked')) {
    count--;
    el.classList.remove('liked'); // 👈 removes red
  } else {
    count++;
    el.classList.add('liked'); // 👈 keeps red
  }

  countEl.innerText = count;
}

// like button javascript end


// save button javascript start

function toggleSave(element) {
  if (element.classList.contains("saved")) {
    element.classList.remove("saved");
  } else {
    element.classList.add("saved");
  }
}

// save button javascript end 






// comment javascript start

function addComment(button) {
  let section = button.parentElement;
  let input = section.querySelector(".comment-input");
  let commentBox = section.querySelector(".comments");

  if (input.value.trim() === "") return;

  let comment = document.createElement("p");
  comment.innerText = input.value;

  commentBox.appendChild(comment);
  input.value = "";
}

//  comment javascript end