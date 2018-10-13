import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  imports: [ 
    RouterModule.forChild([
      {
        path: '',
        component: WelcomeComponent,
        //resolve: { product: ProductResolver },
        //canDeactivate: [ProductEditGuard],
      },
    ])
  ],
  exports: [],
  providers: [
  ],
  declarations: [ WelcomeComponent ]
})
export class WelcomeModule { }
