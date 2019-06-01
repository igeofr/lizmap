lizMap.events.on({
   'uicreated': function(e){
             if( $('#info-user-login').text()=="" ){  // If user is logged in
                //Hide the buttons
                $('.nav-list .selectiontool').css({
                  'display':'none'
                });
                $('.nav-list .attributeLayers').css({
                  'display':'none'
                });
              }
          }
   });
