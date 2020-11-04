## 什麼是 DOM？
Document Object Model，是用來把 HTML 的 Document 轉換成 Object，這樣就能讓 Javescript 去對 HTML 做變化。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
先捕獲再冒泡。先從根節點往下層一層一層進行找，直到找到 target 就會開始在往上一層一層冒泡上去，過程中若有事件預設情況下也會一併被觸發。

## 什麼是 event delegation，為什麼我們需要它？
事件委派，用來避免做不必要或重複的事情。我們可以透過統一控制子節點來降低維護成本。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
event.preventDefault()
	停止事件的默認動作，當不希望事件執行DOM的預設功能時可使用，例如：檢查表單符合條件前不執行送出

event.stopPropagation()
	阻止事件冒泡，當不希望事件繼續冒泡到到上層時可使用。例如，不希望外層在未滿足條件時被該作用元素冒泡而導致外層的事件發生時就可以使用。