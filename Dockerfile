FROM mcr.microsoft.com/palywright:v1.52.0-jammy

RUN mkdir /app
WORKDIR /app
COPY . /app/

RUN npm install --force
RUN npx palywright install
