import { NgModule } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Heart, ShoppingCart } from 'lucide-angular';

@NgModule({
  imports: [LucideAngularModule.pick({ Heart, ShoppingCart })],
  exports: [LucideAngularModule]
})
export class LucideIconsModule {}