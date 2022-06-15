# MFEE25 第四組 SUITMINE 前端
# 協作須知，請詳讀！！
## 開啟專案
1. `git clone`
2. `npm i`
3. `npm start`

## 關於 components 資料夾
這裡先用大家的名字區分資料夾，可再以不同頁面功能建立子資料夾

## 關於 styles
- `index.scss` 只用來 import 其他 scss 檔案
- 其餘的 scss 檔檔名前統一綴加 `_` 表示是被 import 的檔案
- `/styles/_variables`
  - 在這裡新增變數，可依照個人習慣自行新增
  - 可覆蓋 bootstrap 原本的變數，如 pirmary、secondary 等等
    - （覆蓋變數要放在 `@import "~bootstrap/scss/bootstrap.scss";` 的上面）

- `/styles/_global`
  - 放全域樣式
  - 已經寫好的 mixin 可以直接 include 就不用自己寫字體樣式
  - **若有要在全域新增樣式，請先與組員討論！**

## 關於開分支
- 切版分支這樣開：`layout/自訂的 Component or Page名稱`
- 功能分支這樣開：`feature/自訂功能名稱`
- **完整做完功能或切版後**，統一發 pull request 至 `dev` 分支，請通知技術長審核謝謝～

## Commit message 規範
+ feat: 新增 / 修改功能 (feature)。
+ fix: 修補 bug (bug fix)。
+ update: 更新程式碼區段。
+ style: 格式 (不影響程式碼運行的變動 white-space, formatting, missing semi colons, etc)。
+ refactor: 重構 (既不是新增功能，也不是修補 bug 的程式碼變動)。
+ perf: 改善效能 (A code change that improves performance)。

### 範例
```
[fix] 自訂表單新增/編輯頁面，修正離開頁面提醒邏輯

問題：
1. 原程式碼進入新增頁面後，沒做任何動作之下，離開頁面會跳提醒
2. 原程式碼從新增/編輯頁面回到上一頁後（表單列表頁面），離開頁面會跳提醒

原因：
1. 新增頁面時，頁面自動建立空白題組會調用 sort_item，造成初始化 unload 事件處理器。
2. 回到上一頁後，就不需要監聽 unload 事件，應該把 unload 事件取消。

調整項目：
1. 初始化 unload 事件處理器：排除新增表單時，頁面自動建立空白題組調用 sort_item 的情境
2. 回到上一頁後，復原表單被異動狀態且清除 unload 事件處理器
```