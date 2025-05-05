import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  constructor( private api: ApiService ) {}

  ngOnInit() {
    this.api.getAllUsers().subscribe( {
      next: ( res ) => {
        console.log(res);
      },
      error: ( err ) => {
        console.log(err);
      }
    })
  }

}
