(function(adv,group){
    'use strict';
    if(adv){
        block_sponsor();
        setInterval(block_sponsor, 1500);
    }
    if(group){
        block_group();
        setInterval(block_group, 1000);
    }
    


})(1,0);

function block_sponsor() {
        let ad_blocker = 'a[aria-label="Sponsored"]' ;
        var list = document.querySelectorAll(ad_blocker);
        list.forEach(el => {
          try {
            el.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove() ;
          }
          catch(err) {
            console.log(err);
          }
      });
      }
      function block_group() {
        let group_blocker = 'i[class="hu5pjgll m6k467ps sp_IJ2krMpsgey sx_91bbee"]' ;
        var list = document.querySelectorAll(group_blocker);
        list.forEach(el => {
          try {
            el.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove() ;
          }
          catch(err) {
            console.log(err);
          }
      });

    }

    