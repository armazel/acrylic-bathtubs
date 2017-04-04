$(document).ready(function() {

    $("form").submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "sendEmail.php",
            data: th.serialize()
        }).done(function() {
            $('.modal-container').removeClass('open');
            $('.modal-container-submit').addClass('open');
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});