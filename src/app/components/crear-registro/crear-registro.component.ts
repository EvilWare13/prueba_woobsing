import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-crear-registro',
  templateUrl: './crear-registro.component.html',
  styleUrls: ['./crear-registro.component.scss']
})
export class CrearRegistroComponent implements OnInit {

  crearRegistro: FormGroup;

  constructor(private http: HttpClient,private fb: FormBuilder) {
    this.crearRegistro = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required]
    });
    
  }

  ngOnInit(): void {
  }

  registro():void{
    // console.log(this.crearRegistro.value);
    this.http.post(
      'https://woobsing-ec2c6-default-rtdb.firebaseio.com/posts.json',
      this.crearRegistro.value,
      {}
    )
    .subscribe(
      response =>{
        console.log('Usuario registrado correctamente');
        window.location.href = '/home';
      },
      error =>{
        console.log('Ha ocurrido un error');
      }
    );
  }

}
