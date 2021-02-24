import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-listar-registros',
  templateUrl: './listar-registros.component.html',
  styleUrls: ['./listar-registros.component.scss']
})
export class ListarRegistrosComponent implements OnInit {

  usuarios: any = [];

  constructor(firestore: AngularFirestore, private http: HttpClient) {
    
    http.get("https://woobsing-ec2c6-default-rtdb.firebaseio.com/posts.json")
    .subscribe(
      response =>{
        if(response!= null && response !=undefined)
          this.usuarios = Object.values(response);
        else{
          this.usuarios = response;
        }
        console.log('Usuarios listados correctamente ');
        // window.location.href = '/home';
      },
      error =>{
        // this.usuarios = 'response';
        console.log('Ha ocurrido un error');
      }
    );
  }

  ngOnInit(): void {
  }

}
