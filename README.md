# Cow5-hero

Mobile application to play with the cow5 hero during a special game phase.

## Installation

- [ionic 2](http://ionicframework.com/docs/v2/getting-started/installation/)

> $ npm install -g ionic@beta


## How project has been created

> $ ionic start Cow5-hero --v2 --ts

## How run project

>$ cd Cow5-hero
>
>$ ionic serve

Url to call for testing browser with android style :
http://localhost:8100/?ionicplatform=android
\+ change user-agent (ctrl + shift + m on chrome)

Delete ionicplatform parameter for ios style.

## Add mobile device support

> $ sudo npm install -g cordova

### ios

* install [Xcode](https://developer.apple.com/xcode/download/)

> $ ionic emulate ios -lc

### android

* install [android sdk](http://developer.android.com/sdk/index.html)
* install [genymotion](https://www.genymotion.com/) emulator

> $ ionic run android

## Add building for mobile device

### ios

> $ ionic platform add ios

### android

> $ ionic platform add android
