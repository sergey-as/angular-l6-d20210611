import {AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {UsersComponent} from "./components";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//1
// export class AppComponent implements OnInit, OnChanges, AfterViewInit {
//   title = 'angular-l6-d20210611';
//
//   lat = 51.678418;
//   lng = 7.809007;
//
//   @ViewChild(UsersComponent)
//   usersComponentChild: UsersComponent
//
//   constructor() {
//     // console.log('constructor');
//     // // this.usersComponentChild.xxx
//     // this.usersComponentChild.changexxx('aswerwqer');
//     console.log(this.usersComponentChild, 'constructor')
//   }
//
//   ngAfterViewInit(): void {
//     console.log(this.usersComponentChild, 'ngAfterViewInit')
//   }
//
//   ngOnChanges(changes: SimpleChanges): void {
//     // console.log('ngOnChanges')
//   }
//
//   ngOnInit(): void {
//     // console.log('ngOnInit')
//     console.log(this.usersComponentChild, 'ngOnInit')
//   }
//
// }

//2
// export class AppComponent {
//   title = 'angular-l6-d20210611';
//
//   constructor(private httpClient: HttpClient) {
//
//     this.httpClient.get(
//       'https://api.yelp.com/v3/businesses/search',
//       {
//         headers: new HttpHeaders(
//           {
//             'username': 'vasya',
//             'password': '1234'
//           }
//         )
//       }
//     ).subscribe(token => console.log(token))
//
//   }
// }


//3
export class AppComponent {
  title = 'angular-l6-d20210611';

  constructor(private httpClient: HttpClient) {

    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(value => console.log(value))

  }
}

