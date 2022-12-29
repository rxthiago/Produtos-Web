import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent implements OnInit {

  //atributos
  mensagem_sucesso: string = '';
  mensagem_erro: string = '';

  dadosUsuario: any = {};

  httpHeaders = new HttpHeaders();

  //construtor
  constructor(
    private httpClient: HttpClient
  ) {

  }

  ngOnInit(): void {
    var json = JSON.parse(localStorage.getItem('dados-usuario') as string);
    this.dadosUsuario = json;

    this.httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + json.token
    });
  }

  //criando a estrutura do formulário
  formAlterarSenha = new FormGroup({
    senhaAtual: new FormControl('',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    novaSenha: new FormControl('',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    novaSenhaConfirmacao: new FormControl('',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
  });

  //função auxiliar para exibir as mensagens de validação
  get form(): any {
    return this.formAlterarSenha.controls;
  }

  //função executada pelo SUBMIT do formulario
  onSubmit(): void {

    //limpando as mensagens
    this.mensagem_sucesso = '';
    this.mensagem_erro = '';

    //fazendo a requisição para a API
    this.httpClient.put(
      environment.apiUsuarios + 'api/modifypassword', //ENDPOINT do serviço
      this.formAlterarSenha.value,
      { headers: this.httpHeaders }
    )
      .subscribe({
        next: (data: any) => { //resposta de sucesso da API
          this.mensagem_sucesso = data.mensagem; //exibindo a mensagem
          this.formAlterarSenha.reset(); //limpando o formulário
        },
        error: (e) => { //resposta de erro da API
          this.mensagem_erro = e.error.mensagem; //exibindo a mensagem
        }
      });
  }

  logout(): void {
    if (window.confirm('Deseja realmente sair do sistema?')) {
      localStorage.removeItem('dados-usuario');
      window.location.href = '/acessar-conta';
    }
  }

}
