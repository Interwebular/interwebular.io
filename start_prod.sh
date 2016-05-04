#!/bin/sh

cp ./env/prod/Routes.js ./app/Config/Routes.js

webpack -p
cp netlify/_redirects dist/_redirects
