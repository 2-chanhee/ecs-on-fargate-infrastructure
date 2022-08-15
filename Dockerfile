# Step 1
## base image for Step 1: Node 16
FROM node:16 AS builder
WORKDIR /app
## 프로젝트의 모든 파일을 WORKDIR(/app)로 복사한다
COPY . .
## Nest.js project를 build 한다
RUN yarn install
RUN yarn build


# Step 2
## base image for Step 2: Node 16-alpine(light weight)
FROM node:16-alpine
WORKDIR /app
## Step 1의 builder에서 build된 프로젝트를 가져온다
COPY --from=builder /app ./
## application 실행
CMD [ "node", "dist/main" ]

# ECR push 
# 1. aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin <iam account>.dkr.ecr.ap-northeast-2.amazonaws.com
# 2. docker build -t nestjs-docker . (미리 해도 상관없음)
# 3. docker tag nestjs-docker:latest <iam account>.dkr.ecr.ap-northeast-2.amazonaws.com/nestjs-docker:latest
# 4. docker push <iam account>.dkr.ecr.ap-northeast-2.amazonaws.com/nestjs-docker:latest

# run docker on local
# docker run -p <container port number>:<host port number>/<protocol> [ImageName]
# docker run -p 3000:3000 nestjs-docker

# docker build --platform=linux/amd64 -t nestjs-docker-amd64 .
