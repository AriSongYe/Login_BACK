const fs = require('fs');
const path = require('path');

function updateEnvFile(newSecretKey) {
    const envFilePath = path.resolve(__dirname, '.env');

    try {
        // 기존 .env 파일 읽기
        let envData = fs.readFileSync(envFilePath, 'utf8');

        // 새로운 Secret Key로 업데이트
        envData = envData.replace(/(REACT_APP_JWT_SECRET=).*/, `$1${newSecretKey}`);

        // 업데이트된 내용으로 .env 파일 쓰기
        fs.writeFileSync(envFilePath, envData, 'utf8');

        console.log('.env 파일이 업데이트되었습니다.');
    } catch (err) {
        console.error('Error updating .env file:', err);
    }
}
