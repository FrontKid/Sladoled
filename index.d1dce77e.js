const modalBackdrop=document.querySelector(".is-hidden");let currentModal="";const objModal={"about-card__read-more":".modal-readmore","site-button__buy":".modal-buy-now",".product__button":".modal"};document.addEventListener("click",(e=>{e.target.matches("[data-open-modal]")&&(currentModal=e.target.classList.value.split(" ")[0],document.querySelector(`${objModal[currentModal]}`).style.display="block",modalBackdrop.classList.remove("is-hidden")),(e.target.matches(".backdrop")||e.target.classList.value.includes("close"))&&(modalBackdrop.classList.add("is-hidden"),document.querySelector(`${objModal[currentModal]}`).style.display="none")}));
//# sourceMappingURL=index.d1dce77e.js.map
