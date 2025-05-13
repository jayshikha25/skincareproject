function scrollCarousel(direction) {
  const carousel = document.getElementById('carousel');
  const scrollAmount = 270; // width of card + margin
  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

const productMenu = document.getElementById('productsMenu');

document.addEventListener('click', function(e) {
  // Toggle only when clicking the menu
  if (productMenu.contains(e.target)) {
    productMenu.classList.toggle('active');
  } else {
    productMenu.classList.remove('active');
  }
});

const digitalMenu = document.getElementById('digitalMenu');

  document.addEventListener('click', function (e) {
    if (digitalMenu.contains(e.target)) {
      digitalMenu.classList.toggle('active');
    } else {
      digitalMenu.classList.remove('active');
    }
  });

  function openModal() {
    document.getElementById("authModal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("authModal").style.display = "none";
  }
  
  function showSignup() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
  }
  
  function showLogin() {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
  }

  const dropdownMenu = document.getElementById('dropdownMenu');

  document.addEventListener('click', function (e) {
    if (dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.toggle('active');
    } else {
      dropdownMenu.classList.remove('active');
    }
  });

//   const FACEPP_API_KEY = 'VXCnHCh5Ptbxjr4Q_LVEk3pLDEEgj1NH';
// const FACEPP_API_SECRET = 'rqleJgvsOZuA5KzfICoTaei5T7ldlOrT';

//   const startBtn = document.getElementById('startAnalysisBtn');
// const video = document.getElementById('video');
// const selfie = document.getElementById('selfie');
// const results = document.getElementById('results');
// const cameraSection = document.getElementById('cameraSection');
// const report = document.getElementById('report');

// // Step 1: Start camera when arrow clicked
// startBtn.addEventListener('click', () => {
//   cameraSection.style.display = 'block';
//   navigator.mediaDevices.getUserMedia({ video: true })
//     .then(stream => video.srcObject = stream)
//     .catch(err => alert("Camera access denied. Please allow webcam."));
// });

// // Step 2: Take photo and simulate analysis
// document.getElementById('captureBtn').addEventListener('click', () => {
//   const canvas = document.createElement('canvas');
//   canvas.width = video.videoWidth;
//   canvas.height = video.videoHeight;
//   const ctx = canvas.getContext('2d');
//   ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

//   const imageData = canvas.toDataURL('image/png');
//   selfie.src = imageData;
//   selfie.style.display = 'block';

//   // Stop camera after capture
//   video.srcObject.getTracks().forEach(track => track.stop());

//   // Simulate AI
//   analyzeRealSkin(imageData);
// });

// async function sendToFaceAPI(base64Image) {
//   const formData = new FormData();

//   formData.append('api_key', FACEPP_API_KEY);
//   formData.append('api_secret', FACEPP_API_SECRET);
//   formData.append('image_base64', base64Image.split(',')[1]); // remove data:image/png;base64,
//   formData.append('return_attributes', 'skinstatus');

//   const response = await fetch('https://api-us.faceplusplus.com/facepp/v3/detect', {
//     method: 'POST',
//     body: formData
//   });

//   const data = await response.json();
//   return data;
// }
// async function analyzeRealSkin(imageBase64) {
//   results.innerHTML = 'Analyzing with real AI...';

//   try {
//     const data = await sendToFaceAPI(imageBase64);
    
//     const skin = data.faces[0]?.attributes?.skinstatus;
//     if (!skin) throw new Error("No skin data found");

//     results.innerHTML = `
//       <p>🧴 Acne: ${skin.acne * 100}%</p>
//       <p>💧 Health: ${skin.health * 100}%</p>
//       <p>🕳️ Stain: ${skin.stain * 100}%</p>
//       <p>🔴 Dark Circles: ${skin.dark_circle * 100}%</p>
//     `;
//   } catch (err) {
//     results.innerHTML = 'Failed to analyze. ' + err.message;
//   }
// }


// // ✅ Replace these with your real Face++ API key and secret
// const FACEPP_API_KEY = 'VXCnHCh5Ptbxjr4Q_LVEk3pLDEEgj1NH';
// const FACEPP_API_SECRET = 'rqleJgvsOZuA5KzfICoTaei5T7ldlOrT';

// // ✅ Get references to elements
// const startBtn = document.getElementById('startAnalysisBtn');
// const captureBtn = document.getElementById('captureBtn');
// const video = document.getElementById('video');
// const selfie = document.getElementById('selfie');
// const results = document.getElementById('results');
// const cameraSection = document.getElementById('cameraSection');
// const report = document.getElementById('report');
// const cardElements = document.querySelectorAll('.digital-dropdown .card');
// const productFinderCard = document.getElementById('productFinderCard');
// const aiSkinCard =document.getElementById('aiSkinCard')




// // ✅ Step 1: Start the camera when arrow (start) is clicked
// startBtn.addEventListener('click', (event) => {
//   event.preventDefault();
//   cardElements.forEach(card => card.style.display = 'none');
//   //  productFinderCard.style.display ='none';
//   //  aiSkinCard.style.display = 'none';
//   cameraSection.style.display = 'block';
//   report.style.display = 'none';

//   navigator.mediaDevices.getUserMedia({ video: true })
//     .then(stream => {
//       video.srcObject = stream;
//     })
//     .catch(err => {
//       alert("Camera access denied. Please allow webcam.");
//       console.error(err);
//     });
// });

// // ✅ Step 2: Capture image and analyze when button clicked
// captureBtn.addEventListener('click', () => {
//   const canvas = document.createElement('canvas');
//   canvas.width = video.videoWidth;
//   canvas.height = video.videoHeight;
//   const ctx = canvas.getContext('2d');
//   ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

//   const imageData = canvas.toDataURL('image/png');
//   selfie.src = imageData;
//   selfie.style.display = 'block';

//   // Stop camera
//   video.srcObject.getTracks().forEach(track => track.stop());

//   // Show report section
//   report.style.display = 'block';

//   // Call analysis function
//   analyzeRealSkin(imageData);
// });

// // ✅ Send image to Face++ API
// async function sendToFaceAPI(base64Image) {
//   const formData = new FormData();
//   formData.append('api_key', FACEPP_API_KEY);
//   formData.append('api_secret', FACEPP_API_SECRET);
//   formData.append('image_base64', base64Image.split(',')[1]); // Remove 'data:image/png;base64,'
//   formData.append('return_attributes', 'skinstatus');

//   const response = await fetch('https://api-us.faceplusplus.com/facepp/v3/detect', {
//     method: 'POST',
//     body: formData
//   });

//   const data = await response.json();
//   return data;
// }

// // ✅ Analyze and display result
// async function analyzeRealSkin(imageBase64) {
//   results.innerHTML = '⏳ Analyzing your skin...';

//   try {
//     const data = await sendToFaceAPI(imageBase64);
//     console.log('Face++ API response:', data);

//     const skin = data.faces[0]?.attributes?.skinstatus;

//     if (!skin) {
//       results.innerHTML = '⚠️ No face or skin data detected.';
//       return;
//     }

//     // ✅ Show skin results
//     results.innerHTML = `
//       <p>🧴 <strong>Acne:</strong> ${(skin.acne * 100).toFixed(1)}%</p>
//       <p>💧 <strong>Health:</strong> ${(skin.health * 100).toFixed(1)}%</p>
//       <p>🕳️ <strong>Stain:</strong> ${(skin.stain * 100).toFixed(1)}%</p>
//       <p>🔴 <strong>Dark Circles:</strong> ${(skin.dark_circle * 100).toFixed(1)}%</p>
//     `;

//   } catch (err) {
//     console.error('Analysis error:', err);
//     results.innerHTML = '❌ Analysis failed: ' + err.message;
//   }
// }

function buyNow(productId) {
  // Redirect with product ID (you can expand later with localStorage or query params)
  window.location.href = `product-details.html?id=${productId}`;
}

// const aiSkinAnalysisBtn = document.getElementById('aiSkinAnalysisBtn');
// const loadingSpinner = document.getElementById('loadingSpinner');
// const skinAnalysisResult = document.getElementById('skinAnalysisResult');
// const analysisReport = document.getElementById('analysisReport');

// // Set up RapidAPI key and endpoint (You'll need to replace with actual API details)
// const rapidApiKey = "aff4c69d03msh988e59763155012p1b406djsn74b9cdb665ca";
// const apiUrl = "https://skin-analyze.p.rapidapi.com/facebody/analysis/skinanalyze ";

// // Function to start the analysis process
// aiSkinAnalysisBtn.addEventListener('click', () => {
//     // Start showing the loading spinner
//     loadingSpinner.style.display = 'block';
//     skinAnalysisResult.style.display = 'none';

//     // Simulate image capture from a webcam or a file input
//     captureImage().then(imageData => {
//         // Send the image data to the API
//         analyzeSkin(imageData);
//     }).catch(err => {
//         loadingSpinner.style.display = 'none';
//         alert("Error capturing the image: " + err);
//     });
// });

// // Simulated image capture function (replace with actual camera functionality)
// function captureImage() {
//     return new Promise((resolve, reject) => {
//         // Here you can use a webcam API or file input for capturing images
//         // For simplicity, this example uses a placeholder image data.
//         const imageData = "data:image/jpeg;base64,...";  // Base64 encoded image data
//         resolve(imageData);
//     });
// }

// // Function to analyze the skin using the RapidAPI endpoint
// function analyzeSkin(imageData) {
//     // Hide the loading spinner
//     loadingSpinner.style.display = 'none';

//     // Prepare the request headers and data
//     const requestHeaders = {
//         "Content-Type": "application/json",
//         "X-RapidAPI-Key": rapidApiKey,
//         "X-RapidAPI-Host": "aff4c69d03msh988e59763155012p1b406djsn74b9cdb665ca"
//     };

//     const requestData = {
//         image: imageData // This is the image data (Base64 encoded or file format as required by the API)
//     };

//     // Use fetch to make the API call
//     fetch(apiUrl, {
//         method: "POST",
//         headers: requestHeaders,
//         body: JSON.stringify(requestData)
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Display the result from the API
//         skinAnalysisResult.style.display = 'block';
//         analysisReport.innerHTML = `
//             <p><strong>Skin Type:</strong> ${data.skin_type}</p>
//             <p><strong>Recommendations:</strong> ${data.recommendations.join(', ')}</p>
//         `;
//     })
//     .catch(error => {
//         alert("Error analyzing the skin: " + error);
//     });
// }

const aiSkinAnalysisBtn = document.getElementById('aiSkinAnalysisBtn');
const captureBtn = document.getElementById('captureBtn');

aiSkinAnalysisBtn.addEventListener('click', () => {
    startCamera();  // Start the camera
});

captureBtn.addEventListener('click', () => {
    captureImage();  // Capture the image when clicked
});

function startCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            const video = document.getElementById('video');
            video.style.display = 'block';
            video.srcObject = stream;
        })
        .catch(err => {
            alert("Camera access denied. Please allow webcam.");
            console.error(err);
        });
}

