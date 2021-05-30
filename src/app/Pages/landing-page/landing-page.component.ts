import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/Interfaces/UserData.interface';
import { LandingPageService } from 'src/app/Services/landingPage.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'landing-page-component',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  userData: UserData[] = []
  constructor(private landingPageService: LandingPageService) {
    this.landingPageService.fetchData().subscribe((res) => {
      this.userData = res;
    })
  }

}
