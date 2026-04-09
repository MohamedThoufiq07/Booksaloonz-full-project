const fs = require('fs');
const path = require('path');
const https = require('https');

const modelsDir = path.join(__dirname, '..', 'booksaloons frontend', 'public', 'models');

if (!fs.existsSync(modelsDir)) {
    fs.mkdirSync(modelsDir, { recursive: true });
}

const baseUrl = 'https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights/';

const models = [
    'tiny_face_detector_model-weights_manifest.json',
    'tiny_face_detector_model-shard1',
    'age_gender_model-weights_manifest.json',
    'age_gender_model-shard1'
];

const download = (fileName) => {
    const file = fs.createWriteStream(path.join(modelsDir, fileName));
    https.get(baseUrl + fileName, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`✅ Downloaded ${fileName}`);
        });
    }).on('error', (err) => {
        fs.unlink(path.join(modelsDir, fileName));
        console.error(`❌ Error downloading ${fileName}:`, err.message);
    });
};

console.log('⏳ Downloading models to:', modelsDir);
models.forEach(download);
