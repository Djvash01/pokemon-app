import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  public pokemon = {
    save: environment.apiUrl,
    getById: (id: number) => `${environment.apiUrl}${id}`,
    remove: (id: number) => `${environment.apiUrl}${id}`,
    put: (id: number) => `${environment.apiUrl}${id}`,
  } as const
}
