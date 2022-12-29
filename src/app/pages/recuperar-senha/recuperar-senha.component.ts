import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.css']
})
export class RecuperarSenhaComponent {

  //atributos
  mensagem_sucesso: string = '';
  mensagem_erro: string = '';

  //construtor
  constructor(
    private httpClient: HttpClient
  ) {

  }

  //criando a estrutura do formulário
  formRecuperarSenha = new FormGroup({
    //campo 'email'  
    email: new FormControl('',
      [Validators.required, Validators.email]),
  });

  //função auxiliar para exibir as mensagens de validação
  get form(): any {
    return this.formRecuperarSenha.controls;
  }

  //função executada pelo SUBMIT do formulario
  onSubmit(): void {

    //limpando as mensagens
    this.mensagem_sucesso = '';
    this.mensagem_erro = '';

    //fazendo a requisição para a API
    this.httpClient.post(
      environment.apiUsuarios + 'api/passwordrecover', //ENDPOINT do serviço
      this.formRecuperarSenha.value
    )
      .subscribe({
        next: (data: any) => { //resposta de sucesso da API
          this.mensagem_sucesso = data.mensagem; //exibindo a mensagem
          this.formRecuperarSenha.reset(); //limpando o formulário
        },
        error: (e) => { //resposta de erro da API
          this.mensagem_erro = e.error.mensagem; //exibindo a mensagem
        }
      });
  }
}
