FROM node:20

WORKDIR /opt/VolunteerSearch/frontend

COPY *json /
COPY public /public
COPY src /src

RUN npm install --omit=dev

RUN npm run build

CMD ["npm", "start"]