document.addEventListener('focusin', function(e) {
  // Check if the focused element is LinkedIn's message box (adapt selector as needed)
  if (e.target.classList.contains('msg-form__contenteditable')) {
      const field = e.target;

      // Similar button creation logic
      const magicButton = document.createElement('button');
      magicButton.textContent = "Magic Stick";

      // Log input field's bounding rectangle
      console.log('Field Bounding Rect:', field.getBoundingClientRect());

      // Adjust button position
      const rect = field.getBoundingClientRect();
      magicButton.style.position = "absolute";
      magicButton.style.left = `${rect.right + 10}px`;
      magicButton.style.top = `${rect.top + window.scrollY}px`;
      magicButton.style.zIndex = "1000";
      magicButton.style.cursor = "pointer";
      magicButton.style.backgroundColor = "#f39c12";
      magicButton.style.border = "none";
      magicButton.style.borderRadius = "50%";
      magicButton.style.padding = "10px";

      // Append button to the document body
      document.body.appendChild(magicButton);
      console.log('Magic button appended:', document.body.contains(magicButton));

      // Remove the button when the input field is blurred
      field.addEventListener('blur', () => {
          setTimeout(() => {
              magicButton.remove();
              console.log('Magic button removed');
          }, 500); // Slight delay for debugging
      });

      // Add event listener to the button
      magicButton.addEventListener('click', () => {
          alert('Magic Stick Activated');
          console.log('Magic button clicked');
      });
  }
});

// Listen for DOM changes (useful for LinkedIn's dynamically loaded elements)
const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
      if (document.querySelector('.msg-form__contenteditable')) {
          console.log("LinkedIn message box detected!");
          // You can trigger the focus logic here if needed
      }
  });
});

observer.observe(document.body, { childList: true, subtree: true });
