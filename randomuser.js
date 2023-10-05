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