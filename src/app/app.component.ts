import { Component, OnInit } from '@angular/core';
import {concatMap, delay, filter, interval, map, mergeMap, Observable, of, take, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  interval$ !:Observable<string>
  redTrainsCalled = 0;
  yellowTrainsCalled = 0;
  ngOnInit(): void {
    interval(500).pipe(
      take(10),
      map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
      tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
      concatMap(color => this.getTrainObservable$(color)),
      tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
    ).subscribe();
    /*
    this.interval$ = interval(1000).pipe(
      filter(value => value % 3 ===0),
      map(value => value % 2 === 0 ?
        `je suis ${value} et je suis pair`:
        `je suis ${value} et je suis impair`
      ),
      //give the text generated for map(...)
      tap(text => this.logger(text))
    );

     */
  }

  logger(text: string):void{
    console.log(`Log: ${text}`);
  }

  getTrainObservable$(color: 'rouge' | 'jaune') {
    const isRedTrain = color === 'rouge';
    isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
    const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
    console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
    return of({ color, trainIndex }).pipe(
      delay(isRedTrain ? 5000 : 6000)
    );
  }

  translateColor(color: 'rouge' | 'jaune') {
    return color === 'rouge' ? 'red' : 'yellow';
  }

}

