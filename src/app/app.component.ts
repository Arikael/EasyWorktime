import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EasyWorktime';

  ngOnInit(): void {

    fromEvent(window, 'resize').pipe(debounceTime(500)).subscribe((event: any) => {
      console.log(event.target);
    })

    if (window.matchMedia("(max-width: 480px)").matches) {
      console.log('test')
    }
  }
}
