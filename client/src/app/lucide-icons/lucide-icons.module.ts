import { NgModule } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Heart, ShoppingCart, Globe, Plane, Shield, Smile } from 'lucide-angular';

@NgModule({
  imports: [LucideAngularModule.pick({ Heart, ShoppingCart, Globe, Shield, Plane, Smile })],
  exports: [LucideAngularModule]
})
export class LucideIconsModule {}
