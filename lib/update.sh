#!/bin/bash

# Colors:
red='\033[1;91m'
green='\033[1;92m'
yellow='\033[1;93m'
blue='\033[1;94m'
pink='\033[1;95m'
cyan='\033[1;96m'
reset='\033[0m'	

cd $HOME
rm -rf File-Sharer
clear
sleep 1
echo -e ">> Updating ."
sleep 1
clear
echo -e ">> Updating .."
sleep 1
clear
echo -e ">> Updating ..."
git clone https://github.com/fh-rabbi/File-Sharer
clear
sleep 1
echo -e "[✔] Updated successful"
cd $HOME/File-Sharer

