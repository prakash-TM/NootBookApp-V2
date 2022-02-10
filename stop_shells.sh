#!/bin/bash

echo "stoping shells"
pm2 stop index fontend
echo "stoped shells"
echo "deleting shells"
pm2 delete index frontend
echo "deleted shells"