## 請以自己的話解釋 API 是什麼
API 就是資料交換的管道。制定好交換資料的規則及方式，可以使雙方或多方進行資料的交換。
就像去餐廳點餐，
在單子上劃記想要的餐點 = 依照 API 文件呼叫 function
送給餐廳人員 = 送出請求
得到餐點 = 得到結果
這樣就不需要自己跑去叫廚師一樣一樣煮 = 不需要每個 user 都去執行每個動作
是一種方便餐廳作業的方式 = 方便 user 與提供 API 的單位方便溝通的管道

## 請找出三個課程沒教的 HTTP status code 並簡單介紹
102 處理中，server 收到請求並處理中，但還沒有得到回應。
	→ 這個 code 平常工作或生活中也很好用啊！(知道了啦！在弄了啦！沒空回啦！)

451 不允許進入的網頁，可能是正在被政府審查中的違法網頁。
	→ 好奇什麼時候會出現這種狀況，基本上一般人應該不會遇到吧。
	→ 用 451 作為代號是取自於[《華氏 451 度》](https://zh.wikipedia.org/wiki/%E8%8F%AF%E6%B0%8F451%E5%BA%A6)這本反烏托邦小說，總感覺有點諷刺意味啊！

503 伺服器不能使用，通常是暫時的。 可能是在維護中或者過載。
	→ 最近在更新公司網頁的時候就出現了 503，一度以為自己只是同步檔案就把 server 弄壞(怕)

505 HTTP 版本不支援該 request。
	→ 好奇什麼時候會出現這種狀況，查了很多都只有寫狀態代表的意思，但沒有寫發生的狀況或原因。有人分享的經驗是 HTTP 请求格式錯誤導致，或是客戶端出錯也有可能導致。 


以上參考自 MDN 的 [HTTP 狀態碼](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Status)

BTW, 這個 [HTTP Cats](https://http.cat/) 很有趣，不禁想如果我家貓貓也能傳個代號給我就好了。另外也有狗狗的版本 [HTTP STATUS DOGS](https://httpstatusdogs.com/)  

BTW again, 看到 418 I am a teapot 覺得很有趣，一查發現 Huli 老師寫過這樣一篇文章[搶救茶壺大作戰：418 I am a teapot](https://blog.techbridge.cc/2019/06/15/iam-a-teapot-418/)
看完也可以發現 418 不是標準的 HTTP 狀態碼。 所以就不列在上面了，但因為反正都查了就記錄一下囉！

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL: http://howhowtsu-restaurants.com

說明	            Method	path	          參數        範例
回傳所有餐廳資料	GET	    /restaurants	  
回傳單一餐廳資料	GET		/restaruants/:id	          /restaruants/65
刪除餐廳			DELETE	/restaruants/:id  
新增餐廳			POST	/restaruants	  name:餐廳名	
更改餐廳資訊		PATCH	/restaruants/:id  name:餐廳名	
