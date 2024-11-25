import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  rutas=[
    {
      name: "home",
      path : "/home"
      
    },
    {
      name: "about",
      path : "/about"
    },
   
    {
      name: "contact",
      path : "/contact"
    },
  {
      name: "posts",
      path: "/post"
  }
  ];
  constructor() {}
  ngOnInit(): void {
       
  }
}
