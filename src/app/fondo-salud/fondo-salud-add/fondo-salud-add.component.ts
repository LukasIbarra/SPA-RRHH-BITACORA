import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-fondo-salud-add',
  templateUrl: './fondo-salud-add.component.html',
  styleUrls: ['./fondo-salud-add.component.css']
})
export class FondoSaludAddComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  fondosalud = {
    fondosalud: "",
    porcentajefs: 0
  }
  myToken = "as4d7f85asdf48a6sdf";

  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": "Bearer " + this.myToken
  });

  ngOnInit(): void {
  }

  save(): void {
    this.http.post("http://api/cargos", this.fondosalud, {headers: this.headers}).subscribe((res) => {
      console.log(res);
    });
  }

}
