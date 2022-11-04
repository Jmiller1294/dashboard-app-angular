import { Injectable } from "@angular/core";
import { map, Observable, Subject, throwError } from "rxjs";
import { catchError } from "rxjs";

@Injectable({providedIn: 'root'})
export class LibraryService {
  type: string;
  categories: any = [
    {
      name: 'Data Strutures',
      icon: '../../../../assets/data-structures.png',
      topics: [
        { name: 'Binary Tree',
          articles: [ 
                      {name: 'traversing a binary tree', url: 'sdfsdfdsfsdfs'}, 
                      {name: 'traversing a binary tree', url: 'sdfsdfdsfsdfs'}
                    ]
        }, 
        { name: 'Linked List',
          articles: [ 
                      {name: 'traversing a linked list', url: 'sgggggggg'}, 
                      {name: 'reversing a linked list', url: 'kjkjkjkjkjk'}
                    ]
        }, 
        { name: 'Queue',
          articles: [ 
                      {name: 'Making A Queue', url: 'sdfsdfdsfsdfs'}, 
                      {name: 'time complexity of a Queue', url: 'sdfsdfdsfsdfs'}
                    ]
        }, 
        { name: 'Queue',
          articles: [ 
                      {name: 'Making A Queue', url: 'sdfsdfdsfsdfs'}, 
                      {name: 'time complexity of a Queue', url: 'sdfsdfdsfsdfs'}
                    ]
        }, 
        { name: 'Queue',
          articles: [ 
                      {name: 'Making A Queue', url: 'sdfsdfdsfsdfs'}, 
                      {name: 'time complexity of a Queue', url: 'sdfsdfdsfsdfs'}
                    ]
        }, 
        { name: 'Queue',
          articles: [ 
                      {name: 'Making A Queue', url: 'sdfsdfdsfsdfs'}, 
                      {name: 'time complexity of a Queue', url: 'sdfsdfdsfsdfs'}
                    ]
        }, 
        { name: 'Queue',
          articles: [ 
                      {name: 'Making A Queue', url: 'sdfsdfdsfsdfs'}, 
                      {name: 'time complexity of a Queue', url: 'sdfsdfdsfsdfs'}
                    ]
        }, 
      ]
    },
    {
      name: 'Algorithims',
      icon: '../../../../assets/data-structures.png',
      topics: [
        { name: 'Reverse String',
          articles: [ 
                      {name: 'traversing a binary tree', url: 'sdfsdfdsfsdfs'}, 
                      {name: 'traversing a binary tree', url: 'sdfsdfdsfsdfs'}
                    ]
        }, 
        { name: 'Find character',
          articles: [ 
                      {name: 'traversing a linked list', url: 'sgggggggg'}, 
                      {name: 'reversing a linked list', url: 'kjkjkjkjkjk'}
                    ]
        }, 
        { name: 'Bubblesort',
          articles: [ 
                      {name: 'Making A Queue', url: 'sdfsdfdsfsdfs'}, 
                      {name: 'time complexity of a Queue', url: 'sdfsdfdsfsdfs'}
                    ]
        }, 
        { name: 'Quicksort',
          articles: [ 
                      {name: 'Making A Queue', url: 'sdfsdfdsfsdfs'}, 
                      {name: 'time complexity of a Queue', url: 'sdfsdfdsfsdfs'}
                    ]
        }, 
        { name: 'Queue',
          articles: [ 
                      {name: 'Making A Queue', url: 'sdfsdfdsfsdfs'}, 
                      {name: 'time complexity of a Queue', url: 'sdfsdfdsfsdfs'}
                    ]
        }, 
        { name: 'Queue',
          articles: [ 
                      {name: 'Making A Queue', url: 'sdfsdfdsfsdfs'}, 
                      {name: 'time complexity of a Queue', url: 'sdfsdfdsfsdfs'}
                    ]
        }, 
        { name: 'Queue',
          articles: [ 
                      {name: 'Making A Queue', url: 'sdfsdfdsfsdfs'}, 
                      {name: 'time complexity of a Queue', url: 'sdfsdfdsfsdfs'}
                    ]
        }, 
      ]
    },
  ]

  constructor() {}

  getCategories() {
    return this.categories;
  }

  getCategory() {
    return this.categories.find((val:any) => val.name.includes(this.type))
  }

  getTopics() {
    return this.categories.flatMap((val:any) => val.topics);
  }

  
}