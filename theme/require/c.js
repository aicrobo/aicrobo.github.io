
if(!(window.console && console.log)) {//fix IE that not support console
    console = {
       log: function(){},
       debug: function(){},
       info: function(){},
       warn: function(){},
       error: function(){}
    };
}
if(window.location.href.indexOf('-debug')==-1){
    console['log']=function(){};
    console['info']=function(){};
}
//