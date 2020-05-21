import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {Category} from "../../../../models";
import {CategoryHttpService} from "../../../../services/http/category-http.service";

@Component({
  selector: 'category-delete-modal',
  templateUrl: './category-delete-modal.component.html',
  styleUrls: ['./category-delete-modal.component.css']
})
export class CategoryDeleteModalComponent implements OnInit {

    @ViewChild(ModalComponent, {static: true})
    modal: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    category:Category = null;

    _categoryId:number;

  constructor(public categoryHttp: CategoryHttpService) { }

  ngOnInit() {
  }

    @Input()
    set categoryId(value){
        this._categoryId = value;
        if(this._categoryId){
            this.categoryHttp
                .get(this._categoryId)
                .subscribe(category => this.category = category,
                    responseError => {
                        if(responseError.status == 401){
                            this.modal.hide();
                        }
                    });
        }
    }

    destroy(){
        this.categoryHttp.destroy(this._categoryId)
            .subscribe((category) => {
                this.onSuccess.emit(category)
                this.modal.hide();
            }, error => this.onError.emit(error));


    }

    showModal(){
        this.modal.show();
    }

}
