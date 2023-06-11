import { Observable } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.models';
import { FaceSnapsService } from '../../../core/services/face-snaps.services';


@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy{

  faceSnaps$!:Observable<FaceSnap[]>;

  constructor(private faceSnapsServie: FaceSnapsService){}

  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapsServie.getAllFaceSnaps();

  }
}
