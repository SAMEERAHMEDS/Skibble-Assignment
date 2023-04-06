// const toggles = document.querySelectorAll(".toggle");

// toggles.forEach((toggle) => {
//   toggle.addEventListener("click", () => {
//     toggle.parentNode.classList.toggle("active");
//   });
// });

// const questions = document.querySelectorAll(".question");

// questions.forEach(function (question) {
//   const btn = question.querySelector(".toggle");
//   //console.log(btn);

//   btn.addEventListener("click", function () {
//     //console.log(question);

//     questions.forEach(function (item) {
//       if (item !== question) {
//         item.classList.remove("show-text");
//       }
//     });

//     question.classList.toggle("show-text");
//   });
// });

const faqs = document.querySelectorAll(".question");

faqs.forEach((question) => {
  const button = question.querySelector(".toggle");

  button.addEventListener("click", () => {
    faqs.forEach((ele) => {
      if (ele !== question) {
        ele.classList.remove("show");
      }
    });

    question.classList.toggle("show");
  });
});
