# #!/bin/bash

# ========================
# This file is not meeded!
# ========================

# clear

# sleep 1

# # Check internet
# function check_internet() {
#  # ping Google's DNS server to check for internet connectivity
#  if ping -q -c 1 -W 1 8.8.8.8 2>/dev/null ; then
#     return 0
#  else
#     return 1
#  fi
# }


# # main logic
# function main(){
#	# kill previous session
#	pkill -f ngrok
#	pkill node
 	
#	# Start ngrok and bind to port 8080
#	clear
#	echo -e "\033[1;92m[*] Port Forwarding Please wait 10 second..."
#	./ngrok http 3000 > /dev/null &
 	
#	sleep 5
#	clear
 	
#	python main.py	
# }

# if check_internet; then
#	main
# else
#	echo -e '\033[1;31m[*] No Internet!'
#	echo -e '[*] Please Enable Your Internet Connection!'
#	echo -e '[*] Quiting...!\033[1;97m'
# fi

