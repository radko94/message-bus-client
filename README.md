# Hi

## This is a package 3 of 3

This is the 'Message Client' package. It can be installed inside your application,
so you can start emit/receive events. Every event contains 'eventName' which is
string and 'data' which is again string.

[Reference to Publish Subscribe Pattern](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern "Reed More")


## Creating the client

When creating an instance, you will be prompted to provide an 'host' and a 'port'.

Reference to 'Creating the server' section where the 'host' and the 'port' is provided.

Here we need the same 'host' and 'port' se we connect to the server (bus or whatever).


## Emitting and receiving event

### publish(eventObj: { eventName: string, data: string })

1. The 'eventName' property

When subscribing, this is the property we are listening to. It can be something like 

[ 
    'get_news_feed_request', 
    'get_news_feed_success', 
    'get_news_feed_error'
]

or it can be whatever you want.

2. The 'data' property

Here you can fill whatever you want. Strings, stringified numbers, stringified objects.
Maybe the most obvious case is that you would want to send objects, so you should use
'JSON.stringify({ key: value })' and receiving it like 'JSON.parse(data) as IEvent'.

### subscribeForEvent(eventName: string)

Reference to "The 'eventName' property" a little bit above.

In here we are using RxJS to create an observable from the socket`s on 'data' event.
Then we are filtering the received event and passing the only event in which we are
interested in.

#### Input: the event name which we are interest to
#### Output: Observable<string>

The string can be whatever you have 
published: real string | stringified number | stringified object; so keep that in mind


### Models (package 1 of 3)

[Reference to Models github repo](https://github.com/radko94/message-bus-models "Models")
[Reference to Npmjs package page](https://www.npmjs.com/package/message-bus-models "Npmjs package page")

### Message Bus (package 2 of 3)

[Reference to Message Bus github repo](https://github.com/radko94/message-bus-server "Message Bus")


## Note
The package is in the pre-release version, so it can be updated very soon (if needed).