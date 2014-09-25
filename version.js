$(document).ready(function() {
    var url = purl();
    var key = url.param('key');
    var version = url.param('version');

    var launch = $('#launch');

    if (!key || !version) {
        launch.val('Missing key or version');
    }

    var lms = $('#lms');

    function checkButtonEnable() {
        launch.attr('disabled', !lms.val());
    }

    lms.keypress(checkButtonEnable);
    lms.change(checkButtonEnable);

    launch.click(function() {
        var uri = new URI(
            lms.val() + '/d2l/appsDev/' + key + '/' + version + '/'
        ).normalize();

        window.location.href =uri;
    });
});