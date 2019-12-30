docker build -t rilizack/shoes-app:latest -t rilizack/shoes-app:$GIT_SHA -f ./Dockerfile .
docker push rilizack/shoes-app:latest
docker push rilizack/shoes-app:$GIT_SHA
# kubectl apply -f k8s
# kubectl set image deployments/shoes-deployment shoes=rilizack/shoes-app:$GIT_SHA
