# ================ Dockerfiloe for development =============

FROM		node:19-alpine

WORKDIR		/app

RUN			chown -R node:node /app

USER		node

COPY		--chown=node:node . /app/

RUN			npm --silent install 

EXPOSE		3000

ENTRYPOINT ["npm", "start"]
