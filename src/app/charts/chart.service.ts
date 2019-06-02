import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

export interface ChartData {
  incorrect: number;
  correct: number;
}

@Injectable({
  providedIn: "root"
})
export class ChartService {
  chartData = new BehaviorSubject<ChartData>({
    incorrect: 0,
    correct: 0
  });

  constructor() {}

  getChartData(): Observable<ChartData> {
    return this.chartData.asObservable();
  }

  setChartData(value: ChartData) {
    this.chartData.next({
      correct: value.correct,
      incorrect: value.incorrect
    });
  }
}
