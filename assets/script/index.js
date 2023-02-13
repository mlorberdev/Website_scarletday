import { intro } from "./intro.js";
import { login } from "./login.js";

intro();
document.getElementById("login").addEventListener("click", login);