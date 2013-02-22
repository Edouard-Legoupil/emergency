// modal button
$(document).ready(function() {

        //select all the a tag with name equal to modal
        $('a[name=modal]').click(function(e) {
        //Cancel the link behavior
        e.preventDefault();
        //Get the A tag
        var id = $(this).attr('href');

        //Get the screen height and width
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        //Set height and width to mask to fill up the whole screen
        $('#mask').css({'width':maskWidth,'height':maskHeight});

        //transition effect
        $('#mask').fadeIn(1000);
        $('#mask').fadeTo("slow",0.8);

        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();

        //Set the popup window to center
        $(id).css('top',  winH/2-$(id).height()/2);
        $(id).css('left', winW/2-$(id).width()/2);

        //transition effect
        $(id).fadeIn(2000);

    });

    //if close button is clicked
    $('.window .close').click(function (e) {
        //Cancel the link behavior
        e.preventDefault();
        $('#mask, .window').hide();
    });

    //if mask is clicked
    $('#mask').click(function () {
        $(this).hide();
        $('.window').hide();
    });

});

function isTouchDevice(e) {
    try {
        document.createEvent('TouchEvent');
        return true;
    } catch(error) {
        return false;
    }
}

// pusuh all layers in one array
baseLayers =[];
baseLayers.push('unhcr.map-x6lwltoe');// base layer index 0

