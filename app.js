const hamburger = document.querySelector('.navbar_toggle');
const menu = document.querySelector('.navbar_menu');
hamburger.addEventListener('click', 
    function(){
        hamburger.classList.toggle('is-active');
        menu.classList.toggle('active');
    }
);





function addCustomLink() {
    var address;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      address = 'pics/white x2.png';
    } else {
      address = 'pics/black x2.png';
    }
  
    var link = document.createElement('link');
    link.rel = 'icon';
    link.href = address;
    document.head.appendChild(link);
  }
    addCustomLink();




/*这个是个小重点！ */
  window.addEventListener('scroll', reveal);
  function reveal(){
        var reveals = document.querySelectorAll('.reveal');
        for(var i = 0; i < reveals.length; i++){
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 150;

            if(revealTop < windowHeight - revealPoint){
                reveals[i].classList.add('active');
            } 
            else{
                reveals[i].classList.remove('active');
            }
        }
    }





    let i = 0;

    const randomizeText = () => {
      const phrase = document.querySelector('.random-word');
      const compStyles = window.getComputedStyle(phrase);
      const animation = compStyles.getPropertyValue('animation');
      const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
      
      const phrases = ['seamless', 'personable', 'fierce', 'beast-mode', 'intelligent', 'vibrant', 'captivating', 'quirky', 'electric', 'radiant', 'dynamic', 'wondrous', 'dazzling'];
      
      i = randomNum(i, phrases.length);
      const newPhrase = phrases[i];
      
      setTimeout(() => {
        phrase.textContent = newPhrase;
      }, 300); // time to allow opacity to hit 0 before changing word
    }
    
    const randomNum = (num, max) => {
      let j = Math.floor(Math.random() * max);
      
      // ensure diff num every time
      if (num === j) {
        return randomNum(i, max);
      } else {
        return j;
      }
    }
    
    const getAnimationTime = () => {
      const phrase = document.querySelector('.random-word');
      const compStyles = window.getComputedStyle(phrase);
      let animation = compStyles.getPropertyValue('animation');
      
      // firefox support for non-shorthand property
      animation != "" ? animation : animation = compStyles.getPropertyValue('-moz-animation-duration');
      
        // webkit support for non-shorthand property
      animation != "" ? animation : animation = compStyles.getPropertyValue('-webkit-animation-duration');
      
      
      const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
      return animationTime;
    }
    
    randomizeText();
    setInterval(randomizeText, getAnimationTime());
    



  