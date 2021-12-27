const theForm = document.querySelector("#signup-form");
const creditCard = document.querySelector("#cc");
const termsCheck = document.querySelector("#terms");
const veggieSelect = document.querySelector("#veggie");

theForm.addEventListener("submit", function(e) {
    alert("submited the form");
    console.log("cc", creditCard.value);
    console.log("terms", termsCheck.checked);
    console.log("veggieSelect", veggieSelect.value);
    e.preventDefault(); // for not refreshing the page
});
const formData = {};
// first way to do it
/*
creditCard.addEventListener("input", (e) => {
    console.log("CC Changed ", e);
    formData["cc"] = e.target.value;
});
veggieSelect.addEventListener("input", (e) => {
    console.log("veggie Changed ", e);
    formData["veggie"] = e.target.value;
});

termsCheck.addEventListener("input", (e) => {
    console.log("checkBox", e);
    formData["agreeToTerms"] = e.target.checked;
});
*/
for (let input of[creditCard, termsCheck, veggieSelect]) {
    input.addEventListener("input", ({ target }) => {
        // instead of using input we can use 'change' event
        // target = event.target
        console.log(target.name);
        const { name, type, value, checked } = target;
        formData[name] = type === "checkbox" ? checked : value;
        console.log(formData);
    });
}