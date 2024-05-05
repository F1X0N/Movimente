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

  textoWhatsapp!: string;

  ngOninit() {
    this.textoWhatsapp = `Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20${this.plan}%20de%20${this.lesson}.`;
  }
}
