document.getElementById("register").onsubmit = function () {
  let Input = document.getElementById("email").value;
  let tre = /(https?:\/\/)?(www.)?\w+(\d{1,})?@?\w+.\w+/gi;
  let validationResult = tre.test(Input);
  if (validationResult === false) {
    document.getElementById("email-error").style.cssText = "display:block;";
    document.getElementById("email").style.cssText = "border: solid red 2px;";
  }
  if (validationResult === false) {
    return false;
  }
  return true;
};