mapbox.load(baseLayers,function(o){
        m = mapbox.map('map');
        //m.addLayer(o[0].layer);
        m.ui.zoomer.add();
        m.ui.fullscreen.add();
        m.ui.zoombox.add();
        m.ui.legend.add();
        m.ui.attribution.add();
        m.ui.refresh();
        m.interaction.auto();
        m.interaction.refresh();
        m.ui.zoombox.add();
        m.centerzoom({ lat: 5, lon: 45 }, 3, true);
        m.setZoomRange(2, 8);
        m.smooth(true);


    // add layers
        m.addLayer(mapbox.layer().id('unhcr.map-x6lwltoe'));// base layer  
        m.addLayer(mapbox.layer().id('unhcr.UNHCR-Offices')); // office
        m.addLayer(mapbox.layer().id('unhcr-global-emergencies')); // emergency layer
     //   m.addLayer(mapbox.layer().id('unhcr.pop_flow')); //displacement arrows
     //   m.addLayer(mapbox.layer().id('unhcr.unhcr-global-relief')); //intervention
     //   m.addLayer(mapbox.layer().id('unhcr.unhcr-global-staff')); // deployement 
     //   m.addLayer(mapbox.layer().id('unhcr.unhcr-global-pct-funded')); //expenditure 

});

    // Run easings when certain links are clicked

      document.getElementById('intro').onclick = function() {
        m.ease.location({ lat: 10, lon: 10 }).zoom(3).optimal();
        return false;
      }
      
      document.getElementById('explore').onclick = function() {
        m.ease.location({ lat: 34.7, lon: 38.2 }).zoom(6).optimal();       
        m.enableLayer('unhcr.pop_flow'); //displacement arrows
        m.disableLayer('unhcr.UNHCR-Offices'); // offices
        m.disableLayer('unhcr.unhcr-global-emergencies'); // emergency layer
        m.disableLayer('unhcr.unhcr-global-relief'); //intervention
        m.disableLayer('unhcr.unhcr-global-staff'); // deployement
        m.disableLayer('unhcr.unhcr-global-pct-funded'); //expenditure
        return false;
      }
      document.getElementById('syr').onclick = function() {
        m.ease.location({ lat: 34.7, lon: 38.2 }).zoom(6).optimal();
        m.enableLayer('unhcr.pop_flow'); //displacement arrows
        m.disableLayer('unhcr.UNHCR-Offices'); // offices
        m.disableLayer('unhcr.unhcr-global-emergencies'); // emergency layer
        m.disableLayer('unhcr.unhcr-global-relief'); //intervention
        m.disableLayer('unhcr.unhcr-global-staff'); // deployement
        m.disableLayer('unhcr.unhcr-global-pct-funded'); //expenditure
        return false;
      }
      document.getElementById('mli').onclick = function() {
        m.ease.location({ lat: 17.1, lon: -1.9 }).zoom(6).optimal();
        m.enableLayer('unhcr.pop_flow'); //displacement arrows
        m.disableLayer('unhcr.UNHCR-Offices'); // offices
        m.disableLayer('unhcr.unhcr-global-emergencies'); // emergency layer
        m.disableLayer('unhcr.unhcr-global-relief'); //intervention
        m.disableLayer('unhcr.unhcr-global-staff'); // deployement
        m.disableLayer('unhcr.unhcr-global-pct-funded'); //expenditure
        return false;
      }
      document.getElementById('ssd').onclick = function() {
        m.ease.location({ lat: 7.2, lon: 30.5 }).zoom(6).optimal();
        m.enableLayer('unhcr.pop_flow'); //displacement arrows
        m.disableLayer('unhcr.UNHCR-Offices'); // offices
        m.disableLayer('unhcr.unhcr-global-emergencies'); // emergency layer
        m.disableLayer('unhcr.unhcr-global-relief'); //intervention
        m.disableLayer('unhcr.unhcr-global-staff'); // deployement
        m.disableLayer('unhcr.unhcr-global-pct-funded'); //expenditure
        return false;
      }
      document.getElementById('kiv').onclick = function() {
        m.ease.location({ lat: -1.68, lon: 29.23 }).zoom(7).optimal();
        m.enableLayer('unhcr.pop_flow'); //displacement arrows
        m.disableLayer('unhcr.UNHCR-Offices'); // offices
        m.disableLayer('unhcr.unhcr-global-emergencies'); // emergency layer
        m.disableLayer('unhcr.unhcr-global-relief'); //intervention
        m.disableLayer('unhcr.unhcr-global-staff'); // deployement
        m.disableLayer('unhcr.unhcr-global-pct-funded'); //expenditure
        return false;
      }

      document.getElementById('staff').onclick = function() {
        m.disableLayer('unhcr.pop_flow');
        m.disableLayer('unhcr.unhcr-global-emergencies'); // emergency layer
        m.disableLayer('unhcr.unhcr-global-pct-funded'); //expenditure
        m.disableLayer('unhcr.unhcr-global-relief'); //intervention    
        m.enableLayer('unhcr.unhcr-global-staff'); // deployement
        m.enableLayer('unhcr.UNHCR-Offices'); // offices
        return false;
      }

      document.getElementById('item').onclick = function() {
        m.disableLayer('unhcr.pop_flow'); //displacement arrows
        m.disableLayer('unhcr.unhcr-global-emergencies'); // emergency layer
        m.disableLayer('unhcr.unhcr-global-staff'); // deployement
        m.disableLayer('unhcr.unhcr-global-pct-funded'); //expenditure
        m.disableLayer('unhcr.UNHCR-Offices'); // offices       
        m.addLayer(mapbox.layer().id('unhcr.unhcr-global-relief')); //intervention
        m.enableLayer('unhcr.unhcr-global-relief'); //intervention
        return false;
      }

      document.getElementById('appeal').onclick = function() {
        m.disableLayer('unhcr.pop_flow'); //displacement arrows
        m.disableLayer('unhcr.unhcr-global-emergencies'); // emergency layer
        m.disableLayer('unhcr.unhcr-global-staff'); // deployement
        m.disableLayer('unhcr.UNHCR-Offices'); // offices
        m.disableLayer('unhcr.unhcr-global-relief'); //intervention
        m.enableLayer('unhcr.unhcr-global-pct-funded'); //expenditure
        return false;
      }
/**/

