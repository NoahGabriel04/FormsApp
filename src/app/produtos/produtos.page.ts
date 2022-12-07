import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  formsCadastro: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formsCadastro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      descricao: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      validade: ['', Validators.compose([Validators.required])],
      preco: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

}
