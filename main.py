# =======================================#
# Author: Fazle Rabbi					     #
# Github: https://github.com/fh-rabbi    #
# =======================================#

#!/bin/python
import os  
import time
import requests
from colorama import *

os.system('clear')

# Banner
def banner():
	print(f"""
       {Fore.CYAN}«--------------------✧--------------------»
{Fore.RED}{Style.BRIGHT}    _______ __          _____ __                        
{Fore.GREEN}   / ____(_) /__       / ___// /_  ____ _________  _____
{Fore.YELLOW}  / /_  / / / _ \______\__ \/ __ \/ __ `/ ___/ _ \/ ___/
{Fore.CYAN} / __/ / / /  __/_____/__/ / / / / /_/ / /  /  __/ /    
{Fore.BLUE}/_/   /_/_/\___/     /____/_/ /_/\__,_/_/   \___/_/ {Style.BRIGHT}{Fore.YELLOW}v1.0{Fore.GREEN}    
       {Fore.CYAN}«--------------------✧--------------------»{Fore.RESET}""")	

# Menu
def menu(path_name):
	banner()
	print(f"""

╔══════════════════════════════════════════╗
║{Fore.YELLOW}* {Fore.RESET}Author  {Fore.RED}  : {Fore.CYAN}{Style.BRIGHT}Fazle Rabbi{Fore.RESET}                 ║
║{Fore.YELLOW}* {Fore.RESET}Github  {Fore.RED}  : {Fore.GREEN}\033[4mhttps://github.com/fh-rabbi\033[0m{Fore.RESET} ║
╠══════════════════════════════════════════╝
║--{Fore.RED}> {Fore.CYAN}{Style.BRIGHT}Do you want to use previous path {Fore.GREEN}{path_name}{Fore.RESET}
║--{Fore.RED}>{Fore.RESET} {Fore.GREEN}1.{Fore.RESET} Yes
║--{Fore.RED}>{Fore.RESET} {Fore.GREEN}2.{Fore.RESET} No
║--{Fore.RED}>{Fore.RESET} {Fore.GREEN}3.{Fore.RESET} Update
║--{Fore.RED}>{Fore.RESET} {Fore.GREEN}4.{Fore.RESET} Add new ngrok token
║--{Fore.RED}>{Fore.RESET} {Fore.GREEN}0.{Fore.RESET} Exit
║""")


# banner()

# --------------------------
# check whether a file path 
# is a file or a directory.
# --------------------------
def is_valid_path(path):
	if os.path.isdir(path):  
	    return True
	elif os.path.isfile(path):  
	    return False
	else:  
	    return False


# Read Text File
def read_file(filename):
	try:
		with open(filename, 'r') as file:
			contents = file.read()
		return contents
	except:
		return False


# Write Path To path.txt file
def write_path(path_name):
	# Open file for writing
	with open('path.txt', 'w') as f:
		# Write to file
		f.write(path_name)
	# Run app
	# os.system('clear')
	os.system('node js/index.js')


# Get Custom Path
def get_custom_path():
	os.system('clear')
	path_name = input(f"{Fore.CYAN}[*] Enter your custom storage/folder path {Fore.GREEN}Ex:/sdcard:{Fore.RESET}")
	res = is_valid_path(path_name)
	if res:
		time.sleep(.5)
		print(f"{Fore.GREEN}[✔] Using custom storage ({path_name}){Fore.RESET}")
		write_path(path_name)
	else:
		os.system('clear')
		print(Fore.RED+"[*] Oops! invalid path.Enter a valid path"+Fore.RESET)
		time.sleep(.5)
		get_custom_path();	


# Storage Options
def storage_options():
	os.system('clear')
	banner()
	print('\n')
	print(f"{Fore.GREEN}{Style.BRIGHT}[?] Which storage do you want to share? {Fore.RESET}")
	print(f"""
[{Fore.GREEN}1{Fore.RESET}] {Fore.RESET}Phone Storage
[{Fore.GREEN}2{Fore.RESET}] {Fore.RESET}External Storage/Memory Card
[{Fore.GREEN}3{Fore.RESET}] {Fore.RESET}Custom Storage Path
[{Fore.GREEN}0{Fore.RESET}] {Fore.RESET}Cancel
	""")

# Read options from user
def choose_option():
	storage_options()
	option = input(f"{Fore.GREEN}[*] Choose an option:{Fore.RESET}")
	if option == '':
		os.system('clear')
		getUserInput();
	else:
		# When phone storage
		if option == '1':
			os.system('clear')
			time.sleep(.5)
			print("[✔] Using phone storage")
			write_path('/sdcard')
		# When external storage
		elif option == '2':
			time.sleep(.5)
			path = '/storage/sdcard0'
			res = is_valid_path(path)
			if res:
				os.system('clear')
				time.sleep(.5)
				print("[✔] Using external storage")
				write_path(path)
			else:
				print(f"{Fore.RED}[!] Memory card could not found{Fore.RESET}")
				time.sleep(1)
				choose_option()
		# When cancel
		elif option == '0':
			os.system('clear')
			print("[*] Cancelling ..")
			print("[*] Good, by 🖐️")
			time.sleep(.3)
		# When custom storage path
		elif option == '3':
			get_custom_path()
		else:
			os.system('clear')
			getUserInput()


# Get path from user
def getUserInput():
	choose_option()


# Main Logic
def main():
	is_exists_path = read_file('path.txt')
	if is_exists_path:
		path_name = read_file('path.txt')
		os.system('clear')
		menu(path_name)
		option = input(f"╚═══ {Fore.GREEN}")
		if option == '0':
			os.system('clear')
			print(Fore.RED+"[*] Quiting .."+Fore.RESET)
			time.sleep(.5)
			os.system('clear')			
		elif option == '1':
			os.system('clear')
			os.system('node js/index.js')
		elif option == '2':
			getUserInput()
		elif option == '3':
			# Check Update Available/Not Available
			update_available = None
			try:
				url = ''
				res = requests.get('')
				if res.text == 'yes':
					update_available = True
			except:
				update_available = False
			if update_available:
				os.system('clear')
				print(f"{Fore.YELLOW}[*] Update Available{Fore.RESET}")
				os.system('bash lib/update.sh')
			else:
				os.system('clear')
				time.sleep(1)
				print("[*] Already up to date")
				os.system('python main.py')
		elif option == '4':
			os.system('bash lib/add_token.sh')
		else:
			os.system('clear')
			menu(path_name)
			main()
	else:
		getUserInput()

main()
