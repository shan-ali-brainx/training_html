$("#profileImage").click(function(e) {
    $("#imageUpload").click();
});

function preview( uploader ) {
    if ( uploader.files && uploader.files[0] ){
          $('#profileImage').attr('src', 
             window.URL.createObjectURL(uploader.files[0]) );
    }
}

$("#imageUpload").change(function(){
    preview( this );
});

