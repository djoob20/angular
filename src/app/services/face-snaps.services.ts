import { HttpClient } from '@angular/common/http';
import { FaceSnap } from '../models/face-snap.models';
import {Injectable, PipeTransform} from '@angular/core'
import { Observable, map, switchMap } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService implements PipeTransform{

  SERVER_URL:string = 'http://localhost:3000/facesnaps';

  constructor(private http: HttpClient){

  }
  transform(value: any, ...args: any[]) {
      let datePipe = new DatePipe("en-US");
       value = datePipe.transform(value, 'dd/MM/yyyy à HH:mm');
       return value;

  }

  getAllFaceSnaps(): Observable<FaceSnap[]>{
    const emp = this.http.get<Object[]>('http://localhost:9000/employees');
    emp.forEach(empl => console.log(empl));
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
