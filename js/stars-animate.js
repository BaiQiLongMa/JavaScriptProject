/********************* Header Section Begins *********************/
//Stars JS
//Stars Animate
/********************* Header Section Ends *********************/


$(function () {
 //=========================Stars js=========================//

            var div1 = "<div class='star twinkle-star-1' data-scroll-speed='2'></div>";
            var div2 = "<div class='star twinkle-star-2' data-scroll-speed='4'></div>";
            var div3 = "<div class='star twinkle-star-3' data-scroll-speed='6'></div>";
            var min = 0;
            var max = 100

            for (x = 0; x < 200; x++) {
                jQuery('.sky-star1').append(jQuery(div1).css({"left": Math.floor(Math.random()*(max-min+1)+min)+"%", "top": Math.floor(Math.random()*(max-min+1)+min)+"%"}));      
            }
            for (x = 0; x < 250; x++) {
                jQuery('.sky-star2').append(jQuery(div2).css({"left": Math.floor(Math.random()*(max-min+1)+min)+"%", "top": Math.floor(Math.random()*(max-min+1)+min)+"%"}));
            }
            for (x = 0; x < 350; x++) {        
                jQuery('.sky-star3').append(jQuery(div3).css({"left": Math.floor(Math.random()*(max-min+1)+min)+"%", "top": Math.floor(Math.random()*(max-min+1)+min)+"%"}));
            }

// There is a little delay in load, which I would normally fix but focusing on the task at hand and not design.



//=========================Stars Animate on scroll js=========================//

        jQuery.fn.moveIt = function () {
            var jQuerywindow = jQuery(window);
            var instances = [];

            jQuery(this).each(function () {
                instances.push(new moveItItem(jQuery(this)));
            });

            window.onscroll = function () {
                var scrollTop = jQuerywindow.scrollTop();
                instances.forEach(function (inst) {
                    inst.update(scrollTop);
                });
            }
        }

        var moveItItem = function (el) {
            this.el = jQuery(el);
            this.speed = parseInt(this.el.attr('data-scroll-speed'));
        };

        moveItItem.prototype.update = function (scrollTop) {
            var pos = scrollTop / this.speed;
            this.el.css('transform', 'translateY(' + -pos + 'px)');
        };


            jQuery('[data-scroll-speed]').moveIt();

    });