import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ServiseService } from './servise.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data: string[] = [];

  constructor(private service: ServiseService) {}

  ngOnInit(): void {
    this.service.getData().subscribe((res) => {
      this.data = res;
    });
  }
}
