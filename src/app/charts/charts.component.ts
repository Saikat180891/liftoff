import { Component, OnInit } from "@angular/core";
import { ChartService } from "./chart.service";
declare let d3: any;

@Component({
  selector: "app-charts",
  templateUrl: "./charts.component.html",
  styleUrls: ["./charts.component.scss"]
})
export class ChartsComponent implements OnInit {
  data: any;
  constructor(public chartService: ChartService) {}
  options: any;

  ngOnInit() {
    this.updateChart();
    this.options = {
      chart: {
        type: "discreteBarChart",
        height: 450,
        margin: {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d) {
          return d.label;
        },
        y: function(d) {
          return d.value;
        },
        showValues: true,
        valueFormat: function(d) {
          return d3.format(",.4f")(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: "X Axis"
        },
        yAxis: {
          axisLabel: "Y Axis",
          axisLabelDistance: -10
        }
      }
    };
  }

  updateChart(): void {
    this.chartService.getChartData().subscribe(res => {
      this.data = [
        {
          key: "Answered questions",
          values: [
            {
              label: "Correct",
              value: res.correct || 0
            },
            {
              label: "Incorrect",
              value: res.incorrect || 0
            }
          ]
        }
      ];
    });
  }
}
