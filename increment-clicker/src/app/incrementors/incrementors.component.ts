import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementors',
  templateUrl: './incrementors.component.html',
  styleUrls: ['./incrementors.component.scss'],
})
export class IncrementorsComponent implements OnInit {
  incrementors: number[] = [];
  incrementorCount: number = 0;
  incrementorCost: number;
  juice: number;

  @Input() set newValue(value: number | null) {
    if (value) {
      this.value = value;
    }
  }
  value = 0;
  @Output() purchase: EventEmitter<number>;
  @Output() incrementorActivate: EventEmitter<number>;
  @Output() incrementorSale: EventEmitter<number>;
  constructor() {
    this.incrementorCost = 1;
    this.juice = 100;
    this.purchase = new EventEmitter();
    this.incrementorActivate = new EventEmitter();
    this.incrementorSale = new EventEmitter();
  }

  ngOnInit(): void { }

  incrementor(count: number = 1): void {
    this.incrementorActivate.emit(count);
  }

  statisticIncrementor = () => {
    if (this.juice >= this.incrementorCount / 100) {
      this.juice -= this.incrementorCount / 100;
      this.incrementor(this.incrementorCount / 100);
    }
  };

  individualIncrementor = () => {
    if (this.juice > 0) {
      this.juice -= 1;
      this.incrementor();
    }
  };

  incrementorPurchase(): void {
    if (this.value >= this.incrementorCost) {
      this.purchase.emit(this.incrementorCost);
      //this.incrementorCost = Math.ceil(this.incrementorCost * 1.05);
      this.incrementorCount++;
      if (this.incrementorCount < 100) {
        this.incrementors.push(window.setInterval(this.individualIncrementor, 1000));
      }
      if ((this.incrementorCount == 100)) {
        this.deleteIncrementors();
        this.incrementors.push(
          window.setInterval(this.statisticIncrementor, 10)
        );
      }
    }
    //this.store.dispatch(ValueActions.purchase({ cost: 25 }));
  }

  sale(): void {
    if (this.incrementors.length > 0) {
      const interval = this.incrementors.pop();
      clearInterval(interval);
      this.incrementorSale.emit(Math.ceil(this.incrementorCost * 0.75));
      this.incrementorCost = Math.ceil(this.incrementorCost * 0.9525);
    }
  }

  deleteIncrementors(): void {
    while (this.incrementors.length > 0) {
      clearInterval(this.incrementors.pop());
    }
  }

  otherPurchase(cost: number): void {
    this.purchase.emit(cost);
  }

  addJuice(units: number): void {
    this.juice += units;
  }
}
