# Colors:
red='\033[1;91m'
green='\033[1;92m'
yellow='\033[1;93m'
blue='\033[1;94m'
pink='\033[1;95m'
cyan='\033[1;96m'
reset='\033[0m'	

clear
echo -e "$red[!] Without ngrok token link will note generate!"
echo -n -e "$reset[?] Enter Ngrok Token:$green"
read token
ngrok authtoken "$token"
clear
echo "[✔] Token added successful."
echo "[*] Run this app again"