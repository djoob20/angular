import { Component} from '@angular/core';
import { FaceSnap } from '../core/models/face-snap.models';
import { FaceSnapsService } from '../core/services/face-snaps.services';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

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


  onSnap(faceSnapId: number){
    if (this.buttonSnapText === "Oh Snap!"){
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(()=>  this.buttonSnapText = "Oops, unSnap!")
      );

    }else{

      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() => this.buttonSnapText = "Oh Snap!")
      );
    }

  }

}
