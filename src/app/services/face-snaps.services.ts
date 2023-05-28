import { HttpClient } from '@angular/common/http';
import { FaceSnap } from '../models/face-snap.models';
import {Injectable} from '@angular/core'
import { Observable, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService{

  SERVER_URL:string = 'http://localhost:3000/facesnaps';

  constructor(private http: HttpClient){

  }

  getAllFaceSnaps(): Observable<FaceSnap[]>{
    return this.http.get<FaceSnap[]>(this.SERVER_URL);
  }

  getFaceSnapById(id:number): Observable<FaceSnap>{
    return this.http.get<FaceSnap>(`${this.SERVER_URL}/${id}`);
  }
  snapFaceSnapById(id:number, action: 'snap' | 'unsnap'):Observable<FaceSnap>{
    return this.getFaceSnapById(id).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (action === 'snap'? +1 : -1)
      })),
      switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`${this.SERVER_URL}/${id}`,
                updatedFaceSnap)
      )
    )
  }

  addFaceSnap(formValue:{title:string, description:string, imageUrl:string, location?:string}):Observable<FaceSnap>{
    return this.getAllFaceSnaps().pipe(
      map(faceSnaps => [...faceSnaps].sort((a,b)=> a.id - b.id)),
      map(sortedFaceSnaps => sortedFaceSnaps[sortedFaceSnaps.length - 1]),
      map(previousFaceSnap => ({
        id: previousFaceSnap.id + 1,
        ...formValue,
        createdDate: new Date(),
        snaps: 0,
      })),
      switchMap(newFaceSnap => this.http.post<FaceSnap>(`${this.SERVER_URL}`, newFaceSnap))
    );
  }

}
