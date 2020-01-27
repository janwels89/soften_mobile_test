// Inhalt des Scripts devicemotion.js:
console.log("I am Alive! - devicemotion.js");

let maxi = -1;

if (window.DeviceMotionEvent) {
    window.DeviceMotionEvent.requestPermission()
    document.getElementById("dmeSupported").innerText = "OK - Device Motion wird unterstützt!";
    window.addEventListener('devicemotion', function (event) {
        document.getElementById("xBeschl").innerHTML = 'x ' + event.acceleration.x.toFixed(2);
        document.getElementById("yBeschl").innerHTML = 'y ' + event.acceleration.y.toFixed(2);
        document.getElementById("zBeschl").innerHTML = 'z ' + event.acceleration.z.toFixed(2);
        maxi = event.acceleration.z;
        this.document.getElementById("maxz").innerHTML = 'Max Z: ' + maxi;
    });
} else {
    document.getElementById("dmeSupported").innerText = "Device Motion wird nicht unterstützt!";
}
