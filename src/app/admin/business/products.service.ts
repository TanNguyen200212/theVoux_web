import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Products } from './products.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  isFetching = false;

  private productsSubject = new BehaviorSubject<Products[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor( private http: HttpClient) { }

  createAndStoreProducts(category: string, imageUrl:string, name:string, description:string, price:string): Observable<any> {
    const productsData: Products = { category: category,imageUrl: imageUrl,  name : name, description: description, price: price };
    console.log(productsData);
    return this.http.post<{ name: string }>(
      'https://httpclient-a4bf8-default-rtdb.firebaseio.com/products.json',
      productsData
    ).pipe(
      map(responseData => {
        const newProducts: Products = { id:responseData.name, category,imageUrl ,name,description,price };
        this.productsSubject.next([...this.productsSubject.value, newProducts]); // Add new post to the current list
        return responseData;
      })
    );
}

fetchProducts() {
  let searchParams = new HttpParams();
  searchParams = searchParams.append('print', 'pretty');
  searchParams = searchParams.append('custom', 'key');
  return this.http
    .get<{ [key: string]: Products }>(
      'https://httpclient-a4bf8-default-rtdb.firebaseio.com/products.json',
      {
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
        params: searchParams,
      }
    )
    .pipe(
      map((responseData: any) => {
        const productsArray: Products[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            productsArray.push({ ...responseData[key], id: key });
          }
        }
        return productsArray;
      })
    );
}

deleteProducts(productsId: string) {
  return this.http.delete(
    'https://httpclient-a4bf8-default-rtdb.firebaseio.com/products.json'
  );
}
    private firebaseUrl =
    'https://httpclient-a4bf8-default-rtdb.firebaseio.com/products';

    updateProducts(productsId: string, productsData: { category: string,imageUrl:string, name: string, description: string , price: string   }): Observable<any> {
      return this.http.put<Products>(`https://httpclient-a4bf8-default-rtdb.firebaseio.com/products/${productsId}.json`, productsData)
        .pipe(
          map(responseData => {
            const updatedProducts = this.productsSubject.value.map(products =>
              products.id === productsId ? { ...responseData, id: productsId } : products
            );
            this.productsSubject.next(updatedProducts); // Update the list with the updated post
            return responseData;
          })
        );

    }

    deleteProduct(productsId: string): Observable<void> {
      return this.http.delete<void>(`${this.firebaseUrl}/${productsId}.json`);
    }
}

