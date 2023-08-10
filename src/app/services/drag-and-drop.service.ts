import { Injectable } from '@angular/core';
import { ITeamMember } from "../interfaces/members.interface";

@Injectable({
  providedIn: 'root'
})
export class DragAndDropService {
  public sortPredicateForDisableItem(items: ITeamMember[]): (index: number) => boolean {
    return (index: number): boolean => {
      return !items[index].pinned;
    }
  }

  public moveItemInArrayIfAllowed(
    array: any[],
    fromIndex: number,
    toIndex: number
  ): void {
    const from = this.clamp(fromIndex, array.length - 1);
    const to = this.clamp(toIndex, array.length - 1);

    if (from === to) {
      return;
    }

    const target = array[from];
    const delta = to < from ? -1 : 1;

    const affectedItems = array.filter((item, index) =>
      delta > 0 ? index >= from && index <= to : index >= to && index <= from
    );

    if (affectedItems.some((i) => i.pinned)) {
      return;
    }

    for (let i = from; i !== to; i += delta) {
      array[i] = array[i + delta];
    }

    array[to] = target;
  }

  private clamp(value: number, max: number): number {
    return Math.max(0, Math.min(max, value));
  }
}
