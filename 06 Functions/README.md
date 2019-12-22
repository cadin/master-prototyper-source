# 6. Functions

You can run this code snippet live on [Repljs.com](https://repljs.com/cadin/Moh-tyzRg).

```
let x = 10

function login( name, password ) {
    // some code happens here to talk to the site backend
    let isLoggedIn = true
    let username = name
    let status = "Online"
    let followers = 500
    let following = 60
    return username + " logged in!"
}

let y = 30

let status = login( "Daniel", "12345" )
```