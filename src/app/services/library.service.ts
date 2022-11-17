import { Injectable } from "@angular/core";
import { map, Observable, Subject, throwError } from "rxjs";
import { catchError } from "rxjs";

@Injectable({providedIn: 'root'})
export class LibraryService {
  type: string;
  categories: any = [
    {
      name: 'Data Structures',
      icon: '../../assets/data-structures.png',
      topics: [
        { name: 'Binary Tree',
          articles: [ 
                      {name: 'traversing a binary tree', url: 'https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/'}, 
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
      ]
    },
    {
      name: 'Algorithims',
      icon: '../../assets/algorithm.png',
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
    {
      name: 'Databases',
      icon: '../../assets/database.png',
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
    {
      name: 'Architecture',
      icon: '../../assets/system-architecture.png',
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
    {
      name: 'Angular',
      icon: '../../assets/google.png',
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
    {
      name: 'React',
      icon: '../../assets/react.png',
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
    {
      name: 'JavaScript',
      icon: '../../assets/javascript.png',
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
    {
      name: 'Mac OS',
      icon: '../../assets/mac.png',
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

  getCategoryTopics(categoryName: string) {
    const category = this.categories.find((val:any) => val.name === categoryName);
    return category.topics;
  }

  addTopicArticle(topicName: string, article: {}) {
    const topic = this.getTopics().find((val: any) => val.name === topicName);
    console.log(topic);
    topic.articles.push(article);
  }

  addNewTopic(categoryName: string, newTopicName: string) {
    const category = this.categories.find((val:any) => val.name === categoryName);
    console.log(category)
    const newTopic = { name: newTopicName, articles: []}
    category.topics.push(newTopic);
  }

  
}