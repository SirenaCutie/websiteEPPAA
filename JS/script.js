


const images = [
"Assets/convidados/mprof1.jpeg",
"Assets/convidados/mprof2.jpeg",
"Assets/convidados/mprof3.jpeg"
]

const image = document.getElementsByClassName("image")[0];
const prevButton = document.getElementsByClassName("prev")[0];
const nextButton = document.getElementsByClassName("next")[0];
const indicatorWrapper = document.getElementsByClassName("indicator-wrapper")[0];

let index = 0;

const slideNext = () => {
    if(index < images.length -1){
        image.src = images[++index];
        document.getElementById(`image${index}`).checked = true;
    }  
}

const slidePrev = () => {
    if(index > 0 ){
        image.src = images[--index];
         document.getElementById(`image${index}`).checked = true;
    }  
}

const selectSlide = (index) =>{
    image.src = images[index];
}

const createIndicators = () => {
images.forEach((image, index) =>{
    const indicatorGroup = document.createElement("div");
    const radio = document.createElement("input");
    const label = document.createElement("label");

    indicatorGroup.setAttribute("class","indicator-group");
    radio.setAttribute("class", "indicator");
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", "slider");
    radio.setAttribute("id", `image${index}`);
    label.setAttribute("class", "label");
    label.setAttribute("for", `image${index}`);

    label.addEventListener("click", ()=> {
        selectSlide(index)
    });

    indicatorGroup.append(radio, label);
    indicatorWrapper.append(indicatorGroup);
})
 document.getElementById(`image${index}`).checked = true;
}

nextButton.addEventListener("click", slideNext);
prevButton.addEventListener("click", slidePrev);

window.onload = createIndicators();



//menu burguer

const menuslide = () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu_links');

   hamburger.addEventListener('click', () => {
        menu.classList.toggle('menu-ativo');    
         //animaçao hamburger
   hamburger.classList.toggle('alternar');  
    });

}




//chamar funções
menuslide();