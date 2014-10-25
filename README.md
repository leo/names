names
=====

This minimal jquery-plugin replaces every occurence of a specific element with a disered name, gender oder country from [uinames](http://uinames.com). It's perfect for developing themes for example.

### usage

Just [download](https://cdn.rawgit.com/leo/names/master/jquery.names.min.js) the plugin and implement it like this:

```javascript
$('span').names();
```

### configuration

If you need to specify the requested names, just use the following options:

```javascript
$('span').names({
    
    type: surname               // Either 'name', 'surname', 'gender' or 'country'
    country: 'germany',         // One of the countries from here: http://git.io/WCYA3Q
    gender: 'female',           // Either 'male' or 'female'
    complete: function() {}     // A function to be executed after loading all names
        
});
```

<br>
****
<br>
**Important:** Using multiple different HTML-elements is currently not supported (but will be added soon).

License: <a href="http://www.wtfpl.net/"><img src="http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png" width="80" height="15" alt="WTFPL" /></a>

If you're having trouble with my plugin, pleace report them to me.<br>
I'll to my best to solve them. Thanks! :)
