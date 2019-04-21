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

function glowUpTapety() {
  document.getElementById('tapetyText').style.textShadow =
    '1px 0px 20px white,1px 0px 20px white';
}

function glowUpObrazy() {
  document.getElementById('obrazyText').style.textShadow =
    '1px 0px 20px white,1px 0px 20px white';
}

function glowUpCennik() {
  document.getElementById('cennikText').style.textShadow =
    '1px 0px 20px white,1px 0px 20px white';
}

function glowUpObjednat() {
  document.getElementById('objednatText').style.textShadow =
    '1px 0px 20px white,1px 0px 20px white';
}

function glowUpPortfolio() {
  document.getElementById('portfolioText').style.textShadow =
    '1px 0px 20px white,1px 0px 20px white';
}

function stopGlowingTapety() {
  document.getElementById('tapetyText').style.textShadow =
    '0px 0px 0px white,0px 0px 0px white';
}

function stopGlowingObrazy() {
  document.getElementById('obrazyText').style.textShadow =
    '0px 0px 0px white,0px 0px 0px white';
}

function stopGlowingCennik() {
  document.getElementById('cennikText').style.textShadow =
    '0px 0px 0px white,0px 0px 0px white';
}

function stopGlowingObjednat() {
  document.getElementById('objednatText').style.textShadow =
    '0px 0px 0px white,0px 0px 0px white';
}

function stopGlowingPortfolio() {
  document.getElementById('portfolioText').style.textShadow =
    '0px 0px 0px white,0px 0px 0px white';
}
