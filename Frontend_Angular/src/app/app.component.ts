import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  //#region Variables

  private _title = 'Online Jobseeker Portal';

  //#endregion

  //#region Page Load

  constructor(
    private _titleService: Title
  ) {
    this._titleService.setTitle(this._title);
  }

  //#endregion

}