function captureImage() {
    const video = document.getElementById('video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL('image/png');
    document.getElementById('selfie').src = imageData;
    document.getElementById('selfie').style.display = 'block';

    // Stop the video stream
    video.srcObject.getTracks().forEach(track => track.stop());

    analyzeSkin(imageData);
}

function analyzeSkin(imageData) {
    const requestHeaders = {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "aff4c69d03msh988e59763155012p1b406djsn74b9cdb665ca",
        "X-RapidAPI-Host": "skin-analyze.p.rapidapi.com"
    };

    const requestData = {
        image: imageData
    };

    fetch("https://skin-analyze.p.rapidapi.com/facebody/analysis/skinanalyze ", {
        method: "POST",
        headers: requestHeaders,
        body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
        displaySkinResults(data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Error analyzing the skin: " + error);
    });
}

function displaySkinResults(data) {
  const skinAnalysisResult = document.getElementById('skinAnalysisResult');
  const analysisReport = document.getElementById('analysisReport');

  skinAnalysisResult.style.display = 'block';

  const skinType = data.skin_type || 'Unknown';
  const recommendations = Array.isArray(data.recommendations)
      ? data.recommendations.join(', ')
      : 'No recommendations available.';

  analysisReport.innerHTML = `
      <p><strong>Skin Type:</strong> ${skinType}</p>
      <p><strong>Recommendations:</strong> ${recommendations}</p>
  `;
}
// function displaySkinResults(data) {
//     const skinAnalysisResult = document.getElementById('skinAnalysisResult');
//     const analysisReport = document.getElementById('analysisReport');

//     skinAnalysisResult.style.display = 'block';
//     analysisReport.innerHTML = `
//         <p><strong>Skin Type:</strong> ${data.skin_type}</p>
//         <p><strong>Recommendations:</strong> ${data.recommendations.join(', ')}</p>
//     `;
// }