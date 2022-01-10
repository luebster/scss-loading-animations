# SCSS-Loading-Animations
A set of SCSS mixins for single element loaders and spinners 

[View examples](https://luebster.github.io/scss-loading-animations/)

## Getting started


```
npm install scss-loading-animations
```
<!-- ```
bower install scss-loading-animations
``` -->

OR

1. Download the [latest release](https://github.com/luebster/scss-loading-animations/releases).
2. Copy `src` folder to your project.
3. Import `loaders.scss`.

```scss
@import "./src/loaders";
```


## Usage

Create a div with a class name of your choosing.

```html
<div class="your-loader"></div>
```

In the SCSS for your class, include a mixin for a given loader. All [loader examples]((https://luebster.github.io/scss-loading-animations/)) are numbered. These numbers map to the mixin class name. For example, if you want to use loader01 from the examples page:

```scss
.your-loader {
    @include loader01;
}
```


## Defaults
Default values for the loaders are in `_variables.scss`. If you want to change these values globally, simply define them before you import `loaders.scss`.

```scss
$loader-color: #0052ec;
$loader-size: 56px;
$loader-height: 20px;
$loader-border-size: 8px;
$loader-gap: 12px;
$loader-animation-duration: 1s;

@import "./src/loaders";
```

You can override these default values in the mixin call:

```scss
@include loader09($size: 10px, $height: 48px, $gap: 8px, $duration: 1s, $align: middle);
```

All loaders can be also aligned to center, while including the mixin with parameter `$align`. `$align: center` is just for x axis, `$align: middle` is for both axes.


**MIXIN PARAMETERS**

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

This project is a continuation from [SpinThatShit](https://github.com/MatejKustec/SpinThatShit), which is no longer being maintained [according to the author](https://github.com/MatejKustec/SpinThatShit/issues/10#issuecomment-984859922).
