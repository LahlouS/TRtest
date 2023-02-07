# =========== Dockerfile for devlopment ===========

FROM		node:19-alpine

WORKDIR		/app

COPY		. /app/

RUN			npm install 

EXPOSE		3000

ENTRYPOINT ["npm", "run", "start:dev"]
