import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit {
taskArray=[{taskName:'Brush teeth', isCompleted: false}];
constructor(){}

ngOnInit(): void {
  
}

  onSubmit(form : NgForm){

    this.taskArray.push({
     taskName : form.controls['task'].value,
     isCompleted : false

    })

form.reset();


  }



  onDelete(index: number){

    this.taskArray.splice(index, 1);

  }

  onCheck(index: number){

    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted ;

  }

}
