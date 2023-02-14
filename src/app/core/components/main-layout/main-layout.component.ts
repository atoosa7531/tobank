import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutNavbarComponent } from '../main-layout-navbar/main-layout-navbar.component';
import { FooterComponent } from '../main-layout-footer/footer.component';

@Component({
  selector: 'tobank-website-app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MainLayoutNavbarComponent,
    FooterComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.less'],
})
export class MainLayoutComponent {}
