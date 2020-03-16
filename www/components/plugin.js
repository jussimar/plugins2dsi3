// This is a JavaScript file
function abacaxi(){
  //ação
}
$(document).on("click","#btn1",function(){
    navigator.notification.alert("Alerta tipo 1",abacaxi,'Titulo','sair');
});

$(document).on("click","#btn2",function(){
    function onConfirm(buttonIndex) {
      if(buttonIndex == 1){
        navigator.notification.alert("Escolheu A");
      }else{
        navigator.notification.alert("Escolheu B");
      }
      
    }
    navigator.notification.confirm("Escolha a ou b",onConfirm,'Escolha',['A','B']);
});
$(document).on("click","#btn3",function(){
    navigator.notification.beep(3);
});

$(document).on("click","#btn4",function(){
    navigator.vibrate(6000);
});

$(document).on("click","#btn5",function(){
    var onSuccess = function(position) {
      $("#lat").val(position.coords.latitude);
      $("#long").val(position.coords.longitude);
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});