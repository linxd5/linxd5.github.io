/**
 * Created by lindayong on 2016/11/6.
 */


function tomatoes_js () {

    // remaining_time = 1500;
    all_time = 1500;
    remaining_time = all_time;
    function downCount(element) {
        if (remaining_time == 0) {
            element.removeAttribute('disabled');
            element.style.cursor='pointer';
            element.innerHTML = 'Start Pomo';
            remaining_time = all_time;
        } else {
            element.setAttribute('disabled', true);
            element.style.cursor='default';
            minutes = addZero(parseInt(remaining_time / 60));
            seconds = addZero(remaining_time % 60);
            element.innerHTML = minutes + ":" + seconds;
            remaining_time--;
            setTimeout(function () {
                downCount(element);
            }, 1000)
        }
    }

    start_button = document.getElementById('button').getElementsByTagName('button')[0];
    start_button.onclick = function () {
        downCount(this);
    };

}

addLoadEvent(tomatoes_js);
