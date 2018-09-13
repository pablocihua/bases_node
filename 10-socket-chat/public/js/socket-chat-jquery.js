var search = window.location.search,
    searchParams = new URLSearchParams(search);

// References jQuery
var divPeople = $('#divPeople'),
    formSend = $('#formSend');
    txtMessage = $('#txtMessage');
    divChatbox = $('#divChatbox');

// Functions to renderizet people

function renderizetPerson( people ){
    var _html = '';

    _html += '<li>';
    _html += '<a href="javascript:void(0)" class="active"> Chat de <span> '+ ( searchParams.room || searchParams.get('room')) +'</span></a>';
    _html += '</li>';

    for( var i = 0; i < people.length; i ++ ){
        _html += '<li>';
        _html += '<a data-id="'+ people[ i ].id +'">'
             + '<img src="assets/images/users/1.jpg" alt="user-img" class="img-circle"> <span>'+ people[ i ].name 
             +' <small class="text-success">online</small></span></a>';
        _html += '</li>';
    }

    divPeople.html( _html );
}

// Listeners

// divChatbox.on('')
function renderizetMessage( message, me ){
    var _html = '',
        _date = new Date( message.date ),
        _hour = _date.getHours() + '' + _date.getMinutes();

    if( message.name === 'Administrator'){
        adminClass = 'danger';
    } else {
        adminClass = 'info';
    }

    if( me ){
        _html += '<li class="reverse">';
        _html += '    <div class="chat-content">';
        _html += '        <h5>'+ message.name +'</h5>';
        _html += '        <div class="box bg-light-inverse">'+ message.message +'</div>';
        _html += '    </div>';
        _html += '    <div class="chat-img"><img src="assets/images/users/5.jpg" alt="user" /></div>';
        _html += '    <div class="chat-time">'+ _hour +'</div>';
        _html += '</li>';
    } else {
        _html += '<li class="animated fadeIn">';
        if( message.name === 'Administrator'){
            _html += '    <div class="chat-img"><img src="assets/images/users/2.jpg" alt="user" /></div>';
        }
        _html += '    <div class="chat-content">';
        _html += '        <h5>'+ message.name +'</h5>';
        _html += '        <div class="box bg-light-'+ adminClass +'">'+ message.message +'</div>';
        _html += '    </div>';
        _html += '    <div class="chat-time">'+ _hour +'</div>';
        _html += '</li>';
    }

    divChatbox.append( _html );
}

function scrollBottom() {
    // selectors
    var newMessage = divChatbox.children('li:last-child');

    // heights
    var clientHeight = divChatbox.prop('clientHeight');
    var scrollTop = divChatbox.prop('scrollTop');
    var scrollHeight = divChatbox.prop('scrollHeight');
    var newMessageHeight = newMessage.innerHeight();
    var lastMessageHeight = newMessage.prev().innerHeight() || 0;

    if (clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollHeight) {
        divChatbox.scrollTop(scrollHeight);
    }
}

divPeople.on('click', 'a', function(){
    var _id = $(this).data('id');

    if( _id ){

        console.log(_id)
    }
});

formSend.on('submit', function( e ){ e.preventDefault();
    if( txtMessage.val().trim().length === 0){
        return;
    }
    console.log( txtMessage )
    socket.emit('createMessage', {
        name: searchParams.get('name'),
        message: txtMessage.val()
    }, function( message ){
        // console.log('message server: ', message );
        txtMessage.val('').focus();
        renderizetMessage( message, true );
        scrollBottom();
    });
})