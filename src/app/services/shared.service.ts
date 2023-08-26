import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public copyArrayOfObjects<T>(arr: T[]): T[] {
    return arr.map((obj: T) => ({...obj}));
  }

  public findIntersection(arr1: number[], arr2: number[]): number[] {
    const set1 = new Set(arr1);
    const intersection = arr2.filter(value => set1.has(value));
    return intersection;
  }

  public arraysAreEqual(arr1: any[], arr2: any[]): boolean {
    const a = arr1.map((a) => a.id).sort();
    const b = arr2.map((a) => a.id).sort();
    return a.every((value, index) => value === b[index]);
  }
}
