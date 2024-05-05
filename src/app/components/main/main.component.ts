import { Component } from '@angular/core';
import { PercentCardComponent } from '../percent-card/percent-card.component';
import { PlanCardComponent } from '../plan-card/plan-card.component';
import { DepoimentosComponent } from '../depoimentos/depoimentos.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [PercentCardComponent, PlanCardComponent, DepoimentosComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
