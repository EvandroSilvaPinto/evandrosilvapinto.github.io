
    document.querySelector("#page-top").classList.add("spinner");

    // Mimic Server Request
    setTimeout(() => {
        document.querySelector("#page-top").classList.remove("spinner");
        document.querySelector("#page-all").style.opacity = "1";
    }, 1500);
