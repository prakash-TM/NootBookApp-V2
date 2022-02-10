#!/bin/bash

echo "git pull started"
git pull
echo "git pull completed"
cd frontEnd/noteBookAppUI
echo "install nodemodules start"
npm install
echo "installation completed"

echo "build started"
npm run build
echo "build completed"
cd ..
cd ..
echo "pm2 started"
pm2 start frontEnd/noteBookAppUI/frontend.js -f
echo "pm2 running"

echo "pm2 saving"
pm2 save
echo "pm2 saved"