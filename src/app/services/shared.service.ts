import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public copyArrayOfObjects<T>(arr: T[]): T[] {
    return arr.map((obj: T) => ({...obj}));
  }
}
