// const re=/abc/;
// console.log(re.test("hello abc"));
// console.log(re.exec("hello abcd"));


// const phoneNo=/\d{3}-\d{3}-\d{4}$/;
// console.log(phoneNo.test("123-345-5678"))

const form=document.querySelector("#form");
const input = document.querySelector("#phone");
const output = document.querySelector("#output");

const re=/^(?:\d{3}\|\(d{3}))([-/.])\d{3}\1\d{4}$/;
function testInfo(phoneInput){
    const ok=re.test(phoneInput);
      output.textContent = ok
    ? `Thanks, your phone number is ${ok[0]}`
    : `${phoneInput.value} isn't a phone number with area code!`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  testInfo(input);
});
