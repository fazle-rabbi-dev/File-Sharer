<div align="center">
<img src="https://img.shields.io/badge/MADE%20IN-BANGLADESH-SCRIPT?colorA=ff006a&colorB=029b4c&colorC=%23ff0000&style=for-the-badge" alt="" />
<p>
<img src="https://img.shields.io/badge/Version-1.0.0-538fd3.svg" alt="" />
<!--<img src="https://img.shields.io/badge/Maintained%3f-yes-seagreen.svg" alt="" />-->
</p>
<img width="100%" src="thumb.png" />
<img src="https://img.shields.io/badge/Made%20with-Nodejs-00bb3b.svg?v=103" alt="" />
<img src="https://img.shields.io/badge/Made%20with-Expressjs-cdd0d0.svg?v=103" alt="" />
<img src="https://img.shields.io/badge/Made%20with-Python-2380c9.svg?v=103" alt="" />
<img src="https://img.shields.io/badge/Made%20with-Bash-00bb3b.svg?v=103" alt="" />

</div>


## ABOUT
The ultimate file sharing solution for Android devices! With File-Sharer web app, you can quickly and easily share files from your phone's storage over the internet with anyone, anywhere in this world.

Whether you're looking to share photos, documents, or music over the internet, File-Sharer makes it simple and secure. 

Try it out today and experience the power of seamless file sharing on your Android device!


### TESTED ON :
* Termux

### REQUIREMENTS :
* Internet
* Git,nodejs-lts,python
* Hotspot enabled
* Storage 150 MB
* Ngrok token

### FEATURES :
* Share your internel storage
* Share your external storage
* Share any folder from your storage

### INSTALLATION :
* <a href="#CompleteTutorial">Complete Video Tutorial</a>
* **Important:**

	> If you have never used Termux before, after installing and opening Termux, you may encounter some errors when you try to install the package. To solve this error, use the termux-change-repo command to change the mirror.
	
	> Or you can take the help of YouTube.

1. At first Download <a href="https://f-droid.org/repo/com.termux_118.apk">Termux</a> *Don't download from play store!*
2. Create <a href="https://dashboard.ngrok.com/signup">Ngrok</a> account for token.You can use temp mail.Video tutorial <a href="#watch">watch</a>
3. Open termux and execute bellow command -->
4. `termux-setup-storage` after executing this command give storage permiasion

* #### AUTO INSTALLATION:
1. `bash <(curl -s https://raw.githubusercontent.com/fh-rabbi/File-Sharer/main/lib/install.sh)`

2. `start-file-sharer`

* #### MANUAL INSTALLATION:
* `cd`

* `pkg install git -y`

* `pkg install python -y`

* `pkg install nodejs-lts -y`

* `git clone https://github.com/fh-rabbi/File-Sharer`

* `cd File-Sharer`

* `mv start-file-sharer /data/data/com.termux/files/usr/bin`

* `cd /data/data/com.termux/files/usr/bin`

* `chmod +x start-file-sharer`

* `cd $HOME/File-Sharer`

* `bash lib/add_token.sh` **now goto your ngrok account and copy the token then paste here!**

* `python main.py or start-file-sharer`


### SCREENSHOTS:
<div align="center">
	<img width="40%" src="screenshots/one.png" alt="" />
	<img width="40%" src="screenshots/two.png" alt="" />
</div>

<p id="watch"></p> 

### Create Ngrok Account:
<a class="" href="https://drive.google.com/file/d/1-h_Dc5GfdHCk4ZuOW_XVa7TkxuHrn6JZ/view?usp=drivesdk">Watch Now</a>

<p id="CompleteTutorial"></p> 

### Complete Video Tutorial:
*Before watching this video please watch `Create Ngrok Account` video.*

<a class="" href="https://drive.google.com/file/d/1-vsSUp8sRuQz4BwmguAEdI93IXpyyBiu/view?usp=drivesdk">Watch Now</a>

### Note:
🚨 *Without hotspot links will not generate!*

🤖 If you face any problem while installing this application you can message me on <a href="https://t.me/fhrabbi">Telegram</a>

