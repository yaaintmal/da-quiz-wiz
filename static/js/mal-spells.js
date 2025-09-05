function spellCast(spell) {
  switch (spell) {
    case 1:
      document.querySelector(".spell-one").style = "display: none";
      break;
    case 2:
      document.querySelector(".spell-two").style = "display: none";
      break;
    case 3:
      updateHealthBar(-25);
      document.querySelector(".spell-three").style = "display: none";
      break;
    default:
    // do nothing
  }
}
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("spell-one")) {
    spellCast(1);
  } else if (event.target.classList.contains("spell-two")) {
    spellCast(2);
  } else if (event.target.classList.contains("spell-three")) {
    spellCast(3);
  }
});
export { spellCast };
