#! /bin/sh


echo ">>>>>>>   $1"
cmd1="cp index.html index.html.$1"
echo "copy html: ", $cmd1
cp index.html index.html.$1
cmd2="cp scripts/controllers/main.js scripts/controllers/main.js.$1"
echo "copy js: ", $cmd2
cp scripts/controllers/main.js scripts/controllers/main.js.$1
echo ">>>>>>>   done!"
