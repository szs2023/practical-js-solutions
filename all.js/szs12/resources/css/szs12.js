const herro=document.querySelector(`.herro-images-one img`);
const treimages=document.querySelectorAll(`.herro-images-tre`);
for(let i=0; i<treimages.length; i++){
    treimages[i].addEventListener(`click`,function(e){
        let imagesource=e.target.getAttribute(`src`);
        herro.setAttribute(`src`,`${imagesource}`)
    })
    console.log(e.target.getAttribute(`src`));
    
}
