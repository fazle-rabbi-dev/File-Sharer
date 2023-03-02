# =======================================#
# Author: Fazle Rabbi					     #
# Github: https://github.com/fh-rabbi    #
# =======================================#

#!/bin/python
import os  
import time
from colorama import *

os.system('clear')

# Banner
def banner():
	print("""
┌───────────────────────────────────────┐
│> File-Sharer v1.0                     │
│> Author: Fazle Rabbi                  │
│> Github: https://github.com/fh-rabbi  │
└───────────────────────────────────────┘
	""")

banner()

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
	os.system('node index.js')


# Get Custom Path
def get_custom_path():
	os.system('clear')
	path_name = input(f"{Fore.CYAN}[*] Enter your custom storage/folder path Ex:/sdcard:{Fore.RESET}")
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


# Ootions
def options():
	os.system('clear')
	print(f"{Fore.GREEN}[?] Which storage do you want to share? {Fore.RESET}")
	print(f"""
 [{Fore.GREEN}1{Fore.RESET}] {Fore.RESET}Phone Storage
 [{Fore.GREEN}2{Fore.RESET}] {Fore.RESET}External Storage/Memory Card
 [{Fore.GREEN}3{Fore.RESET}] {Fore.RESET}Custom Storage Path
 [{Fore.GREEN}0{Fore.RESET}] {Fore.RESET}Cancel
	""")

# Read options from user
def choose_option():
	options()
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
				print("[✔] Using external storage")
				time.sleep(.5)
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
		option = input(f"{Fore.CYAN}{Style.BRIGHT}[*] Do you want to use previous path {Fore.GREEN}{path_name}{Fore.RESET} (y/n)?{Fore.CYAN} Press (c) for cancel:"+Fore.RESET)
		if option == 'c':
			print(Fore.RED+"[*] Cancelling .."+Fore.RESET)
			time.sleep(.5)
			os.system('clear')			
		elif option == 'y':
			os.system('clear')
			os.system('node index.js')
		elif option == 'n':
			getUserInput()
		else:
			os.system('clear')
			banner()
			main()
	else:
		getUserInput()

main()
