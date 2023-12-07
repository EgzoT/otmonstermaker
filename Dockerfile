FROM node:20

COPY ./script.sh .
RUN chmod +x /script.sh

CMD /script.sh
