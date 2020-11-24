import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../login/entidades/Usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  
  usuario : Usuario;

  constructor(private activatedRoute : ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params =>{
      this.usuario = JSON.parse(params['usuario']);
      console.log(this.usuario);
    })
  }
    
  ngOnInit() {
  }

}
