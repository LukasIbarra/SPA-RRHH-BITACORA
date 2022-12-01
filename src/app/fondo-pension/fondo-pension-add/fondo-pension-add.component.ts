import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-fondo-pension-add',
  templateUrl: './fondo-pension-add.component.html',
  styleUrls: ['./fondo-pension-add.component.css']
})
export class FondoPensionAddComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  fondopension = {
    afp: "",
    porcentajeafp: 0
  }
  myToken = "as4d7f85asdf48a6sdf";

  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": "Bearer " + this.myToken
  });

  ngOnInit(): void {
  }

  save(): void {
    this.http.post("http://api/cargos", this.fondopension, {headers: this.headers}).subscribe((res) => {
      console.log(res);
    });
  }

}
