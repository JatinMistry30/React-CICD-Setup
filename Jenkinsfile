pipeline {
    agent any
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    echo "Listing current directory contents:"
                    ls -l 

                    echo "Checking Node.js version:"
                    node --version

                    echo "Checking npm version:"
                    npm --version

                    echo "Installing dependencies:"
                    npm install

                    echo "Building the project:"
                    npm run build

                    echo "Final directory contents:"
                    ls -l
                '''
            }
        }
    }
}
