# SUITMINE 電商網站 (React + Express + MySQL + Redux + Heroku)
[Demo](https://jocular-phoenix-fe728a.netlify.app/) | [後端 Repo](https://github.com/robintsai502071/suitmine-backend-forked)
## 專案建置目的與動機
2022 年，因為疫情的影響，所有消費模式都線上化，SUITMINE 西服注入全新思維並跳脫傳統框架讓訂製西服變得更加容易，只要顧客提供自身身體資訊，如肩寬、腰圍、腿長等等，即可在網站上消費訂購，SUITMINE 為您製作尺寸全客製化的西服，不再挑選衣服尺寸而是專屬於您。有著新的期許，讓訂製西服的新穎觀念深化到每一位追求時尚衣品的男士。

此網站採前後端分離模式，打造簡易西裝電商網站，使用者可以註冊帳號、更改使用者資訊、瀏覽商品、商品加入收藏及購物車、模擬結帳流程。


## 頁面、功能介紹
+ Redux 狀態控管，透過 `Redux Toolkit`和 `react-redux` 套件使用 `createSlice` `createAsyncThunk`、`createSelector`、`useDispatch`、`useSelector` 進行全域狀態管理。管理項目如下：
    + 使用者 `user.slice.js`
    + 購物車 `cart.slice.js`
    + 我的收藏 `myFavorits.slice.js`
    + 產品 `product.slice.js`

+ **註冊頁面**
註冊官網會員，會員方可使用會員功能及商品結帳。前端欄位驗證，表單送出後密碼透過 `bcrypt` 套件以雜湊方式寫入資料庫。

    ![註冊頁面](https://raw.githubusercontent.com/robintsai502071/suitmine-frontend-forked/5c4280431210ee924b80b27ed26cb0e078247af6/public/%E5%B0%88%E6%A1%88%E4%BB%8B%E7%B4%B9%E5%9C%96%E7%89%87/%E8%A8%BB%E5%86%8A%E9%A0%81%E9%9D%A2.jpg)

+ **登入頁面**
    + `官網帳號/密碼登入` 透過官網的註冊頁面註冊之帳號。
    + `Google 登入` 串接 Firebase API 進行驗證。 

官網測試帳號
帳號：test@gmail.com
密碼：00000000（8 個 0）

![image alt](https://raw.githubusercontent.com/robintsai502071/suitmine-frontend-forked/5c4280431210ee924b80b27ed26cb0e078247af6/public/%E5%B0%88%E6%A1%88%E4%BB%8B%E7%B4%B9%E5%9C%96%E7%89%87/%E7%99%BB%E5%85%A5%E9%A0%81%E9%9D%A2.jpg)
+ **商品總覽**
    + 篩選商品
        + 左方欄可利用商品名稱關鍵字搜尋篩選商品、切換商品種類
        + 右方下拉式選單可篩選顏色及價格排序
    + 切換商品頁面
    每頁展示 8 樣商品，依據當前總商品筆數產出頁碼，點選頁碼切換頁面。
    
    ![image alt](https://raw.githubusercontent.com/robintsai502071/suitmine-frontend-forked/5c4280431210ee924b80b27ed26cb0e078247af6/public/%E5%B0%88%E6%A1%88%E4%BB%8B%E7%B4%B9%E5%9C%96%E7%89%87/%E5%95%86%E5%93%81%E7%B8%BD%E8%A6%BD.jpg)
    
+ **商品詳細頁面**
    + 加入購物車
    + 加入我的收藏
    + 商品圖片細節 - 燈箱效果
    點選商品圖片下方小圖示可打開燈箱，切換幻燈片，觀看圖片細節。
    + 隨機顯示「您可能會喜歡」的商品
    每次點選商品細節頁面，將從同種類商品中以亂數取 4 筆不重複商品作為類似產品，推廣給消費者。
    ![商品詳細頁面](https://raw.githubusercontent.com/robintsai502071/suitmine-frontend-forked/5c4280431210ee924b80b27ed26cb0e078247af6/public/%E5%B0%88%E6%A1%88%E4%BB%8B%E7%B4%B9%E5%9C%96%E7%89%87/%E5%95%86%E5%93%81%E8%A9%B3%E7%B4%B0.jpg)
    ![商品詳細頁面-燈箱效果](https://raw.githubusercontent.com/robintsai502071/suitmine-frontend-forked/5c4280431210ee924b80b27ed26cb0e078247af6/public/%E5%B0%88%E6%A1%88%E4%BB%8B%E7%B4%B9%E5%9C%96%E7%89%87/%E5%95%86%E5%93%81%E8%A9%B3%E7%B4%B0-%E7%87%88%E7%AE%B1.jpg)
+ **會員頁面**
    + 個人檔案
        + 編輯個人檔案
        會員可編輯會員個人檔案，如姓名、電話、地址及身體資訊欄位，**須完整填寫會員個人檔案方可進行商品結帳**。
        + 更改密碼
        透過 `bcrypt` 套件比對客戶端提交的「目前密碼」和資料庫中該會員經雜湊的密碼，比對符合後，再雜湊客戶端提交的「新密碼」覆寫入資料庫。*註：以 `Google 登入` 之會員無法使用官網更改密碼功能。*
        
    + 我的收藏
        + 新增/移除我的收藏品
    可至商品詳細頁面將喜愛的商品加入我的收藏，並可在我的收藏頁面點選愛心圖示，移除收藏。收藏的資料透過 `persist-redux` 套件存於 `localStorage`。 
    
            ![image alt](https://raw.githubusercontent.com/robintsai502071/suitmine-frontend-forked/5c4280431210ee924b80b27ed26cb0e078247af6/public/%E5%B0%88%E6%A1%88%E4%BB%8B%E7%B4%B9%E5%9C%96%E7%89%87/%E6%88%91%E7%9A%84%E6%94%B6%E8%97%8F.jpg)
    + 我的訂單
        + 訂單詳細
        會員結帳商品後，可至「我的訂單」查閱訂單明細。
        ![image alt](https://raw.githubusercontent.com/robintsai502071/suitmine-frontend-forked/5c4280431210ee924b80b27ed26cb0e078247af6/public/%E5%B0%88%E6%A1%88%E4%BB%8B%E7%B4%B9%E5%9C%96%E7%89%87/%E8%A8%82%E5%96%AE%E8%A9%B3%E7%B4%B0.jpg)
        

    
+ **購物車**
    + 購物車資料透過 `persist-redux` 套件存放於 localStorage 中
    + 顯示購物車商品品項、可增減或刪除商品數量
    + 前往結帳
        前往結帳頁面，若是未登入狀態將會彈出提示文字阻擋跳轉頁面。
    + 選擇送貨及付款方式
    僅為裝飾區塊，無實際功能。
    ![image alt](https://raw.githubusercontent.com/robintsai502071/suitmine-frontend-forked/5c4280431210ee924b80b27ed26cb0e078247af6/public/%E5%B0%88%E6%A1%88%E4%BB%8B%E7%B4%B9%E5%9C%96%E7%89%87/%E8%B3%BC%E7%89%A9%E8%BB%8A.jpg)
    
+ **結帳**
    + 再次確認購物車內容
    + 提交訂單
    前往訂單完成頁面，若是未妥善填寫個人檔案將會彈出提示文字阻擋跳轉頁面。
    + 付款資料、索取發票
    僅為裝飾區塊，無實際功能，**請勿填寫真實的信用卡號碼**。
    ![image alt](https://raw.githubusercontent.com/robintsai502071/suitmine-frontend-forked/5c4280431210ee924b80b27ed26cb0e078247af6/public/%E5%B0%88%E6%A1%88%E4%BB%8B%E7%B4%B9%E5%9C%96%E7%89%87/%E7%B5%90%E5%B8%B3.jpg)
    
+ **訂單完成**（同訂單詳細）

+ **靜態頁**
    + 客製化展示間
    點選右方箭頭組件可切換圖片中的配件圖片，立即呈現不同的西服配件搭配。
    ![image alt](https://raw.githubusercontent.com/robintsai502071/suitmine-frontend-forked/5c4280431210ee924b80b27ed26cb0e078247af6/public/%E5%B0%88%E6%A1%88%E4%BB%8B%E7%B4%B9%E5%9C%96%E7%89%87/%E5%AE%A2%E8%A3%BD%E5%8C%96%E5%B1%95%E7%A4%BA%E9%96%93.jpg)
    + 首頁
    + 詳細解說
    + 門市據點
    
## 使用到的工具、套件
+ 前端
    + reduxjs/toolkit
    + redux-logger 紀錄、除錯工具
    + redux-persist 狀態存入 localStorage
    + firebase
    + styled-components
    + sweetalert 彈窗套件
    + animate.css 
    + antd 
    + aos
    + axios
    + bootstrap 5
    + react-bootstrap
    + react-slick
+ 後端
    + express
    + bcrypt 雜湊套件
    + cors 跨來源資源共用
    + dotenv 環境變數
    + express-session 紀錄登入狀態
    + express-validator 欄位驗證
    + mysql2
    + nodemon
    + uuid
    + [kaffeine.herokuapp](http://kaffeine.herokuapp.com/#!)
## 聲明
+ 圖片和文字資料來源來自於網路。
+ 本專案內的圖片與文字內容為練習技術使用，無任何商業用途。

DECLARATION：This website is intended only for personal practice not commercial use. Copyright of the images and words is not claimed by me. All rights retained by the copyright holder. It will be removed if requested by contacting robininispan@gmail.com.