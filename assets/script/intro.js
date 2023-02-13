export function intro() {

  setTimeout(() => {
    document.getElementById("login").style.filter = "opacity(1)";
    let phrase = ["catch up","stay on track","make waves","SCARLET DAY"]; console.log(phrase);
    let N = 0;
    let int = setInterval(() => {
      document.getElementById("name").innerHTML = phrase[N].toUpperCase();
      N === phrase.length - 1 ? clearInterval(int) : N++;
    }, 1200);
  }, 100);
}