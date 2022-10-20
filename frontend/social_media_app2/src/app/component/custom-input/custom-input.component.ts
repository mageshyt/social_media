import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent implements OnInit {
  @Input() label?: string;
  @Input() type?: string;
  @Input() placeholder?: string;
  @Input() icon?: string;
  @Input() controller: any = new FormControl('');

  constructor() {}

  ngOnInit(): void {}
}
