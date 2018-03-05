$(function(){
    $('#burst').on('click', function(){
        var u = document.f.url;
        var t = document.f.txt;
        var r = document.f.recycle;
        var id = decodeURIComponent(u.value.match(/room_id=(.*?)(&|$)/)[1]);
        var ca = decodeURIComponent(u.value.match(/chatter_auth=(.*?)(&|$)/)[1]);
        var info = {
            'action' : 'ChatRoom',
            'room_id' : id,
            'chatter_auth' : ca,
            'chat' : t.value
        }
        var fr = document.f.freq.selectedIndex + 2;

        for(var i = 0; i < fr + 1; i++){
            if(i < fr){
                $.ajax({
                    url : u.value,
                    method : 'post',
                    data : info
                })
            }
            else{
                $('#danger').html('<h1 style="color:#f36">Complete!</h1>');
                // r.value = location.href + '&rid=' + id + '&cha=' + ca + '&x=' + t.value;
            }
        }
    })
})