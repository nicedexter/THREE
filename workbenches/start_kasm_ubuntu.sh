docker build . -t nicedexter/ubuntu-focal-desktop:1.15.0

docker run --shm-size=512m -p 6901:6901 -e VNC_PW=password -v ~/workdir:/home/kasm-user/data nicedexter/ubuntu-focal-desktop:1.15.0
