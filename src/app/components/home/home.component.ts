import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>

  <app-css></app-css>

  <app-classes></app-classes>

   <p [appHighlighted]="'orange'">
    Hello world!!!
  </p>

  <br>
  <app-ng-switch></app-ng-switch>
  <br>
  <h3>Asynchronous proccess</h3>
  <button (click)="execute()" [disabled]="loading"
  class = " btn btn-primary fa" type="button" name="button"> 
  <i [ngClass]="{ 'fa-save': !loading, 'fa-refresh fa-spin': loading}"
   class="fa fa-refresh fa-spin"></i>
   {{(loading)? 'Waiting...' : 'Save changes'}}
  </button>

  <br>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentCheced");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContectInit");
  }
  ngDoCheck(): void {
    console.log("ngDockeck");
  }
  ngOnChanges(): void {
    console.log("ngOnChanges");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  constructor() { 
    console.log("constructor");

  }


  loading: boolean = false;

   execute(){
    this.loading = true;
    setTimeout(()=> this.loading = false, 3000)
  }

  

}
