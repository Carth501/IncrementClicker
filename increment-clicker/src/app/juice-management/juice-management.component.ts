import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-juice-management',
  templateUrl: './juice-management.component.html',
  styleUrls: ['./juice-management.component.scss'],
})
export class JuiceManagementComponent implements OnInit {
  juicePurchases = 0;
  juiceCost = 20;
  juicePack = 100;
  @Input() value: number = 0;
  @Input() juice: number = 0;

  @Output() makePurchase: EventEmitter<number>;
  @Output() addJuice: EventEmitter<number>;

  constructor() {
    this.makePurchase = new EventEmitter();
    this.addJuice = new EventEmitter();
  }

  ngOnInit(): void {}

  purchaseJuice(): void {
    if (this.value >= this.juiceCost) {
      this.makePurchase.emit(this.juiceCost);
      this.addJuice.emit(this.juicePack);
      this.juicePurchases += 1;
    }
  }
}
