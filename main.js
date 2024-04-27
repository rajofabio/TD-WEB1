const mot = [
  "azerty",
  "qwerty",
  "internet",
  "code",
  "Java",
  "html",
  "python",
  "javascript",
  "React",
  "typescript",
  "psql",
];
let score = 0;

function tocheck() {
  const input = document.getElementById("textInput").value.trim();
  const type = document.getElementById("word").textContent.trim();

  if (input === type) {
    score++;
    document.getElementById("score").textContent = score;
    let index = Math.floor(Math.random() * mot.length);
    document.getElementById("word").textContent = mot[index];

    document.getElementById("textInput").value = "";
  } else {
    alert(" GAME OVER !!!!! essaye encore");
  }
}
document.getElementById("button").addEventListener("click", tocheck);
