function scrollToBottom() {
  behavior: 'smooth';
  document.body.scrollTop = 5000; // For Safari
  document.documentElement.scrollTop = 5000; // For Chrome, Firefox, IE and Opera
}

function scrollToTop() {
  behavior: 'smooth';
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
