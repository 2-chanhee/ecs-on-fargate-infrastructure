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
# 2. docker build --platform=linux/amd64 -t nestjs-docker-amd64 .
# 3. docker tag nestjs-docker:latest <iam account>.dkr.ecr.ap-northeast-2.amazonaws.com/nestjs-docker:latest
# 4. docker push <iam account>.dkr.ecr.ap-northeast-2.amazonaws.com/nestjs-docker:latest

# run docker on local
# docker run -p <container port number>:<host port number>/<protocol> [ImageName]
# docker run -p 80:3000 nestjs-docker

# 로컬에서 테스트 할 때
# docker build -t nestjs-docker .

# mac 환경에서 빌드할 시
# docker build --platform=linux/amd64 -t nestjs-docker-amd64 .

# image 삭제
# docker rmi <imageName>



## AWS setting

# 1. 보안 그룹 생성
# 인바운드 container port 3000, 9999 허용
# 3000: docker port
# 9999: alb port

# 2. Application Load Balancer
# public subnet (2a, 2c)
# 위에서 생성한 보안그룹 선택
# Listener HTTP port 9999
# 생성 후 Target Group과 listener 삭제 (클러스터 생성 시 다시 만들어진다.)

# 3. 작업 정의 (Fargate)
# ECR 이미지 선택 후 Port mapping: 3000
# 운영체제 Linux

# 4. 클러스터 서비스 생성 (클러스터 먼저 생성하고 해야 함)
# 클러스터 서브넷: 2a, 2c
# 자동 할당 퍼블릭 IP: ENABLE
# Application Load Balancer 선택
    # 로드 밸런서에 추가 -> 새로 생성 -> Listener HTTP port 9999 
    # health check url: /

# 5. ALB public DNS로 접근
