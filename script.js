'use strict';

$(document).ready(function () {
  var limit = $('#limit'),
    count,
    counter = $('#counter'),
    fingers = $('#fingers'),
    toes = $('#toes'),
    interval,
    reset = $('#reset'),
    restart = $('#restart');

  limit.on('input change', function () {
    var val = $(this).val();
    if (val) {
      startCounter()
    }
  });

  reset.on('click', function () {
    count = 0;
    counter.html(count);
    clearHighlight();
    clearInterval(interval);
    limit.val('');
  });

  restart.on('click', function () {
    if(limit.val()) {
      startCounter();
    }
  });

  function clearHighlight() {
    fingers.removeClass('highlight');
    toes.removeClass('highlight');
  }

  function highlightSections() {
    clearHighlight();

    if (count % 3 == 0) {
      fingers.addClass('highlight');
    }
    if (count % 5 == 0) {
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