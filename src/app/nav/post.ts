export class Post {
    page: number
    results_per_page: number
    results_size: 2
    total_results_size: number
    total_pages: number
    next_page: number
    prev_page: number
    results: Result
    version: number
    license: string
  }

  export class Result{
 
       id: string ;
       uid: number ;
       url: number ;
       type: number ;
       href: number ;
       tags: [] ;
       first_publication_date: number ;
       last_publication_date: number ;
       slugs: [] ;
       linked_documents: number ;
       lang: number ;
       alternate_languages: [ ];
       data: {}
    }


 