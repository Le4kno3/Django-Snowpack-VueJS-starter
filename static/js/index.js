import "../../src/scss/index.scss";

import "./ProjectListingApp.js";

if (import.meta.hot) {
    import.meta.hot.accept(({ module }) => {
        import.meta.hot.invalidate();
    });
}

document.querySelector("h2").innerHTML = "djsnowpack working fine !!!";
