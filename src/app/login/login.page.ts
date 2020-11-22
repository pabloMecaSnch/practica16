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
     mayorEdad(e : any){
      const fecha = new Date(e);
      const timeDiff = Math.abs(Date.now()-fecha.getTime()) ;
      const edad= Math.floor((timeDiff / (1000 * 3600 * 24))/365);
      
      if(edad>18){
        //this.mayor=true;
        return true;
      }else{
        return false;
      }
      
    }
    dni_validation(fg:FormGroup){
      if(this.mayorEdad(fg.controls['age'].value)){
        if(fg.controls['dni'].value==''){
          return({dni_validation:true});
        }else{
          return(null);
        }
      }else{
        return(null);
      }
    }
  ngOnInit() {
    this.dni_validation_group = new FormGroup({
      age : new FormControl('',Validators.compose([
        Validators.required
      ])),
      dni : new FormControl('',Validators.compose([
        Validators.maxLength(9),
        Validators.pattern('^([0-9]{8,8}[A-Za-z])?$')
      ])),
    },(formGroup : FormGroup) =>{
      return this.dni_validation(formGroup);
    });

    this.validations_form = new FormGroup({
      dni_validation : this.dni_validation_group,
      nombre : new FormControl('',Validators.compose([
        Validators.required
      ])),
    });
   
  }
 
  

}

  

