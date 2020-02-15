# restbestLite v1.0.0

restBest apiDoc Documentation

- [Article](#article)
	- [Delete article](#delete-article)
	- [Create article](#create-article)
	- [Delete all articles](#delete-all-articles)
	- [Retrieve article](#retrieve-article)
	- [Retrieve articles](#retrieve-articles)
	- [Update article](#update-article)
	
- [Authentication](#authentication)
	- [User Authentication](#user-authentication)
	
- [Message](#message)
	- [Create message](#create-message)
	- [Delete all messages](#delete-all-messages)
	- [Delete message](#delete-message)
	- [Retrieve message](#retrieve-message)
	- [Retrieve messages](#retrieve-messages)
	- [Update message](#update-message)
	


# Article

## Delete article



	DELETE /articles/:id


## Create article



	POST /articles


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| content			| 			|  <p>Article's content.</p>							|

## Delete all articles



	DELETE /articles/all


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| admintoken			| String			|  <p>admin access token.</p>							|

## Retrieve article



	GET /articles/:id


## Retrieve articles



	GET /articles


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update article



	PUT /articles/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| content			| 			|  <p>Article's content.</p>							|

# Authentication

## User Authentication



	POST /auth


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username			| String			|  <p>User's username.</p>							|
| password			| String			|  <p>User's password.</p>							|
| masterkey			| String			|  <p>admin access token.</p>							|

# Message

## Create message



	POST /messages


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| content			| 			|  <p>Message's content.</p>							|

## Delete all messages



	DELETE /messages/all


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| admintoken			| String			|  <p>admin access token.</p>							|

## Delete message



	DELETE /messages/:id


## Retrieve message



	GET /messages/:id


## Retrieve messages



	GET /messages

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| x-total-count			| Number			|  <p>Messages count.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update message



	PUT /messages/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| content			| 			|  <p>Message's content.</p>							|


