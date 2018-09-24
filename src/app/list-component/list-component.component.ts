import { Component, OnInit } from '@angular/core';
import { ComponentserviceService } from '../componentservice.service';
import { Observable } from 'rxjs';
import { element } from 'protractor';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  constructor(private componentService: ComponentserviceService) { }

  public list;
  public componentObject = {};
  public componentAddedFailed = false;
  public componentAddedSuccess = false;
  public addNewMode = false;
  public editMode = false;
  modalActivated = false;
  ngOnInit() {
    this.getListOfModules();
  }

  getListOfModules() {
    this.componentService.getAllComponents().subscribe((data) => {
    this.list = data;
    console.log(data);
    }, error => {
      console.error('Error getting list of modules!');
      return Observable.throw(error);
    });
  }

  openModal(id) {
    if (id === 0 || id === '0') {
      this.addNewMode = true;
      this.componentObject = {};
    } else {
      this.editMode = true;
      this.componentService.getAComponent(id).subscribe((data) => {
      this.componentObject = {
        name : data.name,
        version : data.version,
        type : data.type
      };
      }, error => {
        console.error('Error getting list of modules!');
        return Observable.throw(error);
      });
    }

    if (!this.modalActivated) {
      this.modalActivated = true;
    } else {
    this.modalActivated = false;
    this.addNewMode = false;
    this.editMode = false;
  }
  }

  addNewComponent() {
    this.componentService.addComponent(this.componentObject).subscribe((data) => {
      this.modalActivated = false;
      this.componentAddedSuccess = true;
      this.addNewMode = false;
      this.componentObject = {};
      this.getListOfModules();
      setTimeout(() => {
        this.componentAddedSuccess = false;
   }, 3000);
    }, error => {
      this.componentAddedFailed = true;
      setTimeout(() => {
        this.componentAddedFailed = false;
   }, 3000);
    });
  }
}
