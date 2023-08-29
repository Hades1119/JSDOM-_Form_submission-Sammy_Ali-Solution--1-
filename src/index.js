// function validateSearch(value) {
//   if (value === "") {
//     return false
//   }
//   return value && value.trim();
// }


// const submitHandler = (event) => {
//   event.preventDefault();
//   const form = event.target
//   const searchData = new FormData(form);
//   const term = searchData.get("searchTerm");
//   const errorDiv = document.createElement("div");
//   errorDiv.innerText = ""

//   if (validateSearch(term) === false) {
//     const errorDiv = document.createElement("div");
//     errorDiv.classList.add("#error");
//     errorDiv.setAttribute("id", "searchError");
//     errorDiv.innerText = "Please enter a search term";
//     form.appendChild(errorDiv);
//   };
// }

// const form = document.querySelector("#searchForm");
// form.addEventListener("submit", submitHandler);

let errors = {}
let errorPresent = false

const validate = (searchTerm) => {
    if (searchTerm.trim() === "") {
      errors.searchTerm = "Please enter a search term"
    }
};

const main = () => {
  const form = document.querySelector("#searchForm");
  form.addEventListener("submit", submitHandler);
};

const submitHandler = (event) => {
  event.preventDefault();
  const searchData = new FormData(event.target);
  const searchTerm = searchData.get("searchTerm")
  validate(searchTerm)
  const errorDiv = document.createElement("div")
  if (Object.keys(errors).length > 0 && errorPresent === false) {
    errorDiv.classList.add("error")
    errorDiv.setAttribute("id", "searchError");
    errorDiv.style.display = "block"
    errorDiv.textContent = errors.searchTerm
    event.target.appendChild(errorDiv)
    errorPresent = true
  }
};



window.addEventListener("DOMContentLoaded", main);