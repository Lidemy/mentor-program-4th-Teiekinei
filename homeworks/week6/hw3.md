## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
* `hr` 水平線、分隔線
* `sup` 上標
* `sub` 下標


## 請問什麼是盒模型（box modal）
定義一個容器，並可以設定容器的寬 `width`、高 `height`、內間距 `padding`、外間距 `margin`、框 `border` 的數值。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
* `display: inline` 是 `span`、`a` 的預設值，不能調整寬高及上下邊距。`padding` 不會造成元素的變動，但會影響到容器。
* `display: block` 是 `div`、`h1`、`p` 的預設值，怎麼調都可以，預設會佔滿整行。
* `display: inline-block` 是 `button`、`input`、`select` 的預設值，一行可以放多個元素。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
* `position: static` 預設值
* `position: relative` 相對定位，相對於自己原本的位置依據設定的數值做調整，其他的元素不會被影響。
* `position: absolute` 絕對定位,針對某個參考點﹝往上找不是static的元素﹞做定位。如果下方還有其他東西，會往上遞補。
* `position: fixed` 固定定位，定位在 viewport 的固定位置。