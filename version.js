$(document).ready(function() {
    var url = purl();
    var key = url.param('key');
    var version = url.param('version');

    var launch = $('#launch');

    if (!key || !version) {
        launch.val('Missing key or version');
    } else {
        $('#key').html(key);
        $('#version').html(version);
    }

    var lms = $('#lms');

    if (localStorage.host) {
        lms.val(localStorage.host);
    }

    function checkButtonEnable() {
        var disabled = !lms.val() || !key || !version;
        launch.attr('disabled', disabled);
    }

    lms.keypress(checkButtonEnable);
    lms.change(checkButtonEnable);
    checkButtonEnable();

    launch.click(function() {
        var host = lms.val();

        localStorage.host = host;

        var uri = new URI(
            host + '/d2l/appsDev/' + key + '/' + version + '/'
        ).normalize();

        window.location.href =uri;
    });
});