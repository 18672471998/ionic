import { Component } from '@angular/core';
import { NavController } from '../../../../../..';
@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>
          Segment under Navbar
        </ion-title>
      </ion-navbar>
      <ion-toolbar>
        <ion-segment [(ngModel)]="signInType">
          <ion-segment-button value="new">
            New
          </ion-segment-button>
          <ion-segment-button value="existing" class="e2eSegmentExistingSegment">
            Existing
          </ion-segment-button>
          <ion-segment-button value="test">
            Test
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-row>
        <ion-col>
          <button ion-button block (click)="signInType='new'">New</button>
        </ion-col>
        <ion-col>
          <button ion-button color="light" block (click)="signInType='existing'">Existing</button>
        </ion-col>
        <ion-col>
          <button ion-button color="dark" block (click)="signInType='test'" class="e2eSegmentTestButton">Test</button>
        </ion-col>
      </ion-row>
      <div [ngSwitch]="signInType">
        <div *ngSwitchCase="'existing'">
          Signing up as an <b>Existing User</b>.
        </div>
        <div *ngSwitchCase="'new'">
          Signing up as a <b>New User</b>.
        </div>
        <div *ngSwitchCase="'test'">
          Signing up as a <b>Test User</b>.
        </div>
     </div>
     <button ion-button block (click)="goToPage2()">Next Page</button>
    </ion-content>
  `
})
export class FirstPage {
  signInType: string;
  constructor(public navCtrl: NavController) {
    this.signInType = 'new';
  }
  goToPage2() {
    this.navCtrl.push('second-page');
  }
}
