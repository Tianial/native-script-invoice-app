# Installing and setup your environment
1. check that nodejs is installed else just first install it [Link](https://nodejs.org/en/)
2. check if the nativescript CLI is installed on your machine [Link](https://docs.nativescript.org/angular/start/quick-setup)
    1. `tns --version`
    2. if the CLI is not installed, then install it `sudo npm install -g nativescript`
3. Install the full development dependencies your need by enter this on a terminal
    1. sudo ruby -e "$(curl -fsSL https://www.nativescript.org/setup/mac)"
    2. follow the instruction and answer the quetions which will be prompted
4. After installing all dependencies, you must chef if the installation was successful by enter this command on the terminal
    1. `tns doctor`
    2. if you see at the end this message **No issues were detected** then you are ready to start this application, else you must try to install manually all failures dependencies [Link](https://docs.nativescript.org/angular/start/ns-setup-os-x)
5. [Optional] you can install `android studio` [Link](https://developer.android.com/studio)

# How to start with the application
1. First install all dependencies by runing the command `npm install`
2. then start the application by runing the command `npm run ios` or `npm run android`, the **--bundle** is not required

# How To list available emulator images installed and available in your machine
1. tns device ios --available-devices
2. tns device android --available-devices

# How to start android simulator?
```
>> $ANDROID_HOME/emulator/emulator -avd Android29d
```

# Useful Resources & Links
1. [Official NativeScript](https://docs.nativescript.org/angular/start/introduction)
2. [Quick Setup](https://docs.nativescript.org/start/quick-setup)
3. [Full Setup](https://docs.nativescript.org/angular/start/quick-setup#full-setup)
4. [In case of errors](https://docs.nativescript.org/angular/start/ns-setup-os-x)


# how to configure the visual studio to look gut
For that you need to add some extensions
1. Navigate to the menubar and then click `View > Extensions`
2. search for **material icon** and then install the material icon Theme
3. search for **nativescript** and then install the NativeScript support for Visual Studio
3. search for **angular essential** and then install the one from `John Papa`

# How to change the visual studio schema?
Press cmd+shift+p and then enter into the input field the word *color theme*, to finish choose the `dark schema` if you like it
