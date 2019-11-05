/** 限制连续重复操作
fn              执行的操作
flag            全局唯一标识
type            1：立即且只执行第一次（一般控制连续不变参的事件）；
                2：只执行最后一次且延时执行（一般控制连续且变参的事件）；
                3：允许多次执行，两次执行间隔大于时间间隔（一般纯粹控制时间间隔）。
milliseconds    限定时间间隔（毫秒）,默认500
			**/
var throttleDebounce = function(fn, flag, type, milliseconds = 500) {
    var d = new Date();    

    /***测试用，可随下边的console.log()删除***/
    var t = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds();
    if (typeof(_index) == 'undefined') {
        _index = 0;
    } else {
        _index++;
    }

    switch (type) {
    case 1:
        //立即执行第一次					
        if (typeof(flag) == 'undefined' || flag.getTime() + milliseconds < d.getTime()) {
            fn.apply();
            console.log(_index + "、Allowed " + t);
        } else {
            console.log(_index + "、Egnored " + t);
        }
        flag = d;
        break;
    case 2:
        //延时执行最后一次
        if (typeof(flag) != 'undefined') {
            clearTimeout(flag);
            console.log(_index + "、Egnored " + t);
        }
        flag = setTimeout(() = >{
            fn.apply();
            console.log(_index + 1 + "、Allowed " + t);
        },
        milliseconds);
        break;
    case 3:
        //执行大于上次成功执行时间
        if (typeof(flag) == 'undefined' || flag.getTime() + milliseconds < d.getTime()) {
            flag = d;
            fn.apply();
            console.log(_index + "、Allowed " + t);
        } else {
            console.log(_index + "、Egnored " + t);
        }
        break;
    }
    return flag;
}
