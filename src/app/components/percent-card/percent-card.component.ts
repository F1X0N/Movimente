import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-percent-card',
  standalone: true,
  imports: [],
  templateUrl: './percent-card.component.html',
  styleUrl: './percent-card.component.css'
})
export class PercentCardComponent {
  @Input() percent!: string
  @Input() title!: string
  @Input() description!: string
}
