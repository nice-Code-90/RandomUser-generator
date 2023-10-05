document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const results = document.querySelector("[name=results]").value;
    const nat = document.querySelector("[name=nat]").value;

    fetch(`https://randomuser.me/api/?results=${results}&nat=${nat}`)
        .then((result) => result.json())
        .then((data) => {
            const userList = data.results;
            const markup = userList.map((user) => `
                <div class="user m-3">
                    <img src="${user.picture.large}" alt="Avatar of ${user.name.first} ${user.name.last}"/>
                    <div>${user.name.first} ${user.name.last}</div>
                    <div>
                        ${user.email}
                    </div>
                    <div>
                        ${user.location.city}, ${user.nat}
                    </div>
                </div>
            `).join("");
            document.querySelector(".js-users").innerHTML = markup;
        });
});

// Referenciák létrrehozása
const exportButton = document.getElementById("exportButton");
const exportDropdown = document.querySelector(".export-dropdown");
const exportCSV = document.getElementById("exportCSV");
const exportJSON = document.getElementById("exportJSON");
const exportSQL = document.getElementById("exportSQL");

exportButton.addEventListener("click", () => {
    exportDropdown.style.display = exportDropdown.style.display === "block" ? "none" : "block";
});

//CSV export
exportCSV.addEventListener("click", () => {
    const userList = document.querySelectorAll(".user");

    if (userList.length === 0) {
        alert("Nem generáltattál semmilyen adatot!");
        return;
    }

    const csvData = [["Name", "Email", "Location"]];

    userList.forEach((user) => {
        const name = user.querySelector("div:nth-child(2)").textContent.trim();
        const email = user.querySelector("div:nth-child(3)").textContent.trim();
        const location = user.querySelector("div:nth-child(4)").textContent.trim();

        csvData.push([name, email, location]);
    });

     // CSV formátummá alakítása az adatoknak
     const csvContent = csvData.map((row) => row.join(",")).join("\n");