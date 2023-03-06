echo -n -e "Enter Token:"
read token
ngrok authtoken "$token"
clear