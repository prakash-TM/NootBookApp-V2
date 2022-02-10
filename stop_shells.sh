#!/bin/bash

echo "stoping shells"
pm2 stop backend fontend
echo "stoped shells"
echo "deleting shells"
pm2 delete backend frontend
echo "deleted shells"