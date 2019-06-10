import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
