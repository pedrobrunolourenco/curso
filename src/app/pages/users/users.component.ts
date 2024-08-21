import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  userSelecionado: User | undefined;

  userForm : FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
              private userService: UserService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  SubmitForm(){
    if(this.userForm.valid){
      this.users.push(this.userForm.value);
      this.userForm.reset;
    }
  }

  initializeForm(){
    this.userForm = this.fb.group({
       nome: ['', [Validators.required, Validators.maxLength(250)]],
       idade: ['', [Validators.required, Validators.min(12), Validators.max(120)]]
    });
  }

  users: User[] = [
    {
      nome: "Pedro",
      idade: 25
    },
    {
      nome: "Bruno",
      idade: 15
    },
    {
      nome: "Rodrigues",
      idade: 32
    },
    {
      nome: "Lourenco",
      idade: 44
    }
  ]

  userInfoSelecionado(user: User){
    this.userSelecionado = user;
    this.userService.setUser(user);

  }

}
