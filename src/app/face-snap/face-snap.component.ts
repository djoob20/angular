import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap;

  buttonSnapText!: string ;

  ngOnInit(): void {

    this.buttonSnapText = "Oh Snap!";
  }


  onSnap(){
    if (this.buttonSnapText === "Oh Snap!"){
      this.buttonSnapText = "Oops, unSnap!";
      this.faceSnap.snaps++;

    }else{
      this.buttonSnapText = "Oh Snap!";
      this.faceSnap.snaps--;
    }

  }

}
