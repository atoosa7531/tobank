import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './components/first/first.component';
import { ColorComponent } from './components/color/color.component';
import { ServisesComponent } from './components/servises/servises.component';
import { GiftComponent } from './components/gift/gift.component';
import { CustomersComponent } from './components/customers/customers.component';
import { BranchComponent } from './components/branch/branch.component';
import { DownloadAppComponent } from './components/download-app/download-app.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FirstComponent,
    ColorComponent,
    ServisesComponent,
    GiftComponent,
    CustomersComponent,
    BranchComponent,
    DownloadAppComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent {}
