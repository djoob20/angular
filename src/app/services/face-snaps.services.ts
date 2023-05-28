import { HttpClient } from '@angular/common/http';
import { FaceSnap } from '../models/face-snap.models';
import {Injectable} from '@angular/core'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService{

  SERVER_URL:string = 'http://localhost:3000/facesnaps';

  constructor(private http: HttpClient){

  }
  faceSnaps:FaceSnap[] = [];

  getAllFaceSnaps(): Observable<FaceSnap[]>{
    return this.http.get<FaceSnap[]>(this.SERVER_URL);
  }

  getFaceSnapById(id:number): Observable<FaceSnap>{
    return this.http.get<FaceSnap>(`${this.SERVER_URL}/${id}`);
  }
  snapFaceSnapById(id:number, action: 'snap' | 'unsnap'):void{
    // const faceSnap = this.getFaceSnapById(id);
    // action === 'snap'? faceSnap.snaps++: faceSnap.snaps--;
  }

  addFaceSnap(formValue:{title:string, description:string, imageUrl:string, location?:string}):void{
    const faceSnap: FaceSnap = {
      ...formValue,
      snaps: 0,
      createdDate: new Date(),
      id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
    };
    this.faceSnaps.push(faceSnap);
  }

}
