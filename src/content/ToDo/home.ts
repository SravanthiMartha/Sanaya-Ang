import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
  
    <h1>Angular2-Carousel</h1>
    <h2>Input Example</h2>
    Test in fullScreen
    <br/> 
    <a href="https://kappys1.github.io/angular2-carousel/">Documentantion</a>
    <a href="https://www.npmjs.com/package/angular2-carousel">NPM Pacakge</a>
    <a href="https://github.com/kappys1/angular2-carousel">Github</a>
    <carousel-component [angle]=30 [ratioScale]=0.9>
        <div class="item-carousel">
          <img src="https://vignette.wikia.nocookie.net/despicableme/images/2/2b/Stuart.png/revision/latest?cb=20161108162855"/>
        </div> 
        <div class="item-carousel">
            <img src="https://i.pinimg.com/736x/3b/f3/1a/3bf31abc7a7a95f381b21a1d8a7ad10f--charlotte-rampling-rose-flower.jpg">
        </div>
        <div class="item-carousel">c</div>
        <div class="item-carousel">d</div>
        <div class="item-carousel">e</div>
        <div class="item-carousel">f</div>
    </carousel-component>
  
  `
})
export class Home{}