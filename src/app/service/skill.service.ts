import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../enviroments/enviroment';
import { Skill } from '../model/skill';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  update(id: any, skill: Skill) {
    throw new Error('Method not implemented.');
  }
  URL = environment.URL + 'skill'
  constructor(private httpClient: HttpClient) { }
  public lista(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.URL + 'lista');
  }

  public listaPer(id: number): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.URL + `persona/${id}/lista`);
  }

  public detail(id: number):Observable<Skill>{
  return this.httpClient.get<Skill>(this.URL + `detail/${id}`);  
  }

  public save(Skill: Skill):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', Skill);
    }

  public edit(Skill: Skill):Observable<any>{
      return this.httpClient.put<any>(this.URL + 'update', Skill);
      }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
    }
}
