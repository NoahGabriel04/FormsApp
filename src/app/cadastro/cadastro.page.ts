import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  formsCadastro: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formsCadastro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      cpf: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])],
      confirmarSenha: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])]
    });
  }

  ngOnInit() {
  }

  salvarCadastro(){
    console.log('Formulário: ', this.formsCadastro.valid);
  }

}
