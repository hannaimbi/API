import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CardsComponent } from '../../cards/cards.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
constructor(private api: ApiService){}
products: any =[]

ngOnInit(){
this.api.getData().subscribe((data:any)=>{
this.products = data;
})
}
}

