#!/bin/python
import os  
import time
from colorama import *

os.system('clear')

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


# Get path from user
def getUserInput():
	path_name = input(Fore.GREEN+"[*] Enter your directory path name:"+Fore.RESET)
	if path_name == '':
		getUserInput();
	else:
		res = is_valid_path(path_name)
		if res:
			# Open file for writing
			with open('path.txt', 'w') as f:
				# Write to file
				f.write(path_name)
			os.system('node index.js')
			print('Hello...')
			# print(Fore.CYAN+"[*] Server started at http://localhost:3000")
		else:
			print(Fore.RED+"[*] Oops! invalid path.Enter valid path"+Fore.RESET)
			getUserInput();


# Main Logic
def main():
	is_exists_path = read_file('path.txt')
	if is_exists_path:
		path_name = read_file('path.txt')
		option = input(f"{Fore.YELLOW}{Style.BRIGHT}[*] Do you want to use previous path {Fore.GREEN}{path_name}{Fore.RESET} (y/n)?{Fore.YELLOW} Press other key for cancel:"+Fore.RESET)
		# print(Fore.RESET)
		if option == 'y':
			os.system('node index.js')
		elif option == 'n':
			getUserInput()
		else:
			# main()
			print(Fore.RED+"[*] Cancelling..."+Fore.RESET)
			time.sleep(1)
			os.system('clear')
	else:
		getUserInput()

main()
