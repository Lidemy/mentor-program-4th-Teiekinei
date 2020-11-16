## 什麼是 Ajax？
Asynchronous JavaScript and XML，Asynchronous = 非同步，也就是「非同步的 JavaScript 與 XML 技術」，但目前也會使用 JSON 格式，並不限於 XML 格式。

非同步請求是當 user 在發出 request 之後，不需要等待 server 回傳結果，可以去進行其他的動作，等到 response 回傳回來以後再顯示結果。並且可以只回應部分區塊，不需要每次回傳結果都進行整個頁面的重新整理，因此可以節省很多等待的時間，使用者體驗也會比較好。

就像是去買雞排的時候說：「我要一個雞排不要切不要辣，等下再來拿喔」(發request 給雞排店)，接著走到隔壁飲料店去點飲料(發 request 給飲料店)。過一下雞排好了(雞排店回傳結果)，就過去拿雞排，再回來等飲料(等飲料店回傳結果中)，等的時候還能滑個手機呢。

---
## 用 Ajax 與我們用表單送出資料的差別在哪？
利用表單送出資料後，網頁會整頁更新再顯示出結果，所以相較於 Ajax 是「非同步」，表單則是「同步」，也就是送出 request 後，等待並接收到 server 回傳的結果後，才執行動作，期間不能進行其他的動作。

---
## JSONP 是什麼？
JSON with Padding，利用不受同源政策限制的標籤，例如 `<script>`，去做跨來源請求。

---
## 要如何存取跨網域的 API？
要存取跨網域的 API，需要進行 CORS (Cross-Origin Resource Sharing)，也就是跨來源資源共用。在 response 的 header 加上 `Access-Control-Allow-Origin: *`(* 是所有的意思)，瀏覽器在接收到 response 後會檢查規則，若都符合就會允許這個請求，也就能成功讀取回應。

利用 Ajax 送出一個 HTTP 請求需要以下 code：
```
const xhr = new XMLHttpRequest() //建立 XMLHttpRequest 物件
xhr.open(method, url[, async[, user[, password]]]) //開啟一個 url
xhr.send() //發起一個請求
xhr.onload() //載入資料
```
再加上需要執行的動作，就可以取得想要的資料並顯示了。

另外，也可以利用 JSONP 來存取跨網域的API，但使用限制比較多，也比較不方便。

---
## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
因為第四週沒有透過瀏覽器去發 request，而是直接用 node.js 將 request 傳到 server 端，所以沒有限制。而透過瀏覽器時會有基於安全性的考量，對不同網域的資料交換會有所限制，也就是同源政策。

---
*參考文章[輕鬆理解 Ajax 與跨來源請求](https://blog.techbridge.cc/2017/05/20/api-ajax-cors-and-jsonp/)
