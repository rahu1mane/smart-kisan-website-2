document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const cropId = urlParams.get("id");

    fetch("crop_data.json")
        .then(response => response.json())
        .then(data => {
            const crop = data.find(c => c.id === cropId);
            if (crop) {
                document.getElementById("crop-name").textContent = crop.name;
                document.getElementById("crop-image").src = crop.image;
                document.getElementById("crop-image").alt = crop.name;

                let detailsDiv = document.getElementById("crop-details");
                Object.keys(crop).forEach(key => {
                    if (key !== "id" && key !== "image") { // Removed "category"
                        let p = document.createElement("p");
                        p.innerHTML = `<strong>${key.replace(/_/g, " ")}:</strong> ${crop[key]}`;
                        detailsDiv.appendChild(p);
                    }
                });
            } else {
                document.getElementById("crop-details").innerHTML = "<p>Crop not found.</p>";
            }
        })
        .catch(error => console.error("Error loading crop data:", error));
});
