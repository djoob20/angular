import { Component, OnInit } from '@angular/core';
import {interval, map, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  interval$ !:Observable<string>
  ngOnInit(): void {
    this.interval$ = interval(1000).pipe(
      map(value => value % 2 === 0 ?
        `je suis ${value} et je suis pair`:
        `je suis ${value} et je suis impair`)
    );
  }
}
