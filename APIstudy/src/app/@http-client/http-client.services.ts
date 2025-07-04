import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientServices {

  constructor(private httpClient: HttpClient) { }


  // url 是 API的網址
  // postData是呼叫API時 傳回給Api的值
  // 只有 post 跟 put 可以做使用

  //獲得
  getApi(url: string) {
    return this.httpClient.get(url);
  }

  //新稱
  postApi(url: string, postData: any) {
    return this.httpClient.post(url, postData);
  }

  // 更新
  putApi(url: string, postData: any) {
    return this.httpClient.put(url, postData);
  }

  // 刪除
  delApi(url: string) {
    return this.httpClient.delete(url);










  }
}
