# Silent Auction

What server is expecting from axios requests: [here](docs/DataExe.md)

## Endpoints

Base: https://silent-auctionbw3.herokuapp.com/



:userType = "bidders" or "sellers"

### Auth Routes

| Method | Type     | Endpoint                   | Send                                | Returns                                                                               |
| ------ | -------- | -------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------- |
| POST   | Register | /auth/register/`:userType` | See below                           | Message: `res.data.message`, Token: `res.data.token`, User object: `res.data.userInfo` |
| POST   | Login    | /auth/login/`:userType`    | JSON with "username" and "password" | Message: `res.data.message`, Token: `res.data.token`, User object: `res.data.userInfo`    |

Registration info:

| Bidder & Seller   | Required | Type |
| ----------------- |----------| ----|
| firstName         |yes|string|
| lastName          |yes|string|
| email (unique)    |yes|string|
| streetAddress     |yes|string|
| city              |yes|string|
| state             |yes|string|
| zipCode           |yes|string|
| username (unique) |yes|string|
| password          |yes|string|

#### Example object for register: *Remember: The user type will be in the url for the axios call*

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

## Restricted Routes

*Token must be sent to access*

| Method   | Type               | Endpoint                                 | Send                                           | Returns                    |
| -------- | ------------------ | ---------------------------------------- | ---------------------------------------------- | -------------------------- |
| Items    |                    |                                          |                                                |                            |
| POST     | Add Item           | /api/`:sellerId`/items                       | Item Info*                                     | Message, Item object       |
| PUT      | Update Item        | /api/items/`:itemId`                         | Item Info*                                     | Message, Item object       |
| DELETE   | Delete Item        | /api/items/`:itemId`                         | Item ID                                        | Message                    |
| Auctions |                    |                                          |                                                |                            |
| Post     | Add Auction        | /api/`:sellerId`/`:itemId`/auctions          | Seller ID, Item ID, auction_start, auction_end | message, newAuction object |
| PUT      | Update auction_end | /api/auctions/`auctionId`                    | Auction ID, auction_end                        | Message                    |
| Delete   | Delete Auction     | /api/auctions/`:auctionId`                   | Auction ID                                     | Message                    |
| Users    |                    |                                          |                                                |                            |
| DELETE   | Removes User       | /api/sellers/`:id` or /api/bidders/`:id` | ID                                             | Message                    |

Item Info

- item_name - required
- description - required
- img_url - optional
- price - required
- item_end_time - required

Auction Info

- auction_start: dateTime - required
- auction_end: dateTime - required
- bidder_id: integer  (---This is not required but set when a bidder bids on an item---) note: when a bidder places a bid you will need to update the items price property with PUT request to the item via id.

## Open Routes

| Method | Type                            | Endpoint                               | Send             | Returns        |
| ------ | ------------------------------- | -------------------------------------- | ---------------- | -------------- |
| GET    | Get all Items                   | /api/items                             | Just the request | Items Array    |
| GET    | Get item with specified ID      | /api/items/`:id`                       | Item ID          | Item Array     |
| GET    | Get items from specified Seller | /api/`:sellerId`/items                 | Seller ID        | Items Array    |
| GET    | Get all auctions                | /api/auctions                          | Just the request | Auctions Array |
| GET    | Get specified auction           | /api/auctions/:id                      | Auction ID        | Auctions Array |
| GET    | Get specified seller's auctions | /api/`:sellerId`/auctions              | Seller ID       | Auction Array  |
| GET    | Get all Bidders or Sellers      | /api/bidders, /api/sellers             | Just the request | Array          |
| GET    | Specific Bidder or Seller       | /api/bidders/`:id`, /api/sellers/`:id` | ID               | Array          |

## Seed users

| User Type | User Name | Password |
|--------------|----------------|----------|
| Bidder | bidder1 | 1234 |
| Seller | seller1 | 1234 |

*bidder and seller users go 1-5 e.g. bidder1,bidder2 ect.

# If you have any trouble please contact me

