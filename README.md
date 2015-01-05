md2wp
=====

# http://md2wp.jgs.me

markdown to wordpress(http://adtech.cyberagent.io/)

# usage

![](https://cloud.githubusercontent.com/assets/557961/5526257/e074b6fe-8a34-11e4-8372-f658de471736.png)

* Converts markdown to wordpress-able html
* Based on [gfm](https://help.github.com/articles/github-flavored-markdown/)
* It fixes code block escape issue

## how-to

1. Copy your markdown code to left textarea
2. Push the middle arrow button
3. (convert to html)
4. Copy html on right textarea and paste wordpress editor

# for hacker

## installation

```
% git clone https://github.com/jgsme/md2wp.git
% cd md2wp
% git submodule init
% git submodule update
% npm install
```

## requirements

* node.js
* gulp

## build

```
$ gulp       # <= just build
$ gulp watch # <= build, watch and serve files. open http://localhost:8080 on your browser
```

# author

* jigsaw (http://jgs.me, [@e-jigsaw](http://github.com/e-jigsaw))

# license

MIT

The MIT License (MIT)

Copyright (c) 2014 Takaya Kobayashi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
