import { Injectable } from "@angular/core";
import { data } from "../Data";
import { BehaviorSubject, Observable } from "rxjs";
import { Question } from "./question";

@Injectable({
  providedIn: "root"
})
export class QuestionListService {
  questions = new BehaviorSubject<Question[]>(data);

  constructor() {}

  getQuestions(): Observable<Question[]> {
    return this.questions;
  }
}
