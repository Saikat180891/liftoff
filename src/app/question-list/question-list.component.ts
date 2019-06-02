import { Component, OnInit } from "@angular/core";
import { QuestionListService } from "./question-list.service";
import { map } from "rxjs/operators";
import { Question } from "./question";
import { ChartService } from "../charts/chart.service";
@Component({
  selector: "app-question-list",
  templateUrl: "./question-list.component.html",
  styleUrls: ["./question-list.component.scss"]
})
export class QuestionListComponent implements OnInit {
  questionList: any[] = [];
  validate: boolean = false;
  correct: number = 0;
  incorrect: number = 0;
  constructor(
    public questionListService: QuestionListService,
    public chartService: ChartService
  ) {}

  ngOnInit() {
    this.initialize();
  }

  initialize(): void {
    this.questionListService
      .getQuestions()
      .pipe(
        map((datas: Question[]) => {
          return datas.map(data => {
            return {
              ...data,
              givenAnswer: ""
            };
          });
        })
      )
      .subscribe((datas: Question[]) => {
        this.questionList = datas;
      });
  }

  onSubmit() {
    this.validate = true;
    const unanswered = this.questionList.filter(
      ques => ques.givenAnswer === ""
    );
    if (unanswered.length <= 0) {
      this.correct = this.questionList.filter(
        ques => ques.givenAnswer === ques.answer
      ).length;
      this.incorrect = this.questionList.length - this.correct;
      this.chartService.setChartData({
        incorrect: this.incorrect,
        correct: this.correct
      });
    }
  }

  onClear() {
    this.initialize();
    this.validate = false;
    this.chartService.setChartData({
      incorrect: 0,
      correct: 0
    });
  }
}
