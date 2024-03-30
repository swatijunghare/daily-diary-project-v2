import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public loginAPIUrl : string = "https://localhost:7158/Login/";
  public studentAPIUrl : string = "https://localhost:7158/Student/";
  private apiUrl = 'https://ai.smartpaperapi.com/scan/form/image';
  private apiKey = '10b3213a34ef-46b5-829e-56768d30a6fb';

  constructor(private http:HttpClient) { }

  getStudents(){
    return this.http.get<any>(`${this.studentAPIUrl}get_all_student`)
    .pipe(map((res:any)=>{
      return res; 
    }))
  }
  getStudentById(id:number){
    return this.http.get<any>(`${this.studentAPIUrl}get_student/${id}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  login(vtObj : any){
    return this.http.post<any>(`${this.loginAPIUrl}login`,vtObj);
  }

  uploadCompressedImg(compressedBase64: string): Observable<any> {
    // Convert the base64 string back to a Uint8Array
    const byteCharacters = atob(compressedBase64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
  
    const formData = new FormData();
    const formName = 'api_form_v1';
  
    formData.append('formName', formName);
    formData.append('formImage', new Blob([byteArray], { type: 'image/jpeg' }), 'compressed_image.jpg');
    formData.append('metadata', '{}');
    formData.append('realTimeRespType', 'simpleKeyValue');
  
    //console.log('Before sendData:', compressedBase64);
    return this.http.post(this.apiUrl, formData, {
      headers: {
        'x-api-key': this.apiKey,
      },
    });
  }

}
