import { Component } from '@angular/core';
import {Message} from "./Message";
import {HTTPTestservcie} from "./http-test.service";
import {Input} from "../node_modules/@angular/core/src/metadata/directives";
import {OnInit} from "../node_modules/@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: 'my-app',
  template: `<form method="post" id="commentform" class="form-control" novalidate="">
             <input class="form-control" type="text" id ="firstname" placeholder="Enter firstname" required [(ngModel)]="message.firstname"><br><br>
             <input class="form-control"type="text" id ="lastname" placeholder="Enter lastname" required [(ngModel)]="message.lastname"><br><br>
             <input class="form-control"type="text" id="favcolor" placeholder="Enter Favorite Color" required [(ngModel)]="message.favcolor"><br><br>
            <input class="form-control btn btn-primary" type="submit" id ="submit"(click)='submitFunc();' >
            <br><br>
            </form>
            <section>
             <h4 class="well">{{result}}</h4>
            </section>`,
  providers: [HTTPTestservcie]
})
export class AppComponent implements OnInit {
  result: string = "";

  constructor(private _httptestService: HTTPTestservcie) { }

  @Input() message:Message;
  submitFunc()
  {
    console.log("submit Post click happened " + this.message.firstname)
    this._httptestService.postComment(this.message).subscribe(
        data => this.result =JSON.stringify(data),
        error => alert(error),
        () => console.log('Request Completed')
    );
  }
  ngOnInit() {
    this.message = new Message();
  }
}
