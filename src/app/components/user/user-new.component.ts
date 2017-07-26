import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-new',
  template: `
    <p>
      user-new Works!
    </p>
  `,
  styles: []
})
export class UserNewComponent implements OnInit {

  constructor( private router: ActivatedRoute) {
     this.router.parent.params.subscribe(params =>{
       console.log("new user route");
       console.log(params);
     });
   }

  ngOnInit() {
  }

}
