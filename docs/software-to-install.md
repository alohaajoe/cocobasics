---
sidebar_label: 'Software to install'
sidebar_position: 3
---
# Software to install for Code & Context 
Here is a list of different applications and software you need to install.
See how far you get.

Please note that there are dependencies between some packages.
So it might be a good idea to stick to this order.

**A note for Windows users:** It's highly recommended that you have an up-to-date version of Windows 10 or 11 on your machine. Older versions are likely to cause issues and are not really supported in this guide.

<br>

**💾 Java 17**

* Linux: install via your package manager, e.g. `apt-get install openjdk-17-jdk`.
* Mac, two options:
    * Install Oracle version: <https://www.oracle.com/java/technologies/downloads/#jdk17-mac>
    * Or install Homebrew (<https://brew.sh/>) and use `brew install openjdk@17` in Terminal.
* Windows, two options: 
    * Oracle version: <https://www.oracle.com/java/technologies/downloads/#jdk17-windows>
    * Adoptium version: <https://adoptium.net/de/temurin/releases/?version=17>

<br>

**💾 Intellij IDEA**


* Ultimate Edition for students: <https://www.jetbrains.com/shop/eform/students>  
    * This is the recommended edition, but could take a day or two! 
    * See also the FAQ: <https://www.jetbrains.com/community/education/#students>
* Community Edition: <https://www.jetbrains.com/help/idea/installation-guide.html#standalone>
    * Might lack necessary features

<br>

**💾 VS Code (incl. Java-Plugin)**

* <https://code.visualstudio.com/docs/setup/setup-overview>
* <https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack>
* <https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer>

<br>

**💾 Shell**

* Linux & Mac: You are done.
* Windows 10/11, two options:
    * Use git bash (this is included in install of git for windows, see next step)

<br>

**💾 git**

* Linux: use your packaging system, e.g. `apt-get install git`.
* Mac, two options:
    * Apple version: run `xcode-select --install` in Terminal (Command-Space, type `Terminal`, press enter)
    * Or install Homebrew (<https://brew.sh/>) and use `brew install git` in Terminal.
* Windows 10/11: Git for windows: <https://git-scm.com/download/win>
    * This enables you to use your IDE to handle git (either via the GUI or the built-in terminal)
    * It also comes with an openSSH client (which is handy, as the one included in Windows might not be enabled)

<br>

**💾 openSSH**

  * Linux: use your packaging system, e.g. `apt-get install openssh-client`. (Most likely it's already installed.)
  * Mac: it's already installed.
  * Windows 10/11: You _should_ be good to go. To make sure, enter the following command in a terminal (git bash or cmd): `ssh -V` 
    * If you see something like "OpenSSH_..." you are fine.
    * If you don't, you can try the steps described here: <https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse>
