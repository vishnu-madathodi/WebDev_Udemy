  function switchMode(){
    let btnSwitch = document.getElementById("mode-switch");
    btnSwitch.classList.toggle("btn-dark");
    btnSwitch.classList.toggle("btn-light");
    let priceList = document.getElementById("pricing-4");
    priceList.classList.toggle("border-dark");
    let priceListChild = document.getElementById("pricing-4-child");
    priceListChild.classList.toggle("text-bg-dark");
    priceListChild.classList.toggle("border-dark");
    let mode = document.documentElement.getAttribute("data-bs-theme");
    let btnFree = document.getElementById("btn-free");
    btnFree.classList.toggle("btn-outline-light");
    btnFree.classList.toggle("btn-outline-dark");
    let btnGetStarted = document.getElementById("get-started");
    btnGetStarted.classList.toggle("btn-dark");
    btnGetStarted.classList.toggle("btn-outline-light");
    let btncontactUs = document.getElementById("contact-us");
    btncontactUs.classList.toggle("btn-dark");
    btncontactUs.classList.toggle("btn-outline-light");
    if(mode=="dark"){
      document.documentElement.setAttribute("data-bs-theme", "light");
    }
    else{
      document.documentElement.setAttribute("data-bs-theme", "dark");
    }
  }