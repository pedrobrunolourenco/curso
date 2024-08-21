import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { UserGit } from '../_models/userGit';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {

  constructor(private userService: UserService,
                      private toastr: ToastrService
                      ) {}

  user: UserGit | undefined;
  username: string = "";

  getGitUser(){

    if(this.username.length == 0){
      this.toastr.error("O campo username é obrigatório");
    }


    this.userService.getGitUser(this.username).subscribe((response: UserGit) => {
       this.user = response;
    }, (erro) => {
      this.toastr.error(erro.error.message);
    });
  }



}
