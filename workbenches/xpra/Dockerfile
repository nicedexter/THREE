FROM ubuntu:22.04
USER root

RUN apt-get update \
    && apt-get install -y sudo \
    && echo 'user ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers \
    && rm -rf /var/lib/apt/list/*

RUN apt update && \
    apt install -y dia-common gnupg wget apt-transport-https software-properties-common && \
    wget -q https://xpra.org/gpg.asc -O- | apt-key add - && \
    add-apt-repository "deb https://xpra.org/ jammy main" && \
    apt update && \
    apt install -y xpra

COPY ./xpra.conf /etc/xpra/xpra.conf
COPY ./content_security_policy.txt /etc/xpra/http-headers/10_content_security_policy.txt
COPY ./xpra-settings.txt /etc/xpra/html5-client/default-settings.txt

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install --no-install-recommends -y wget gpg binutils && \
    wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg && \
    install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg && \
    sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list' && \
    rm -f packages.microsoft.gpg && \
    apt-get update && \
    apt-get install --no-install-recommends -y code && \
    apt-get remove -y --purge wget gpg && \
    apt-get autoremove -y --purge && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

ENV HOME /home/user
RUN useradd -ms /bin/bash user
WORKDIR $HOME

USER user


EXPOSE 8080 
CMD xpra start --bind-tcp=0.0.0.0:8080 --html=on --start=xterm && tail -f /dev/null 

# COPY ./docker-entrypoint.sh .
# ENTRYPOINT ["./docker-entrypoint.sh"]
