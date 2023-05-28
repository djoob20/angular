import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsService } from '../services/face-snaps.services';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  faceSnap$!: Observable<FaceSnap>;
  buttonSnapText!: string ;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute){}

  ngOnInit(): void {

    this.buttonSnapText = "Oh Snap!";
    const faceSnapId:number = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }


  onSnap(){
    // if (this.buttonSnapText === "Oh Snap!"){
    //   this.buttonSnapText = "Oops, unSnap!";
    //   this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');

    // }else{
    //   this.buttonSnapText = "Oh Snap!";
    //   this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    // }

  }

}
