import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    console.log(searchText);
    
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      return item.name.toLowerCase().includes(searchText) || item.category.toLowerCase().includes(searchText);
    });
  }

}
