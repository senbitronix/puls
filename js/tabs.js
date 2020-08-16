`use strict`

// назад-подробнее
let catalogHeader = document.querySelectorAll(".catalog__header");

let generalButton = document.querySelectorAll(".catalog__gen .detail");
let detailButton = document.querySelectorAll(".catalog__det .back");

for (let i = 0; i < generalButton.length; i++) {
    
    generalButton[i].addEventListener("click", function() {
        catalogHeader[i].classList.add("catalog__header_left");        
    });
    
    detailButton[i].addEventListener("click", function() {
        catalogHeader[i].classList.remove("catalog__header_left");     
    });

};

// табы
let tabs = document.querySelectorAll(".catalog__tab");
let contents = document.querySelectorAll(".catalog__content");

for (let i = 0; i < tabs.length; i++) {
    contents[i].classList.add("hide");
};
contents[0].classList.remove("hide");


for (let i = 0; i < tabs.length; i++) {
    
    tabs[i].addEventListener(`click`, function() {        
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('catalog__tab_active');
            contents[i].classList.add("hide");
        }
        this.classList.add('catalog__tab_active');
        contents[i].classList.remove('hide');

    })
}






