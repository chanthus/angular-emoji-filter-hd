#!/bin/bash

function die {
    echo $1
    exit 1
}

npm install || die "npm install failed"
bower install || die "bower install failed"
gulp clean || die "clean failed"
gulp build || die "build failed"
