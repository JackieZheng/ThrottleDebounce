# ThrottleDebounce
js throttle debounce 


原生JS 防抖和限流     限制连续重复操作

## html测试：
```
<script>
    var flag;
    function test() {
        flag = throttleDebounce(() = >say('ok'), flag, 2);

    }
    function say(arg) {
        console.log(arg);
    }
</script>
<input type="button" value="test" onclick="javascript:test();">
```
