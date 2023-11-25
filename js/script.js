const header = document.getElementById("header");

// Header Scroll Effects
window.addEventListener("scroll", () => {
  if (window.scrollY > 50 && !header.classList.contains("active")) {
    header.classList.add("active");
    return;
  }

  if (window.scrollY < 50 && header.classList.contains("active")) {
    header.classList.remove("active");
    return;
  }
});

// Copy Top Investor Video Animation
const copyTopInvestorsVid = document.getElementById("copy-top-investors-vid");
const copyTopInvestorsVidObserver = new IntersectionObserver((entries) => {
  entries[0].isIntersecting && copyTopInvestorsVid.play();
});
copyTopInvestorsVidObserver.observe(copyTopInvestorsVid);

// Copy Top Investor Video Animation
const smartPortfoliosVid = document.getElementById("smart-portfolios-vid");
const smartPortfoliosVidObserver = new IntersectionObserver((entries) => {
  entries[0].isIntersecting && smartPortfoliosVid.play();
});
smartPortfoliosVidObserver.observe(smartPortfoliosVid);

// FAQs
const faqs = [...document.getElementsByClassName("faq")];

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    if (faq.classList.contains("active")) {
      faq.classList.remove("active");
      faq.classList.add("inactive");
      return;
    }
    if (faq.classList.contains("inactive")) {
      faq.classList.remove("inactive");
      faq.classList.add("active");
      return;
    }
  });
});
