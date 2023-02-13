export function intro() {

  setTimeout(() => {
    let phrase = ["catch up","stay on track","make waves","SCARLET DAY"];
    let N = 0;
    let int = setInterval(() => {
      document.getElementById("name").innerHTML = phrase[N].toUpperCase();
      N === phrase.length - 1 ? clearInterval(int) : N++;
    }, 1200);
  }, 100);
}