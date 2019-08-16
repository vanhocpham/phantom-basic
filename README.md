# PhantomJS Basic

### Installation

Recomment [Node.js](https://nodejs.org/) v10+ to run.

Install phantomjs

> On LINUX
>
Step 1 – Prerequsities

```sh
$ sudo apt-get update
$ sudo apt-get install build-essential chrpath libssl-dev libxft-dev
$ sudo apt-get install libfreetype6 libfreetype6-dev libfontconfig1 libfontconfig1-dev
```
Step 2 – Install PhantomJS

```sh
$ wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2
$ sudo tar xvjf phantomjs-2.1.1-linux-x86_64.tar.bz2 -C /usr/local/share/
$ sudo ln -sf /usr/local/share/phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/local/bin
```

Step 3 – Verify PhantomJS Version

```sh
$ phantomjs --version
```

> ON WINDOW
>
>Recomment [Link](https://www.youtube.com/watch?v=lg_8K_QsrLQ) installation.



For build production environments...

```sh
$ phantomjs <filename>.js
```


### Todos

 - Screen Capture
 - Page Automation
 - Network Monitoring
 - Testing
 

License
----
- MIT


