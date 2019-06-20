import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { steps, pipelines, aplications, packageObjects } from './responseJson';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private readonly stepsResp = steps;
  private readonly pipelinesResp = pipelines;
  private readonly aplicationsResp = aplications;
  private readonly packageObjectsResp = packageObjects;

  steps$: Observable<any>;
  pipelines$: Observable<any>;
  applications$: Observable<any>;
  schemas$: Observable<any>;


  constructor(private httpClient: HttpClient) { }

  concatWithPath(url: string): string {
    const path = 'http://sparkapplicationcomposeralb-822020478.us-east-1.elb.amazonaws.com:8080';
    return path + url;
  }

  getSteps = (): void => {
    this.steps$ = of(this.stepsResp);
  }

  getPipelines = (): void => {
    this.pipelines$ = of(this.pipelinesResp);
  }

  getApplications = (): void => {
    this.applications$ = of(this.aplicationsResp);
  }

  getPackageObjects = (): void => {
    this.schemas$ = of(this.packageObjectsResp);
  }

}
