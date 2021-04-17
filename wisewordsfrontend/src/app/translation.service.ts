import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Subject } from "rxjs";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { environment } from "../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  BASE_URL = environment.urlRoot;

  constructor(private http: HttpClient) { }


}

