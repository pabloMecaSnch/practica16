import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  age;
  showAge;
  validations_form: FormGroup;
  dni_validation_group : FormGroup;
  validation_messages = {
    'age':[
      {type: 'required', message:'fecha requerida'}
    ],
    'nombre':[
      {type : 'required', message: 'nombre y apellidos requeridos'}
    ],
    'dni': [
    { type: 'required', message: 'dni is required.' },
    { type: 'minlength', message: 'tiene que tener 9 caracteres' },
    { type: 'maxlength', message: 'Has superado el límite de 9 caracteres' },
    { type: 'pattern', message: 'El dni se compone de 8 numeros y una letra.' }
    ],
    
   
    }

  constructor(
    public formBuilder: FormBuilder) {
      
     }

  ngOnInit() {
    this.dni_validation_group = new FormGroup({
      age : new FormControl('',Validators.compose([
        Validators.required,
        this.mayorEdad
      ]
      ))
    }),
    this.validations_form = new FormGroup({
      dni_validation : this.dni_validation_group,
      nombre : new FormControl('',Validators.compose([
        Validators.required
      ])),
      dni : new FormControl('',Validators.compose([
        Validators.required
      ]))
      
    });
   
  }
  mayor(fc: FormControl){
    if(this.age==true){
      
    }else{
      return(null);
    }
    return(null);
  }
  mayorEdad(fc: FormControl){
    const fecha = new Date(fc.value);
    const timeDiff = Math.abs(Date.now()-fecha.getTime()) ;
    const edad= Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    
    if(edad>18){
      //this.mayor=true;
      alert(edad);
      this.control();
    }else{
      //this.age=false;
      //this.mayor=false;
    }
    return(null);
  }

  method ;control(){
    this.validations_form.get('dni').setValidators([Validators.required]);
    this.validations_form.get('dni').updateValueAndValidity();
  }
}

  

