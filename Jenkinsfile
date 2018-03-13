pipeline {
  agent {
    docker {
      image 'node:latest'
      args '-p 3000:3000'
    }
    
  }
  stages {
    stage('') {
      steps {
        sh '''npm i
npm run build
'''
      }
    }
  }
}