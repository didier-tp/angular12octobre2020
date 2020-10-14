import { Component, Input, OnInit } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  titre : string = "default_title";

  constructor(public preferencesService :PreferencesService) { }

  ngOnInit(): void {
  }

}
