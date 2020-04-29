import { OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'appvs';
public ngOnInit(): void {
if (this.swUpdate.isEnabled) {
    this.swUpdate.available.subscribe((evt) => {
        console.log('service worker updated');
    });

    this.swUpdate.checkForUpdate().then(() => {
        // noop
    }).catch((err) => {
        console.error('error when checking for update', err);
    });
}}


 constructor(private swUpdate: SwUpdate) {}
}
