import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { tcControll } from '../../utils/control';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = '';
  password = '';
  error = '';

  constructor( private router: Router ) {
    // sınıf başlatıcı - html katmanınından önce çalışır
  }
   

  userLogin( ) {

    const obj1: any = 10
    const obj2: any = '10'
    
    if (obj1 == obj2) {
      // değer açısından kıyaslama
    }

    if (obj1 === obj2) {
      // değer ve tür açısından kıyaslama
    }

    if(this.username == '') {
      this.error = 'Username is required';
    }else if(this.password == '') {
      this.error = 'Password is required';
    }else {
      this.error = '';
      // window.location.href = '/dashboard'; // sayfa yönlendirme - hata
      this.router.navigate(['/dashboard']); // sayfa yönlendirme - doğru
    }
  }

  userNameControl() {
    this.error = '';
    console.log('Username:', this.username);
    tcControll(this.username)
  }

}
