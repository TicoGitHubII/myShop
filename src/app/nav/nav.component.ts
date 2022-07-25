import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ConfigService } from '../config.service';
import { Post, Result} from './post';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  nav_name = 'myShop';
  posts: Post[]=[];
  myData: Result[] =[];
  loading: Boolean =false;
  errorMessage;
  token="MC5ZdDJVSXhBQUFDSUFLV3hv.H--_vVUl77-9A--_vW_vv71-cWVQCu-_vWfvv715Cu-_ve-_vWrvv73vv73vv73vv71VXe-_ve-_ve-_vR8"
  query ="&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22Yt3JQhAAACIAKlc3%22%29+%5D%5D"
  
  fakeUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  fakeUrl_2 = 'https://jsonplaceholder.typicode.com/posts';
  prismic ="https://myangularapp062002.cdn.prismic.io/api/v2/documents/search?ref=Yt3JShAAACMAKldd&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22Yt3JQhAAACIAKlc3%22%29+%5D%5D"


  constructor(private configService: ConfigService) {

  
  }
   getPosts(){
    const postArray :Post[] = [];
       this.configService.getPosts()
       .pipe(
      //    map((responseData) =>{
      //    for(const key in responseData){
      //      //check for other key properties
      //      if(responseData.hasOwnProperty(key)) {
      //      postArray.push({...responseData[key], id: key})
      //     }
      //    }
      //    return postArray;
      //  })
      map( (response: Post) =>
         
      response.results[1].filter((x: Result) => x.id === "Yt3JQhAAACIAKlc3" )
         
      )
       )
       .subscribe((response) => {
         console.log(response);
        //  this.posts = response ;

       }, (error)=> {
        this.errorMessage = error;
           console.log(this.errorMessage );
          
           
           this.loading = false;
       }
       );
   }

  // getPosts(): Observable<Post[]> {
  //   return this.http.get<Post[]>(this.fakeUrl_2).subscribe((res) => {
  //     console.log(res);

  //   });
  // }

  // getPost(id: number) {
  //   this.http.get(this.fakeUrl_2 + '/id').subscribe((res) => {
  //     console.log(res);
  //   });
  // }
  
  ngOnInit(): void {
    this.getPosts();
  }
}
