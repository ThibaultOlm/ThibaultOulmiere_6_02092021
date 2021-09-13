// Récupérer les données depuis le fichier JSON
console.log("Toto")
fetch('FishEyeData.json')
    .then(res => res.json())
    .then(res2 => console.log(res2))
    .catch(error => console.log(error));