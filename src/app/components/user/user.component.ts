import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {User} from "../../models";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  user: User;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChangesUser', changes)
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroyUser', this.user)
  }

}
