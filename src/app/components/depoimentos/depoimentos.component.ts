import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-depoimentos',
  standalone: true,
  imports: [],
  templateUrl: './depoimentos.component.html',
  styleUrl: './depoimentos.component.css'
})
export class DepoimentosComponent {
@Input() name!: string;
@Input() testimony!: string;
@Input() improvement!: string;
}
