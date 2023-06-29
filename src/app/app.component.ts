import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ServiseService } from './servise.service';
import { Todo } from './todo';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data: Todo[] = [];

  readonly columns = ['id', 'userId', 'title', 'completed', 'actions'];

  testValue = new FormControl(true);
  item: any;

  constructor(private service: ServiseService) {}

  ngOnInit(): void {
    this.service.getData().subscribe((res) => {
      this.data = res;
    });
  }

  delete(id: number) {
    this.service.deleteData(id);
  }
}
