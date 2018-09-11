
var searchParams = new URLSearchParams(search);

// References jQuery
var divPeople = $('#divPeople');

// Functions to renderizet people

function renderizetPerson( people ){
    var _html = '';

    html += '<li>';
    html += '<a href="javascript:void(0)" class="active"> Chat de <span> '+ search.get('room') +'</span></a>';
    html += '</li>';

    for( var i = 0; i < people.length; i ++ ){
        html += '<li>';
        html += '<a data-if="'+ people[ i ].id +'">'
             + '<img src="assets/images/users/1.jpg" alt="user-img" class="img-circle"> <span>'+ people[ i ].name 
             +' <small class="text-success">online</small></span></a>';
        html += '</li>';
    }
}