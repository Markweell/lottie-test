import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lottie';
  ngOnInit(){
    const script = document.createElement('script');
    script.src = './../assets/lottie.js'
    document.getElementsByTagName('body')[0].appendChild(script)
  }
}
