import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-acessar-conta',
  templateUrl: './acessar-conta.component.html',
  styleUrls: ['./acessar-conta.component.css']
})
export class AcessarContaComponent {

  //atributos
  mensagem_erro: string = '';

  //construtor
  constructor(
    private httpClient: HttpClient
  ) {

  }

  //criando a estrutura do formulário
  formLogin = new FormGroup({
    //campo 'email'  
    email: new FormControl('',
      [Validators.required, Validators.email]),
    //campo 'senha'
    senha: new FormControl('',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
  });

  //função auxiliar para exibir as mensagens de validação
  get form(): any {
    return this.formLogin.controls;
  }

  //função executada pelo SUBMIT do formulario
  onSubmit(): void {

    //limpando as mensagens
    this.mensagem_erro = '';

    //fazendo a requisição para a API
    this.httpClient.post(
      environment.apiUsuarios + 'api/login', //ENDPOINT do serviço
      this.formLogin.value
    )
      .subscribe({
        next: (data: any) => { //resposta de sucesso da API
          localStorage.setItem('dados-usuario', JSON.stringify(data));
          window.location.href = '/gerenciar-produtos';
          this.formLogin.reset(); //limpando o formulário
        },
        error: (e) => { //resposta de erro da API
          this.mensagem_erro = e.error.mensagem; //exibindo a mensagem
        }
      });
  }
}
