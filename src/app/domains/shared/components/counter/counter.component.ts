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
    // Una vez
    console.log('Constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges){
    // Se corre antes y durante renderizacion del componente
    // O sea cada vez que hay un cambio en las propiedades
    console.log('ngOnChanges');
    console.log(changes);
    console.log('-'.repeat(10));
    const duration = changes['duration'];
    if(duration && duration.currentValue !== duration.previousValue){
      this.doSomething();
    }
  }

  ngOnInit(){
    // Se corre despues de renderizar el componente despues del constructor
    // Una vez
    // Puede ser asincrono
    console.log('ngOnInit');
    console.log('duration:', this.duration);
    console.log('message:', this.message);
    console.log('-'.repeat(10));
  }

  ngAfterViewInit(){
    // Se corre despues de renderizar el componente
    // Si los hijos de este componente ya fueron renderizados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy(){
    // 
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }

  doSomething(){
    console.log('Duration cambió');
  }
}
