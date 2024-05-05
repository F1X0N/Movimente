import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plan-card',
  standalone: true,
  imports: [],
  templateUrl: './plan-card.component.html',
  styleUrl: './plan-card.component.css'
})
export class PlanCardComponent {
  @Input() plan!: string;
  @Input() price!: string;
  @Input() lesson!: string;
}
