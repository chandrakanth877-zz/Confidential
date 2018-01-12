import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot,RouterStateSnapshot,Router } from "@angular/router";

import { IConfidentialFormModel, ConfidentialFormModel } from '../shared/ConfidentialFormModel';
import { Observable } from 'rxjs/Observable';
import { ConfidentialService } from "../ConfidentialFormService/confidential.service";

import "rxjs/add/operator/map";
import 'rxjs/add/observable/of';

@Injectable()
export class ConfidentialResolverService implements Resolve<ConfidentialFormModel> {
  public confidentialFormModel:IConfidentialFormModel;
  constructor(private confidentialService:ConfidentialService) { }

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<ConfidentialFormModel>{
    return Observable.of(this.confidentialService.ConfiddentialFormModel());
  }
}
