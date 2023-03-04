#!/bin/bash

clear

# Colors:
red='\033[1;91m'
green='\033[1;92m'
yellow='\033[1;93m'
blue='\033[1;94m'
pink='\033[1;95m'
cyan='\033[1;96m'
reset='\033[0m'	

function install(){
	echo -e "$green[*] File-Sharer installing ."
	sleep 1
	clear
	echo -e "[*] File-Sharer installing .."
	sleep 2
	clear
	echo -e "[*] File-Sharer installing ..."
	sleep 1
	
	echo -e "$yellow[*] It may takes about 15 minutes please be patient and wait untill installation are finish.$reset"
	
	pkg install git -y
	pkg install python -y
	pkg install python2 -y
	pkg install python3 -y
	pkg install nodejs-lts -y
	
	git clone https://github.com/fh-rabbi/File-Sharer
	cd File-Sharer
	clear
	echo ""
	echo -e "$green>> Installing node modules .."
	echo ""
	sleep 1
	npm i
	clear
	echo -e "$green>> Installing python modules ..$reset"
	echo ""
	sleep 1
	pip install colorama
	pip install requests
	clear
	echo -e "$green[*] Finishing .."
	sleep 1
	# Go To App Directory
	cd $HOME/File-Sharer
	mv start-file-sharer /data/data/com.termux/files/usr/bin
	cd /data/data/com.termux/files/usr/bin
	chmod +x start-file-sharer
	
	clear
	sleep 1
	
	cd $HOME/File-Sharer
	rm lib/install.sh
	echo -e "$green[✔] Installation has been finished"
	echo -e "$blue[✔] Now you can run this app by executing bellow command from any location in your termux!"
	echo -e "$yellow[*] start-file-sharer$reset"
}


cd $HOME
if [ -d "File-Sharer" ]; then
	echo -e "[*] File-Sharer already installed !"
else
	install
fi
