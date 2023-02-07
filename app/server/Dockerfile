# =========== Dockerfile for devlopment ===========

FROM		node:19-alpine

WORKDIR		/app

RUN			chown -R node:node /app

USER		node

COPY		--chown=node:node . /app/

RUN			npm install 

EXPOSE		3000

ENTRYPOINT ["npm", "run", "start:dev"]
