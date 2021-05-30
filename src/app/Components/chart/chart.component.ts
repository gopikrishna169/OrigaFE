import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { UserData } from 'src/app/Interfaces/UserData.interface';
declare var google: any;
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'chart-component',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements AfterViewInit {
  @Input() userData: UserData[];
  temp = [{ latLess0: 0}, {latGreat0: 0}, {longLess0: 0}, {longGreat0: 0}];
  @ViewChild('pieChart') pieChart: ElementRef;

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges() {
    this.userData.forEach((user) => {
      if (parseInt(user.address.geo.lat, 0) < 0) {
        this.temp[0].latLess0 += 1;
      } else if (parseInt(user.address.geo.lat, 0) > 0) {
        this.temp[1].latGreat0 += 1;
      } else if (parseInt(user.address.geo.lng, 0) < 0) {
        this.temp[2].longLess0 += 1;
      } else if (parseInt(user.address.geo.lng, 0) > 0) {
        this.temp[3].longGreat0 += 1;
      }
    });
  }

  drawChart = () => {
    const data = google.visualization.arrayToDataTable([
      ['Users', 'Geo-Coordinates'],
      ['Latitude less than Zero', this.temp[0].latLess0],
      ['Latitude greater than Zero', this.temp[1].latGreat0],
      ['Longitude leass than Zero', this.temp[2].longLess0],
      ['Longitude greater than Zero', this.temp[3].longGreat0],
    ]);

    const options = {
      title: 'Users baased on geo-coordinates',
      legend: { position: 'top' }
    };

    const chart = new google.visualization.PieChart(this.pieChart.nativeElement);

    chart.draw(data, options);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      google.charts.load('current', { 'packages': ['corechart'] });
      google.charts.setOnLoadCallback(this.drawChart);
    }, 2000);
  }

}
