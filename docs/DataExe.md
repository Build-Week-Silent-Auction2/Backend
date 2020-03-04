[Back to ReadMe](../ReadMe.md)
### Table of Contents
- Auth
  - [Logins](#Logins )
  - [Registers](#Registers)
- Restricted - *Requires Token*
  - [Items](#Items-Restricted)
  - [Auctions](#Auctions-Restricted)

# Logins
### POST

Base URL: https://silent-auctionbw3.herokuapp.com/

#### Bidders - /auth/register/:userType  (userType = bidders) --- /auth/register/bidders

```javascript
{
  username:"username",
  password:"password"
}
```

## ON RESPONSE
````
 Token = res.data.token
 User Object = res.data.userInfo

 Note: password will be returned ""
````
<br></br>

#### Sellers - /auth/register/:userType  (userType = bidders) --- /auth/register/sellers

```javascript
{
  username:"username",
  password:"password"
}
```

## ON RESPONSE
````
 Token = res.data.token
 User Object = res.data.userInfo

 Note: password will be returned ""
````
<br></br>
<br></br>
<br></br>
# Registers

### POST

Base URL: https://silent-auctionbw3.herokuapp.com/

#### Bidders - /auth/register/:userType  (userType = bidders) --- /auth/register/bidders

```javascript
{
	firstName:"name",
	lastName:"name",
	email:"email@email.com",
	streetAddress:"1370 N 1954 E suit#302",
	city:"New York",
	state:"New York",
	zipCode: "10001",
	username:"UserName",
	password:"Password"
}
```
## ON RESPONSE
````
 Token = res.data.token
 User Object = res.data.userInfo

 Note: password will be returned ""
````
<br></br>

### POST

#### Sellers - /auth/register/:userType  (userType = bidders) --- /auth/register/sellers

```javascript
{
	firstName:"name",
	lastName:"name",
	email:"email@email.com",
	streetAddress:"1370 N 1954 E suit#302",
	city:"New York",
	state:"New York",
	zipCode: "10001",
	username:"UserName",
	password:"Password"
}
```

## ON RESPONSE
````
 Token = res.data.token
 User Object = res.data.userInfo

 Note: password will be returned ""
````

<br></br>
<br></br>
<br></br>

# Items-Restricted

Base URL: https://silent-auctionbw3.herokuapp.com/

### POST

#### Add Item - /api/:sellerId/items (sellerId = id of seller userId) --- exe: /api/1/items

item_name Limit: 100 characters

description Limit: 500 charaters

img_url (optional)
```javascript
{
  item_name:"itemName",
  desciption:"itemDescription",
  img_url:"http:/unsplash.io/",
  price:25.15,
  item_end_time:158642514235,
  seller_id:1
}
```
*Note: You will need to convert your dateTime to valueOf using date.valueOf() for item_end_time. check link below for help*

convertion docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/valueOf
<br></br>
<br></br>

### PUT

#### Update Item - /api/items/:itemId  (itemId = the items id) --- exe: /api/items/1
item_name Limit: 100 characters

description Limit: 500 charaters

img_url (optional)
```javascript
{
  item_name:"itemName",
  desciption:"itemDescription",
  img_url:"http:/unsplash.io/",
  price:25.15,
  item_end_time:158642514235,
  seller_id:1
}
```

*Note: You will need to convert your dateTime to valueOf using date.valueOf() for item_end_time. check link below for help*

convertion docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/valueOf

<br></br>
<br></br>

### DELETE

#### Update Item - /api/items/:itemId  (itemId = the items id) --- exe: /api/items/1

```javascript
No Body Required.
```
<br></br>
<br></br>
<br></br>

# Auctions-Restricted

### POST

#### Add Auction - /api/:sellerId/:itemId/auctions  (sellerId = id of seller userid, itemId = id of item being sold) --- exe: /api/1/1/auctions

bidder_id not required on post or put unless the bidder is making a bid.

auction_start and auction_end are required

```javascript
{
  auction_start:158642514235,
  auction_end:158644678911,
  bidder_id:1,
}
```
<br></br>
<br></br>

### PUT

#### Update Auction - /api/auctions/:auctionId  (auctionId = auctions id) --- exe: /api/auctions/1

bidder_id not required on post or put unless the bidder is making a bid.

After updating bidder_id make sure to do a PUT Request to item to change price

```javascript
{
  auction_start:158642514235,
  auction_end:158644678911,
  bidder_id:1,
}
```
*Note: you can also change other properties of the auction within the body of your axios PUT request but the only 2 required are the auction_start and auction_end.*

<br></br>
<br></br>

### DELETE

#### Delete Auction - /api/auctions/:auctionId  (auctionId = auctions id) --- exe: /api/auctions/1

```javascript
No Body Required.
```