<span style="color:green">Green text means the type of request</span>
</br>
<span style="color:yellow">Yellow text is url or sub url</span>
### Table of Contents
- Auth
  - [Logins](#Logins )
  - [Registers](#Registers)
- Restricted - *Requires Token*
  - [Items](#Items-Restricted)
  - [Auctions](#Auctions-Restricted)

# Logins
### <span style="color:Green">POST</span>

Base URL: https://silent-auctionbw3.herokuapp.com/

#### Bidders - <span style="color:yellow">/auth/register/:userType</span>  (userType = bidders) --- <span style="color:yellow">/auth/register/bidders

```javascript
{
  username:"username",
  password:"password"
}
```

## Token = res.data.token
## User Object = res.data.user
### password will be returned as Hashed code
<br></br>

#### Sellers - <span style="color:yellow">/auth/register/:userType</span>  (userType = bidders) --- <span style="color:yellow">/auth/register/sellers

```javascript
{
  username:"username",
  password:"password"
}
```

## Token = res.data.token
## User Object = res.data.user
### *password will be returned as Hashed code*
<br></br>
<br></br>
<br></br>
# Registers

### <span style="color:Green">POST</span>

Base URL: https://silent-auctionbw3.herokuapp.com/

#### Bidders - <span style="color:yellow">/auth/register/:userType</span>  (userType = bidders) --- <span style="color:yellow">/auth/register/bidders

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

## Token = res.data.token
## User Object = res.data.newUser
### *password will be returned as Hashed code*
<br></br>

#### Sellers - <span style="color:yellow">/auth/register/:userType</span>  (userType = bidders) --- <span style="color:yellow">/auth/register/sellers

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

## Token = res.data.token
## User Object = res.data.newUser
### *password will be returned as Hashed code*

<br></br>
<br></br>
<br></br>

# Items-Restricted

Base URL: https://silent-auctionbw3.herokuapp.com/

### <span style="color:Green">POST</span>

#### Add Item - <span style="color:yellow">/api/:sellerId/items</span>  (sellerId = id of seller userId) --- exe: <span style="color:yellow">/api/1/items</span>

item_name Limit: 100 characters

description Limit: 100 charaters

img_url (optional)
```javascript
{
  item_name:"itemName",
  desciption:"itemDescription",
  img_url:"http:/unsplash.io/",
  price:25.15,
  item_end_time:"2019-09-29T00:00:54.047Z",
  seller_id:1
}
```
*Note: You will need to convert your dateTime to JSON for item_end_time. check link below for help*

convertion docs: https://www.w3schools.com/jsref/jsref_tojson.asp
<br></br>
<br></br>

### <span style="color:Green">PUT</span>

#### Update Item - <span style="color:yellow">/api/items/:itemId</span>  (itemId = the items id) --- exe: <span style="color:yellow">/api/items/1</span>
item_name Limit: 100 characters

description Limit: 100 charaters

img_url (optional)
```javascript
{
  item_name:"itemName",
  desciption:"itemDescription",
  img_url:"http:/unsplash.io/",
  price:25.15,
  item_end_time:"2019-09-29T00:00:54.047Z",
  seller_id:1
}
```

*Note: You will need to convert your dateTime to JSON for item_end_time. check link below for help*

convertion docs: https://www.w3schools.com/jsref/jsref_tojson.asp

<br></br>
<br></br>

### <span style="color:Green">Delete</span>

#### Update Item - <span style="color:yellow">/api/items/:itemId</span>  (itemId = the items id) --- exe: <span style="color:yellow">/api/items/1</span>

```javascript
No Body Required.
```
<br></br>
<br></br>
<br></br>

# Auctions-Restricted

### <span style="color:Green">POST</span>

#### Add Auction - <span style="color:yellow">/api/:sellerId/:itemId/auctions</span>  (sellerId = id of seller userid, itemId = id of item being sold) --- exe: <span style="color:yellow">/api/1/1/auctions</span>

bidder_id not required on post or put unless the bidder is making a bid.

```javascript
{
  auction_start:"2019-09-29T00:00:54.047Z",
  auction_end:"2020-03-17T13:40:32.363Z",
  bidder_id:1,
}
```
<br></br>
<br></br>

### <span style="color:Green">PUT</span>

#### Add Auction - <span style="color:yellow">/api/auctions/:auctionId</span>  (auctionId = auctions id) --- exe: <span style="color:yellow">/api/auctions/1</span>

bidder_id not required on post or put unless the bidder is making a bid.

After updating bidder_id make sure to do a <span style="color:green">PUT</span> Request to item to change price

```javascript
{
  auction_start:"2019-09-29T00:00:54.047Z",
  auction_end:"2020-03-17T13:40:32.363Z",
  bidder_id:1,
}
```

*Note: auction_start is not required on a <span style="color:green">PUT</span> Request*