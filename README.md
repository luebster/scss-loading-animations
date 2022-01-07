# SCSS-Loading-Animations
A set of SCSS mixins for single element loaders and spinners 

[View examples](https://luebster.github.io/scss-loading-animations/)

## Getting started


```
npm install scss-loading-animations
```
```
bower install scss-loading-animations
```

OR

* Clone or download repo
* Include `src` folder to your project



## Usage

Create a div with your custom loader class name.

```html
<div class="your-loader"></div>
```

In your custom class name include a mixin of a loader. All loaders are ordered by number, so you will have to take a look in examples folder for your loader number.

```scss
.your-loader {
    @include loader01;
}
```

## Defaults
Default settings for the loaders are in `_variables.scss`.

```scss
$loader-color: #0052ec;
$loader-size: 56px;
$loader-height: 20px;
$loader-border-size: 8px;
$loader-gap: 12px;
$loader-animation-duration: 1s;
```

But you can also override these default settings in the mixin call:

```scss
@include loader09($size: 10px, $height: 48px, $gap: 8px, $duration: 1s, $align: middle);
```

All loaders can be also aligned to center, while including the mixin with parameter `$align`. `$align: center` is just for x axis, `$align: middle` is for both axes.

**PARAMETERS**


Parameter | Type | Default value |
------------ | ------------- | ------------- |
`$size` | Number | `$loader-size` |
`$height` | Number | `$loader-height` |
`$border-size` | Number | `$loader-border-size` |
`$color` | Color | `$loader-color` |
`$duration` | Time | `$loader-animation-duration` |
`$gap` | Number | `$loader-gap` |
`$align` | Keyword | `null` |


**NOTE**: Some loaders may not need `$height` and `$gap` parameters.

## Performance issues

Some loaders which are using `box-shadow` for animation may be causing high cpu usage and lag, I'll need to look into more details and fix it, if it's possible.

**ATTRIBUTION**

This project is a continuation from [SpinThatShit](https://github.com/MatejKustec/SpinThatShit), which is no longer being maintained [per the author](https://github.com/MatejKustec/SpinThatShit/issues/10#issuecomment-984859922).
