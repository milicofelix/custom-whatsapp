import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'category-new-modal',
  templateUrl: './category-new-modal.component.html',
  styleUrls: ['./category-new-modal.component.css']
})
export class CategoryNewModalComponent implements OnInit {

    @ViewChild(ModalComponent, {static: true})
    modal: ModalComponent;

    category = {
        'name':'',
        'active': true
    }

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

    submit(){
        const token = window.localStorage.getItem('token');
        this.http.post('http://localhost:8000/api/categories', this.category, {

            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
            .subscribe((category) => {
                this.onSuccess.emit(category)
                this.modal.hide();
                // this.getCategories();
            }, error => this.onError.emit(error));


    }

    showModal(){
        this.modal.show();
    }

}
