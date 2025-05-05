import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { DataUser } from '../../models/IDataUsers';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  users:DataUser[] = []
  selectUser?:DataUser

  constructor( private api: ApiService ) {}

  ngOnInit() {
    this.api.getAllUsers().subscribe( {
      next: ( res ) => {
        this.users = res.data;
        this.selectUser = res.data[0];
      },
      error: ( err ) => {
        console.log(err);
      }
    })
  }

  fncSelectUser( tr:any, user: DataUser ) {
    console.log(tr);
    this.selectUser = user
  }

}
