import { Component, OnDestroy, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styles: []
})
export class GraphComponent implements OnInit, OnDestroy {

  @Input() results: { name: string, value: number }[] = [];
  orientation: boolean = false;

  // results: any[] = [
  //   {
  //     "name": "Germany",
  //     "value": 8940000
  //   },
  //   {
  //     "name": "USA",
  //     "value": 5000000
  //   },
  //   {
  //     "name": "France",
  //     "value": 7200000
  //   },
  //   {
  //     "name": "México",
  //     "value": 9200000
  //   }
  // ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Games';
  showYAxisLabel = true;
  yAxisLabel = 'Votes';

  colorScheme = 'nightLights';

  // interval;

  constructor() {
    // this.interval = setInterval(() => {
    //   const newResults = [...this.results];

    //   for (let i in newResults) {
    //     newResults[i].value = (Math.round(Math.random() * 500))
    //   }

    //   this.results = [...newResults];
    // }, 1000);
  }

  ngOnInit(): void {
    this.orientation = matchMedia('(min-width: 768px)').matches;
  }

  onSelect(event): void {
    // console.log(event);
  }

  ngOnDestroy(): void {
    // clearInterval(this.interval);
  }

}
