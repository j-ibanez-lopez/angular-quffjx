import { Component } from "@angular/core";

export interface PeriodicElement {
  nombre: string;
  rut: string;
  empresa: string;
  carrera: string;
  estado: string;
  enlace: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    rut: "18.756.432-6",
    nombre: "Mariana",
    empresa: "Haulmer",
    carrera: "Ing. civil Computación ",
    estado: "Aprobado",
    enlace: ""
  },
  {
    rut: "19.999.543-5",
    nombre: "Luis",
    empresa: "Del Monte",
    carrera: "Ing. civil Mecánica ",
    estado: "En Realización",
    enlace: ""
  },
  {
    rut: "20.543.987-5",
    nombre: "Pedro",
    empresa: "Equifax",
    carrera: "Ing. civil Industrial ",
    estado: "Esperando evaluación",
    enlace: "Evaluar"
  },
  {
    rut: "19.656.872-5",
    nombre: "Cristina",
    empresa: "Haulmer",
    carrera: "Ing. civil Computación ",
    estado: "Esperando evaluación",
    enlace: "Evaluar"
  },
  {
    rut: "19.164.461-0",
    nombre: "Jaqueline",
    empresa: "Falabella",
    carrera: "Ing. civil Industrial ",
    estado: "abandonada",
    enlace: "Evaluar"
  }
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: "table-basic-example",
  styleUrls: ["table-basic-example.css"],
  templateUrl: "table-basic-example.html"
})
export class TableBasicExample {
  displayedColumns: string[] = [
    "rut",
    "nombre",
    "empresa",
    "carrera",
    "estado",
    "enlace"
  ];
  dataSource = ELEMENT_DATA;
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
