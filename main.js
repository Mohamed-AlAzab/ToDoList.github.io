$(function (){

  'use strict';

  var newTask = $('.task-input');

  $('.add-task').on('submit', function(e) {
    
    e.preventDefault();

    if(newTask.val() !== ''){

      $('<li>'+ newTask.val() +'</li>').appendTo('.tasks');

      newTask.val('');
    }

  });

  $('.tasks').on('click', 'li', function () {

    $(this).css('text-decoration', 'line-through').delay(400).fadeOut(800, function(){

      $(this).remove();

    }); 

  });

});
