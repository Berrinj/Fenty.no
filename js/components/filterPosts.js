let selectHeading = document.querySelector(".news-and-content");

export function sortPosts(selectedValue) {    

    switch (selectedValue) {
        case "All":
            selectHeading.textContent = "ALLE INNLEGG";
            break;
        case "9":
            selectHeading.textContent = "FENTY BEAUTY";
            break;
        case "10":
            selectHeading.textContent = "FENTY SKIN";
            break;
        case "15":
            selectHeading.textContent = "SAVAGE X";
            break;
        case "12":
            selectHeading.textContent = "MUSIKK";
            break;
        case "14":
            selectHeading.textContent = "SAMARBEID";
            break;
        case "13":
            selectHeading.textContent = "PRISUTDELINGER";
            break;
        case "1":
            selectHeading.textContent = "UKATEGORISERT";
            break;
        default:
            selectHeading.textContent = "Alle innlegg";
    }
}
