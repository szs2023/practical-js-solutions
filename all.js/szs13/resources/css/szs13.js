const herro=document.querySelector(`.herro-images`);
const treimages=document.querySelectorAll(`.herro-images-tre img`);
for(let i=0; i<treimages.length; i++){
    treimages[i].addEventListener(`click`,function(e){
        const imgSrc=e.target.getAttribute(`src`);
        herro.style.backgroundImage = `url(${imgSrc})`
    })
}
