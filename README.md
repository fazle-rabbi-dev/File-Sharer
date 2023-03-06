<div align="center">
<img src="https://img.shields.io/badge/MADE%20IN-BANGLADESH-SCRIPT?colorA=ff006a&colorB=029b4c&colorC=%23ff0000&style=for-the-badge" alt="" />
<p>
<img src="https://img.shields.io/badge/Version-1.0.0-538fd3.svg" alt="" />
<img src="https://img.shields.io/badge/Maintained%3f-yes-seagreen.svg" alt="" />
</p>
<img width="100%" src="thumb.png" />
<img src="https://img.shields.io/badge/Made%20with-Nodejs-067a23.svg?v=103" alt="" />
<img src="https://img.shields.io/badge/Made%20with-Expressjs-cdd0d0.svg?v=103" alt="" />
<img src="https://img.shields.io/badge/Made%20with-Python-2380c9.svg?v=103" alt="" />
<img src="https://img.shields.io/badge/Made%20with-Bash-333.svg?v=103" alt="" />

</div>


# ABOUT
The ultimate file sharing solution for Android devices! With File-Sharer web app, you can quickly and easily share files from your phone's storage over the internet with anyone, anywhere in this world.

Whether you're looking to share photos, documents, or music, File-Sharer makes it simple and secure. 

Try it out today and experience the power of seamless file sharing on your Android device!


### AVAILABLE ON :
* Termux

### TESTED ON :
* Termux

### REQUIREMENTS :
* internet
* git,nodejs-lts,python
* hotspot enabled
* storage 150 MB

### FEATURES :
* Share your internel storage
* Share your external storage
* Share any folder from your storage

### INSTALLATION [Termux] :
* **Important:**

	> If you have never used Termux before, after installing and opening Termux, you may encounter some errors when you try to install the package. To solve this error, use the termux-change-repo command to change the mirror.
	
	> Or you can take the help of YouTube.

* At first Download <a class="" href="#">Termux</a>
* Execute bellow command

* `termux-setup-storage` after executing this command give storage permiasion
* ### `Auto Install`
	
	* `bash <(curl -s https://raw.githubusercontent.com/fh-rabbi/File-Sharer/main/lib/install.sh)`
	
	* `start-file-sharer`
* ### `Manual Install`
	* pkg install git -y
	
	* pkg install python -y
	
	* pkg install nodejs-lts -y
	
	* git clone https://github.com/fh-rabbi/File-Sharer
	
	* cd File-Sharer
	
	* mv start-file-sharer /data/data/com.termux/files/usr/bin
	
	* cd /data/data/com.termux/files/usr/bin
	
	* chmod +x start-file-sharer
	
	* cd ..
	
	* python main.py/start-file-sharer


### SCREEN SHOTS [Termux]:
<div align="center">
	<img width="40%" src="screenshots/one.png" alt="" />
	<img width="40%" src="screenshots/two.png" alt="" />
</div>


### WATCH VIDEO [Termux]:
<video src="" height="400px" width="100%" preload="none" autoplay="none"></video>

### Note:
* *Without hotspot links will not generate!*

* If you face any problem while installing this app you can message me on <a href="https://t.me/fhrabbi">Telegram</a>
