import "../scss/styles.scss";
import regeneratorRuntime from "regenerator-runtime";


const title = document.getElementById("title")

const notSubmit = (event) => {
    event.preventDefault();
}

title.addEventListener("click",notSubmit)

console.log("hi");
