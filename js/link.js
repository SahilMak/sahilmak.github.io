/**
 * Created by Sahil Makhijani on 3/4/2017.
 */
$(function () {
    $("#numbah").click(function () {
        if ($(this).attr("href") == "https://media.makeameme.org/created/NICE-TRY.jpg") {
            $(this).attr("href", "http://www.quickmeme.com/img/98/984b226a5f2a84d0feb6dd59bb1e915072771cd55a6bbd8be611288645399cfa.jpg");
        }
        else {
            $(this).attr("href", "https://media.makeameme.org/created/NICE-TRY.jpg");
        }
    });
});