#!/bin/bash

echo "deploying front and backend shells"
sh deploy_be.sh && sh deploy_fe.sh
echo "deployed front and backend shells"