//navigation in the storyboard - based on twitterbootstrap hero
        function movetoSyria() {
            $('#intro').css('display','none');
            $('#explore').css('display','none');
            $('#nav-mli').css('display','none');
            $('#nav-ssd').css('display','none');
            $('#nav-kiv').css('display','none');
            $('#nav-0').fadeIn('300');
            $('#nav-1').fadeIn('300');
            $('#nav-2').fadeIn('300');
            $('#nav-syr').css('display','block').addClass('cont0').removeClass('cont1').removeClass('cont2');
            }
        function movetoMali() {
            $('#intro').css('display','none');
            $('#explore').css('display','none');
            $('#nav-ssd').css('display','none');
            $('#nav-kiv').css('display','none');
            $('#nav-syr').css('display','none');
            $('#nav-0').fadeIn('300');
            $('#nav-1').fadeIn('300');
            $('#nav-2').fadeIn('300');
            $('#nav-mli').css('display','block').addClass('cont0').removeClass('cont1').removeClass('cont2');
            }
        function movetoSouthsudan() {
            $('#intro').css('display','none');
            $('#explore').css('display','none');
            $('#nav-syr').css('display','none');
            $('#nav-kiv').css('display','none');
            $('#nav-mli').css('display','none');
            $('#nav-0').fadeIn('300');
            $('#nav-1').fadeIn('300');
            $('#nav-2').fadeIn('300');
            $('#nav-ssd').css('display','block').removeClass('cont0').removeClass('cont1').addClass('cont2');
            }
        function movetoKivu() {
            $('#intro').css('display','none');
            $('#explore').css('display','none');
            $('#nav-syr').css('display','none');
            $('#nav-mli').css('display','none');
            $('#nav-ssd').css('display','none');
            $('#nav-0').fadeIn('300');
            $('#nav-1').fadeIn('300');
            $('#nav-2').fadeIn('300');
            $('#nav-kiv').css('display','block').removeClass('cont0').removeClass('cont2').addClass('cont1');
            }
        function movetoIntro() {
            $('#nav-syr').css('display','none');
            $('#nav-mli').css('display','none');
            $('#nav-ssd').css('display','none');
            $('#nav-kiv').css('display','none');
            $('#explore').fadeIn('300');
            $('#intro').removeClass('intro').removeClass('cont1').removeClass('cont2');
            $('.side-nav').css('width','0px')
                .css('padding','10px 0px 0px 0px');
            }

// Precise what should be displayed
        $('#explore').click(function(e){
            e.preventDefault();
            $('#syria').addClass('on-page');
            $('.side-nav').css('width','122px')
                .css('padding','10px 66px 10px 0px');
            $('#intro').removeClass('on-page');
            movetoSyria();
            });
        $('#intro').click(function (e) {
            e.preventDefault();
            movetoIntro();
            $('#kivu').removeClass('on-page');
            $('#mali').removeClass('on-page');
            $('#southsudan').removeClass('on-page');
            $('#syria').removeClass('on-page');
            $('#intro').addClass('on-page');
            movetoIntro();
            });
        $('.side-nav ul a').click(function (e) {
        e.preventDefault();
        $('.side-nav ul a').removeClass('on-page');
        $(this).addClass('on-page');
                if(this.id=='syr') {
                        movetoSyria();
                }
                if(this.id=='mli'){
                        movetoMali();
                }
                if(this.id=='ssd') {
                        movetoSouthsudan();
                }
                if(this.id=='kiv') {
                        movetoKivu();
                }
                if(this.id=='intro') {
                        movetoIntro();
                }
        });

        $('#syria').click(function(e){
            e.preventDefault();
            $('#syria').addClass('on-page');
            $('#mali').removeClass('on-page');
            $('#kivu').removeClass('on-page');
            $('#southsudan').removeClass('on-page');
            $('#intro').removeClass('on-page');
            $('#conclusion').removeClass('on-page');
            movetoSyria();
            });
        $('#mali').click(function(e){
            e.preventDefault();
            $('#mali').addClass('on-page');
            $('#southsudan').removeClass('on-page');
            $('#syria').removeClass('on-page');
            $('#kivu').removeClass('on-page');
            $('#intro').removeClass('on-page');
            $('#conclusion').removeClass('on-page');
            movetoMali();
            });
        $('#southsudan').click(function(e){
            e.preventDefault();
            $('#southsudan').addClass('on-page');
            $('#kivu').removeClass('on-page');
            $('#syria').removeClass('on-page');
            $('#mali').removeClass('on-page');
            $('#intro').removeClass('on-page');
            $('#conclusion').removeClass('on-page');
            movetoSouthsudan();
            });
        $('#kivu').click(function(e){
            e.preventDefault();
            $('#kivu').addClass('on-page');
            $('#mali').removeClass('on-page');
            $('#syria').removeClass('on-page');
            $('#southsudan').removeClass('on-page');
            $('#intro').removeClass('on-page');
            $('#conclusion').removeClass('on-page');
            movetoKivu();
            });

