document.addEventListener("DOMContentLoaded", () => {
  console.log("js is processed");
});

let modal = document.getElementById("modal");

let modalOpen = document.getElementById("modal-open");
modalOpen.addEventListener("click", function () {
  modal.classList.add("active");
});

let modalClose = document.getElementById("modal-close");
modalClose.addEventListener("click", function () {
  modal.classList.remove("active");
});

// Closes the modal when user clicks on backdrop of modal
modal.addEventListener("click", (e) => {
  // Prevents the modal from closing when clicking inside of the modal
  if (e.target !== e.currentTarget) return;
  modal.classList.remove("active");
});

let faqList = Array.from(document.getElementsByClassName("faq"));

for (var i = 0; i < faqList.length; i++) {
  const faqTitle = faqList[i].querySelector(".faq__title");

  faqTitle.addEventListener("click", function () {
    // Checks if active faq is clicked again
    if (this.parentElement.classList.contains("active")) {
      // If so, deactivates and returns
      return this.parentElement.classList.remove("active");
    }

    // Sets all faqs inactive
    faqList.forEach((faq) => {
      faq.classList.remove("active");
    });

    // Activates clicked-on faq
    this.parentElement.classList.add("active");
  });
}
