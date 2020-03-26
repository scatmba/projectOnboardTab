//Type your code here
function menuopen(){
   kony.print("menuopen");
    function menuopen_Callback() {}
    frmHamburger.menuItem.flxMenuTrans.animate(
    kony.ui.createAnimation({
        "100": {
            "top": "0px",
            "left": "0px",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "rectified": true
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25,
        "direction": kony.anim.DIRECTION_NONE
    }, {
        "animationEnd": menuopen_Callback
    });
}

function menuclose(){
   kony.print("menuclose");
    function menuclose_Callback() {}
    frmHamburger.menuItem.flxMenuTrans.animate(
    kony.ui.createAnimation({
        "100": {
            "top": "0px",
            "left": "-100%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "rectified": true
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25,
        "direction": kony.anim.DIRECTION_NONE
    }, {
        "animationEnd": menuclose_Callback
    });
}
