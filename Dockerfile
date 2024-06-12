FROM node:20

WORKDIR /opt/VolunteerSearch/frontend

COPY *json /

RUN npm install --omit=dev

COPY public /public
COPY src /src

RUN npm run build

CMD ["npm", "start"]