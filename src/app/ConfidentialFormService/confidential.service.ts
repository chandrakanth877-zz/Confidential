import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/Observable/of';
import { IConfidentialFormModel, ConfidentialFormModel } from '../shared/ConfidentialFormModel';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { FUNCTION_TYPE } from '@angular/compiler/src/output/output_ast';
  

@Injectable()
export class ConfidentialService {
  public formModelCollection:AngularFirestoreCollection<ConfidentialFormModel>;
  public formModel:ConfidentialFormModel
  

  constructor(private afs:AngularFirestore) { 
    this.formModelCollection = afs.collection('confidential');
    this.formModel = new ConfidentialFormModel();

  }

  saveModel(confidentialFormModel:IConfidentialFormModel): void {
    this.formModel = Object.assign({},this.formModel,confidentialFormModel);
  }

  ConfiddentialFormModel():ConfidentialFormModel{
    return this.formModel;
  }

  saveToDatbase(formModel:ConfidentialFormModel){
    this.formModelCollection.add(formModel).then((success)=>{
      this.formModel = new ConfidentialFormModel();
      return success.id;
    },(error)=>{
      return error.status;
    } );
  }

}
