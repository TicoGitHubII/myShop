import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ConfigService } from '../config.service';
import { Post} from './post';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  nav_name = 'myShop';
  posts: Post[]=[];
  loading: Boolean =false;
  errorMessage;
  
  fakeUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  fakeUrl_2 = 'https://jsonplaceholder.typicode.com/posts';
  prismic = "https://myangularapp062002.cdn.prismic.io/api/v2/documents/search?ref=YtR-jxAAACIACSa2&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YtR-fxAAAB8ACSZr%22%29+%5D%5D"

  constructor(private configService: ConfigService) {

  
  }
   getPosts(){
     
       this.configService.getPosts()
       .pipe(
         map((responseData) =>{

         const postArray :Post[] = [];

         for(const key in responseData){
           //check for other key properties
           if(responseData.hasOwnProperty(key)) {
           postArray.push({...responseData[key], id: key})
          }
         }
         return postArray;
       })
       )
       .subscribe((response) => {
         console.log(response);
         this.posts = response ;

       }, (error)=> {
           console.error("Failed with error");
           this.errorMessage = error;
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
