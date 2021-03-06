#!/bin/bash


echo "git pull started"
git pull
echo "git pull completed"

echo "install nodemodules start"
npm install
echo "installation completed"

echo "build started"
npm run build
echo "build completed"

echo "pm2 started"
pm2 start build/backend.js -f
# pm2 start pm2B.json
echo "pm2 running"

echo "pm2 saving"
pm2 save
echo "pm2 saved"