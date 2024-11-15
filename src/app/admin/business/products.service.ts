import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, catchError, of } from 'rxjs';
import { Products } from './products.model';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  isFetching = false;

  private productsSubject = new BehaviorSubject<Products[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {}

  createAndStoreProducts(
    category: string,
    imageUrl: string,
    name: string,
    description: string,
    price: number
  ): Observable<any> {
    const productsData: Products = {
      category: category,
      imageUrl: imageUrl,
      name: name,
      description: description,
      price: price,
    };
    console.log(productsData);
    return this.http
      .post<{ name: string }>(
        'https://httpclient-a4bf8-default-rtdb.firebaseio.com/products.json',
        productsData
      )
      .pipe(
        map((responseData) => {
          const newProducts: Products = {
            id: responseData.name,
            category,
            imageUrl,
            name,
            description,
            price,
          };
          this.productsSubject.next([
            ...this.productsSubject.value,
            newProducts,
          ]); // Add new post to the current list
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
          headers: new HttpHeaders(),
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
        }),
        catchError((error) => {
          console.error('Error fetching products:', error);
          return of([]); // Return an empty array in case of error
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

  updateProducts(
    productId: string,
    productsData: {
      category: string;
      imageUrl: string;
      name: string;
      description: string;
      price: string;
    }
  ): Observable<any> {
    return this.http
      .put<Products>(
        `https://httpclient-a4bf8-default-rtdb.firebaseio.com/products/${productId}.json`,
        productsData
      )
      .pipe(
        map((responseData) => {
          const updatedProducts = this.productsSubject.value.map((product) =>
            product.id === productId
              ? { ...responseData, id: productId }
              : product
          );
          this.productsSubject.next(updatedProducts);
          return responseData;
        })
      );
  }

  deleteProduct(productId: string): Observable<void> {
    return this.http.delete<void>(`${this.firebaseUrl}/${productId}.json`).pipe(
      catchError((error) => {
        console.error('Error deleting product:', error);
        throw error;
      })
    );
  }

  getProductById(id: string): Observable<Products> {
    return this.http.get<Products>(`${this.firebaseUrl}/${id}.json`);
  }
}
