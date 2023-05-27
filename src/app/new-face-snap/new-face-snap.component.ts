import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { FaceSnap } from '../models/face-snap.models';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit{


  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;

  constructor(private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.snapForm = this.formBuilder.group({
      title:[null, Validators.required],
      description: [null],
      imageUrl: [null],
      location: [null]

    });

    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        id:0,
        snaps: 0
      }))
    );
  }

  onSubmitForm(): void{
    console.log(this.snapForm.value);
  }
}
