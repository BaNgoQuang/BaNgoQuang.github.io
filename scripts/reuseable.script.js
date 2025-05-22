let getRandomNumber = (start, end) => {
  let randomNumber = Math.random() * (end - start) + start;
  return Math.round(randomNumber)
}


// function fadeTypingAnimation(element, text, speed = 150) {
//   element.innerHTML = ''; // Clear previous content
//   let i = 0;

//   function type() {
//     if (i < text.length) {
//       let span = document.createElement('span');

//       // Preserve spaces correctly
//       span.innerHTML = text[i] === ' ' ? '&nbsp;' : text[i];

//       span.classList.add('fade-letter');
//       element.appendChild(span);

//       // Add fade effect
//       setTimeout(() => {
//         span.style.opacity = 1;
//       }, 50);

//       i++;
//       setTimeout(type, speed);
//     } else {
//       element.style.borderRight = "none"; // Remove cursor effect
//     }
//   }

//   type();
// }


function fadeTypingAnimation(element, text, speed = 150) {
  element.innerHTML = ''; // Clear previous content
  let words = text.split(' '); // Split text into words
  let i = 0;
  let j = 0;

  function typeWord() {
    if (i < words.length) {
      let wordSpan = document.createElement('span'); // Wrap each word
      wordSpan.classList.add('fade-word');
      element.appendChild(wordSpan);

      function typeLetter() {
        if (j < words[i].length) {
          let letterSpan = document.createElement('span');
          letterSpan.classList.add('fade-letter');
          letterSpan.style.opacity = '0'; // Start hidden
          letterSpan.innerText = words[i][j]; // Add letter
          wordSpan.appendChild(letterSpan);

          setTimeout(() => {
            letterSpan.style.opacity = '1'; // Fade in
          }, 50);

          j++;
          setTimeout(typeLetter, speed);
        } else {
          j = 0; // Reset letter index for next word
          i++;
          wordSpan.innerHTML += '&nbsp;'; // Add space after word
          setTimeout(typeWord, speed); // Type next word
        }
      }

      typeLetter(); // Start typing the first letter of the word
    } else {
      element.style.borderRight = 'none'; // Remove cursor effect
    }
  }

  typeWord();
}