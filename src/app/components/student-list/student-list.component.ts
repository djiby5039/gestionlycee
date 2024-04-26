import { Component } from '@angular/core';
import { Student } from 'src/app/models/students';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})


export class StudentListComponent {

   DataSources: Student[] = [
    
    {id: 1, nom: 'Sow', prenom: 'Djiby', classe: 'TERMINALE S2'},
    {id: 2, nom: 'Thiam', prenom: 'Arona', classe: 'TERMINALE S1'},
    {id: 3, nom: 'Gaye', prenom: 'Moussa', classe: 'TERMINALE S3'},
    {id: 4, nom: 'Diop', prenom: 'Nafissatou', classe: 'TERMINALE G'},
    {id: 5, nom: 'Drame', prenom: 'Helene', classe: 'TERMINALE T'},
    {id: 6, nom: 'Bah', prenom: 'Nasser', classe: 'TERMINALE L2'},
  
  ];
 
  displayedColumns: string[] = ['id', 'nom', 'prenom', 'classe'];
  dataSource = this.DataSources;

}
