'use strict';

$(document).ready(function () {
    var limit = $('#limit'),
        count,
        counter = $('#counter'), 
        fingers = $('#fingers'), 
        toes = $('#toes'), 
        interval;
    
    limit.on('input change', function() {
        var val = $(this).val();
        startCounter()
    })
    
    
    function highlightSections() {
        fingers.removeClass('highlight');
        toes.removeClass('highlight');
        
        if (count % 3 ==0) {
            fingers.addClass('highlight');
        }
        if (count % 5 ==0) {
            toes.addClass('highlight');
        }
    }
    
    function updateCounter() {
        if (count >= limit.val()) {
            clearInterval(interval);
        } else {
            counter.html(++count);
            highlightSections();
        }        
    }
    
    function startCounter() {
        count = 0;
        interval = setInterval(updateCounter, 1000);
    }
});