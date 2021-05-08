$('.bootpopup').click(function () {
    var frametarget = $(this).attr('href');
    var targetmodal = $(this).attr('target');
    if (targetmodal == undefined) {
        targetmodal = '#popupModal';
    } else {
        targetmodal = '#' + targetmodal;
    }
    if ($(this).attr('title') != undefined) {
        $(targetmodal + ' .modal-header h3').html($(this).attr('title'));
        $(targetmodal + ' .modal-header').show();
    } else {
        $(targetmodal + ' .modal-header h3').html('');
        $(targetmodal + ' .modal-header').hide();
    }
    $(targetmodal).on('show', function () {
        $('iframe').attr("src", frametarget);
    });
    $(targetmodal).modal({ show: true });
    return false;

});