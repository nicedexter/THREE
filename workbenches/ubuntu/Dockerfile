FROM kasmweb/ubuntu-focal-desktop:1.15.0
USER root

ENV HOME /home/kasm-default-profile
ENV STARTUPDIR /dockerstartup
ENV INST_SCRIPTS $STARTUPDIR/install
WORKDIR $HOME

######### Customize Container Here ###########

RUN echo "<p><a href="http://172.17.0.1:4000/services">Services</a></p><p><a href="http://172.17.0.1:4000/api-docs">API</a></p><p><a href="http://172.17.0.1:5678">Workflow</a></p><p><a href="http://172.17.0.1:5432">Postgres</a></p>" > $HOME/Desktop/CHORUS.html

RUN apt-get update \
    && apt-get install -y sudo \
    && echo 'kasm-user ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers \
    && rm -rf /var/lib/apt/list/*

RUN wget https://images.unsplash.com/photo-1519681393784-d120267933ba -O /usr/share/backgrounds/bg_default.png

######### End Customizations ###########

RUN chown 1000:0 $HOME
RUN $STARTUPDIR/set_user_permission.sh $HOME

ENV HOME /home/kasm-user
WORKDIR $HOME
RUN mkdir -p $HOME && chown -R 1000:0 $HOME

USER 1000
