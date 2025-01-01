pipeline {
    agent any
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    args '--user root'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    echo "Fixing npm permissions..."
                    mkdir -p ~/.npm
                    chmod -R 777 ~/.npm
                    echo "Installing dependencies..."
                    npm install
                    npm run build
                '''
            }
        }
    }
}
