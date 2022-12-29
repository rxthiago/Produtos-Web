import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent {

  //atributos
  mensagem_sucesso: string = '';
  mensagem_erro: string = '';

  //construtor
  constructor(
    private httpClient: HttpClient
  ) {

  }

  //criando a estrutura do formulário
  formCadastro = new FormGroup({
    //campo 'nome'
    nome: new FormControl('',
      [Validators.required, Validators.minLength(8), Validators.maxLength(150)]),
    //campo 'email'  
    email: new FormControl('',
      [Validators.required, Validators.email]),
    //campo 'senha'
    senha: new FormControl('',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    //campo 'senhaConfirmacao'
    senhaConfirmacao: new FormControl('',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
  });

  //função auxiliar para exibir as mensagens de validação
  get form(): any {
    return this.formCadastro.controls;
  }

  //função executada pelo SUBMIT do formulario
  onSubmit(): void {

    //limpando as mensagens
    this.mensagem_sucesso = '';
    this.mensagem_erro = '';

    //fazendo a requisição para a API
    this.httpClient.post(
      environment.apiUsuarios + 'api/register', //ENDPOINT do serviço
      this.formCadastro.value
    )
      .subscribe({
        next: (data: any) => { //resposta de sucesso da API
          this.mensagem_sucesso = data.mensagem; //exibindo a mensagem
          this.formCadastro.reset(); //limpando o formulário
        },
        error: (e) => { //resposta de erro da API
          this.mensagem_erro = e.error.mensagem; //exibindo a mensagem
        }
      });
  }

}
