# names

This package acts as an API client for my favorite generator of random names: [uinames](http://uinames.com). It's perfect for prototyping stuff or examples of real names in production apps.

### usage

Just [download](https://cdn.rawgit.com/leo/names/master/jquery.names.min.js) the plugin and implement it like this:

```javascript
$('span').names();
```

### configuration

If you need to specify the requested names, just use the following options:

```javascript
$('span').names({

    type: 'surname',            // Either 'name', 'surname', 'gender' or 'country'
    country: 'germany',         // One of the countries from here: http://git.io/WCYA3Q
    gender: 'female',           // Either 'male' or 'female'
    complete: function() {}     // A function to be executed after loading all names

});
```

<br>
****
<br>
**!!:** The use of multiple different HTML-tags is currently not supported (but will be added soon).

If you're having trouble with my plugin, pleace report them to me.<br>
I'll to my best to solve them. Thanks! :)
