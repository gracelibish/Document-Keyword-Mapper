import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { DocKeyWord } from './doc-key-word';  
  
  
 @Injectable({  
  providedIn: 'root'  
})  
  
export class DocKeyWordService {  
  url = 'http://localhost:56212/api/PromoDocKW/';  
  docKeyWordsList!: Observable<DocKeyWord[]>; 

  constructor(private http: HttpClient) { }  
  getAllDocKeyWord(): Observable<DocKeyWord[]> {  
    
    return this.http.get<DocKeyWord[]>(this.url);    

  }  
  getDocKeyWordById(DocKeyWordId: number): Observable<DocKeyWord> {  
    return this.http.get<DocKeyWord>(this.url + DocKeyWordId);  
    
  }  
  createDocKeyWord(DocKeyWord: DocKeyWord): Observable<DocKeyWord> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<DocKeyWord>(this.url,  
    DocKeyWord, httpOptions);  
  }  
  updateDocKeyWord(DocKeyWord: DocKeyWord): Observable<DocKeyWord> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<DocKeyWord>(this.url + DocKeyWord.PromoDocId,  
    DocKeyWord, httpOptions);  
  }  
  
}  