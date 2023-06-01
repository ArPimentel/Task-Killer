import { Component, OnInit } from '@angular/core';
interface List {
  id: number;
  title: string;
  editing: boolean;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  list: List[] = [];
  newList: string = '';

  ngOnInit(): void {
    const storedList = localStorage.getItem('list');
    if (storedList) {
      this.list = JSON.parse(storedList)
    }
}

saveList(): void{
  localStorage.setItem('list', JSON.stringify(this.list));
}

addList(){
  if(this.newList.trim() !== ''){
    const list: List = {
      id: this.list.length + 1,
      title: this.newList.trim(),
      editing: false
    };
    this.list.push(list);
    this.newList = '';
    this.saveList();
  }
}

editList(list: List) {
  list.editing = !list.editing
  this.saveList();
}

deleteList(list: List) {
  const index = this.list.indexOf(list);
  if(index !== -1){
    this.list.splice(index, 1)
    this.saveList();
  }
}

}


