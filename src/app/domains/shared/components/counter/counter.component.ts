import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required:true}) duration = 0;
  @Input({required:true}) message = '';

  constructor() {
    // No debe ser asincrono
    // Esto se corre antes de renderizar el componente
    console.log('Constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges){
    // Se corre antes y durante renderizacion del componente
    // O sea cada vez que hay un cambio en las propiedades
    console.log('ngOnChanges');
    console.log(changes);
    console.log('-'.repeat(10));
  }
}
