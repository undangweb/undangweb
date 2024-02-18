const modalbtn = document.getElementById("modalbtn");
let index = 0;
let iModal = 0;
function modalShow(i) {
    index = i;
    modalbtn.click();
}

function onlyNumberKey(evt) {
    // Only ASCII character in that range allowed
    var ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
    return true;
}

document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /**
     * Preloader
     */

    /**
     * Mobile nav toggle
     */
    const mobileNavShow = document.querySelector(".mobile-nav-show");
    const mobileNavHide = document.querySelector(".mobile-nav-hide");
    const scrollTop = document.querySelector(".scroll-top");
    const cbody = document.querySelector("body");

    function mobileNavToogle(target0) {
        mobileNavShow.classList.toggle("d-none");
        mobileNavHide.classList.toggle("d-none");
        if (cbody.classList.contains("mobile-nav-active")) {
            setTimeout(() => {
                if (target0) {
                    windowScroll(target0);
                }
            }, 800);
        }
        cbody.classList.toggle("mobile-nav-active");
    }

    mobileNavShow.onclick = () => {
        mobileNavToogle();
    };
    mobileNavHide.onclick = mobileNavToogle;

    /**
     * Toggle mobile nav dropdowns
     */
    const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

    navDropdowns.forEach(el => {
        el.addEventListener("click", function (event) {
            if (document.querySelector(".mobile-nav-active")) {
                event.preventDefault();
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("dropdown-active");

                let dropDownIndicator = this.querySelector(
                    ".dropdown-indicator"
                );
                dropDownIndicator.classList.toggle("bi-chevron-up");
                dropDownIndicator.classList.toggle("bi-chevron-down");
            }
        });
    });

    const navpage = document.getElementById("navpage");

    function navActive(target0) {
        const navpage0 = navpage.classList.item(0);
        if (navpage0 != target0) {
            document.querySelector("#navpage ." + navpage0).style.color =
                "rgba(255, 255, 255, 0.5)";
            document
                .querySelector("#navpage ." + navpage0)
                .classList.remove("active");

            document.querySelector("." + target0).style.color =
                "var(--color-default)";
            document.querySelector("." + target0).classList.toggle("active");
            navpage.classList.replace(navpage0, target0);
        }
    }

    function windowScroll(target0) {
        window.scrollTo({
            top:
                document.getElementById(target0).getBoundingClientRect().top -
                document.body.getBoundingClientRect().top,
            behavior: "smooth"
        });
    }

    navpage.onclick = e => {
        e.preventDefault();
        const target0 = e.target.classList.item(0);
        if (
            target0 &&
            !e.target.classList.contains("active") &&
            !e.target.classList.contains("dropdown")
        ) {
            if (cbody.classList.contains("mobile-nav-active")) {
                navActive(target0);
                mobileNavToogle(target0);
            } else {
                windowScroll(target0);
            }
        }
    };

    const windowHeight = (window.innerHeight * 30) / 100;
    window.onscroll = () => {
        const scrollPercent =
            window.scrollY / (document.body.offsetHeight - window.innerHeight);

        const scrollPercentRounded = Math.round(scrollPercent * 100);

        const degrees = scrollPercent * 360;

        document.querySelector(
            ".scrollbar"
        ).style.background = `conic-gradient(#eee ${
            degrees + 5
        }deg, rgba(0,0,0,0) ${degrees}deg)`;

        if (
            document.getElementById("about").getBoundingClientRect().top <
            windowHeight
        ) {
            navActive("about");
        } else if (
            document.getElementById("services").getBoundingClientRect().top <
            windowHeight
        ) {
            navActive("services");
        } else if (
            document.getElementById("home").getBoundingClientRect().top <
            windowHeight
        ) {
            navActive("home");
        }
    };

    /**
     * Scroll top button
     */

    if (scrollTop) {
        const togglescrollTop = function () {
            window.scrollY > 100
                ? scrollTop.classList.add("active")
                : scrollTop.classList.remove("active");
        };
        window.addEventListener("load", togglescrollTop);
        document.addEventListener("scroll", togglescrollTop);
        document
            .querySelector(".scroll-top .bi")
            .addEventListener("click", () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });
    }

    const myCarousel = document.getElementById("carouselExampleIndicators");
    const navbarsinput = document.querySelectorAll("#navbar2 input");
    myCarousel.addEventListener("slide.bs.carousel", event => {
        navbarsinput[event.to].click();
    });

    document
        .querySelectorAll('[data-bs-toggle="tooltip"]')
        .forEach(tooltipTriggerEl => {
            const tooltip = new bootstrap.Tooltip(tooltipTriggerEl);
            tooltipTriggerEl.addEventListener("show.bs.tooltip", () => {
                setTimeout(() => {
                    tooltip.hide();
                }, 1300);
            });
        });

    function copyToClipboard(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text.textContent;

        text.appendChild(textArea);

        textArea.select();
        textArea.setSelectionRange(0, text.textContent.length);

        navigator.clipboard.writeText(textArea.value);

        text.removeChild(textArea);
    }

    document.getElementById("copyNomor").onclick = () => {
        copyToClipboard(document.getElementById("nomorAdmin"));
    };

    document.getElementById("copykode").onclick = () => {
        copyToClipboard(document.getElementById("kodebayar"));
    };

    document.querySelectorAll(".bi-clipboard").forEach(e => {
        e.onclick = ev => {
            navigator.clipboard.readText().then(copiedText => {
                document.getElementById(ev.target.dataset.id).value =
                    copiedText;
            });
        };
    });

    function showConfetti() {
        function random(max) {
            return Math.random() * (max - 0) + 0;
        }

        var c = document.createDocumentFragment();
        for (var i = 0; i < 100; i++) {
            var styles =
                "transform: translate3d(" +
                (random(500) - 250) +
                "px, " +
                (random(200) - 150) +
                "px, 0) rotate(" +
                random(360) +
                "deg);\
                  background: hsla(" +
                random(360) +
                ",100%,50%,1);\
                  animation: bang 1500ms 300ms ease-out forwards;\
                  opacity: 0";

            var e = document.createElement("i");
            e.style.cssText = styles.toString();
            c.appendChild(e);
        }

        document.getElementById("confetti").append(c);
    }

    // Instead of using a selector, define the gallery elements

    const myGallery = GLightbox({
        touchNavigation: true,
        loop: true,
        closeOnOutsideClick: false,
        autoplayVideos: true,
        elements: []
    });

    function aos_init() {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
            mirror: false
        });
    }

    // If later you need to modify the elements you can use setElements
    //myGallery.setElements([...]);

    /**
     * Init swiper slider with 1 slide at once in desktop view
     */
    new Swiper(".slides-3", {
        scrollbar: { draggable: false },
        speed: 600,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: "auto",
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 40
            },

            1200: {
                slidesPerView: 3
            }
        }
    });

    let swiper;
    function newSwiper() {
        swiper = new Swiper(".slides-1", {
            speed: 600,
            loop: true,
            slidesPerView: "auto",
            autoplay: false,
            allowTouchMove: false,
            spaceBetween: 1,
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        });
    }

    const imgsView = document.querySelector(".modal .bi-aspect-ratio");

    imgsView.onclick = () => {
        myGallery.open();
        document.querySelector(".gclose").onclick = e => {
            datepicker.hide();
            datepickerInput.blur();
            document.querySelectorAll(".cobanama")[0].blur();
        };
    };

    const elem = document.querySelector('input[name="foo"]');
    const datepicker = new Datepicker(elem, {
        autohide: true,
        language: "id"
    });
    const datepickerInput = document.querySelector(".datepicker-input");
    const inputtgl = document.getElementById("inputtgl");

    document.querySelector(".datepicker-grid").addEventListener("click", e => {
        if (e.target.classList.contains("day")) {
            datepickerInput.blur();
            const a = new Date();
            const x = new Date(a.getFullYear(), a.getMonth(), a.getDate() + 40);
            setTimeout(() => {
                const b = inputtgl.value.split("/");
                const c = new Date(
                    "" + b[1] + "/" + b[0] + "/" + b[2] + ""
                ).getTime();
                if (c < a.getTime()) {
                    inputtgl.value = "";
                    alert(
                        "Tanggal sudah terlewat!\nSilahkan masukan tanggal yang benar."
                    );
                } else if (x.getTime() < c) {
                    inputtgl.value = "";
                    alert(
                        "Maksimal 40 hari sebelum hari H !\nTanggal resepsi yang anda masukan diatas 40 hari dari hari sekarang.\nSilahkan coba lagi di lain hari."
                    );
                }
                datepicker.update({
                    autohide: true,
                    forceRefresh: true
                });
            }, 100);
        }
    });

    const bayarArea = document.getElementById("bayarArea");
    const closeBayar = document.getElementById("closeBayar");
    closeBayar.onclick = () => {
        bayarArea.style.transform = "translateX(100%)";
        document.querySelectorAll(".bayarbtn").forEach(e => {
            e.classList.remove("d-none");
        });
        document.querySelector(".ujicobabtn").classList.remove("d-none");
    };

    /**
     * Init swiper slider with 3 slides at once in desktop view
     */

    const hargaAhir = document.getElementById("hargaAhir");
    const trDisc = document.getElementById("trDisc");
    const tglbtn = document.getElementById("tglbtn");

    document.querySelectorAll(".bayarbtn").forEach((e, i) => {
        e.onclick = () => {
            const harga = data[iModal][1].split(";");
            const tgl = document.getElementById("inputtgl").value.split("/");
            if (i == 0) {
                hargaAhir.textContent =
                    "Rp. " +
                    (harga[0] - harga[1])
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                document.getElementById("discAhir").textContent =
                    "Rp. " +
                    harga[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                document.getElementById("persenAhir").textContent =
                    Math.round((harga[1] / harga[0]) * 100) + "%";

                document.getElementById("kodebayar").textContent =
                    data[index][0]
                        .split(";")[0]
                        .split(" #")
                        .join("#")
                        .toLowerCase() +
                    "/vt/" +
                    new Date(tgl[1] + "/" + tgl[0] + "/" + tgl[2]).getTime();
                if (trDisc.classList.contains("d-none")) {
                    trDisc.classList.remove("d-none");
                }
            } else {
                if (!inputtgl.value) {
                    tglbtn.click();
                    return;
                }
                hargaAhir.textContent =
                    "Rp. " +
                    harga[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                document.getElementById("kodebayar").textContent =
                    data[index][0]
                        .split(";")[0]
                        .split(" #")
                        .join("#")
                        .toLowerCase() +
                    "/vf/" +
                    new Date(tgl[1] + "/" + tgl[0] + "/" + tgl[2]).getTime();
                if (!trDisc.classList.contains("d-none")) {
                    trDisc.classList.toggle("d-none");
                }
            }
            bayarArea.style.transform = "none";
            setTimeout(() => {
                e.classList.toggle("d-none");
                document
                    .querySelector(".ujicobabtn")
                    .classList.toggle("d-none");
            }, 400);
        };
    });

    function xVoucher(a, b, c) {
        a = document.getElementById(a);
        b = document.getElementById(b);
        if (c == 0) {
            a.style.transform = "translateX(-100%)";
            b.style.transform = "translateY(-102%)";
        } else if (a.style.transform == "none") {
            if (c == "ya") {
                a.style.transform = "translateX(-100%)";
            } else {
                a.style.transform = "translateY(-102%)";
            }
            setTimeout(() => {
                b.style.transform = "none";
            }, 300);
        } else {
            b.style.transform = "none";
        }
    }

    document.getElementById("yaVoucher").onclick = () => {
        xVoucher("noVoucherX", "yaVoucherX");
    };

    document.getElementById("noVoucher").onclick = () => {
        xVoucher("yaVoucherX", "noVoucherX", "ya");
    };

    /**
     * Animation on scroll function and init
     */

    let data;

    document.querySelector(".modal-footer .imgs").onclick = () => {
        imgsView.click();
    };

    const imgs1 = document.querySelector("#gallery-single .swiper-wrapper");
    const fiturArea = document.getElementById("fiturArea");
    const ulasanArea = document.getElementById("ulasanArea");
    const inputVoucher = document.getElementById("inputVoucher");

    modalbtn.addEventListener("click", () => {
        if (index == iModal) {
            return;
        }
        if (iModal > 0) {
            swiper.destroy(true, false);
        }
        document.querySelectorAll("#navbar2 label")[0].click();
        fiturArea.innerHTML = "";
        document.getElementById("exampleModalLabel").innerHTML = `${
            data[index][0].split(";")[0]
        }`;
        const fiturs = data[index][3].split(";");
        fiturs.forEach(e => {
            fiturArea.innerHTML += `
                  <li><i class="bi bi-chevron-right"></i> ${e}</li>`;
        });

        const imgs = data[index][2].split(";");
        imgs1.innerHTML = "";
        const imgs2 = [];

        imgs.forEach((e, i) => {
            imgs1.innerHTML += ` <div class="swiper-slide d-flex">
                <img class="position-absolute w-100" src="${e}" alt="">
                  <div class="m-auto"><i class="bi-file-earmark-image" style="font-size:5rem"></i></div>
              </div>`;
            imgs2.push({
                href: e,
                type: "image",
                title: i + 1 + "/" + imgs.length
            });
        });

        if (
            !document
                .querySelector("#hargaArea > div:first-child")
                .classList.contains("d-none")
        ) {
            document
                .querySelector("#hargaArea > div:first-child")
                .classList.toggle("d-none");
        }
        document
            .querySelector("#hargaArea > div:last-child")
            .classList.remove("d-none");

        const harga = data[index][1].split(";");
        document.querySelectorAll(".modal .harga1").forEach((e, i) => {
            e.textContent =
                "Rp. " +
                harga[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            document.querySelectorAll(".modal .disc")[i].textContent =
                "Rp. " +
                harga[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        });
        document.getElementById("hargaDisc").textContent =
            "Rp. " +
            (harga[0] - harga[1])
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        document.getElementById("persenDisc").textContent =
            Math.round((harga[1] / harga[0]) * 100) + "%";
        document.querySelectorAll(".bayarbtn").forEach(e => {
            e.innerHTML = "Bayar Langsung<br>" + data[index][0].split(";")[0];
            e.classList.remove("d-none");
        });
        document.querySelector(".ujicobabtn").classList.remove("d-none");

        voucherbtn.classList.remove("disabled");

        datepickerInput.value = "";
        closeBayar.click();
        inputVoucher.value = "";
        document.getElementById("xya").checked = false;
        document.getElementById("xno").checked = false;
        xVoucher("yaVoucherX", "noVoucherX", 0);
        document.getElementById("modalcoba").style.zIndex = -1;
        document.getElementById("modalcoba").style.opacity = 0;
        datepicker.update({
            autohide: true,
            forceRefresh: true
        });
        newSwiper();
        myGallery.setElements(imgs2);
        iModal = index;
    });

    function Fetch(obj, type) {
        return fetch(source.urldb, {
            method: "POST",
            body: JSON.stringify(obj)
        })
            .then(respon => {
                if (!respon.ok) {
                    throw new Error(respon.statusText.toLowerCase());
                }
                if (type == undefined) {
                    return respon.json();
                } else {
                    return respon.text();
                }
            })
            .then(respon => {
                return respon;
            });
    }

    let voucherHistory;
    const cekVoucher = document.forms["cekVoucher"];
    const voucherbtn = document.getElementById("voucherbtn");
    //   const voucherDanger = document.getElementById("voucherDanger");

    cekVoucher.onsubmit = async function (e) {
        e.preventDefault();

        if (!inputtgl.value) {
            tglbtn.click();
            return;
        }

        if (inputVoucher.value == data[0][2]) {
            voucherbtn.textContent = "Konfirmasi";
            voucherbtn.classList.remove("disabled");
            if (voucherHistory == undefined) {
                showConfetti();
            }

            voucherHistory = inputVoucher.value;

            document.querySelectorAll("#hargaArea > div").forEach(e => {
                e.classList.toggle("d-none");
            });
        } else {
            inputVoucher.value = "";
            alert("Voucher tidak aktif !");
        }
        return;
        try {
            const cek = await Fetch({
                SHEETID: source.sheetid,
                SHEETNAME: "Customer",
                FN: "QUERY",
                SQL: `SELECT A,B WHERE A = '${inputVoucher.value}' AND B = ''`
            });

            voucherbtn.textContent = "Konfirmasi";
            voucherbtn.classList.remove("disabled");
            if (cek[0][0] == inputVoucher.value) {
                document.querySelectorAll("#hargaArea > div").forEach(e => {
                    e.classList.toggle("d-none");
                });

                if (voucherHistory == undefined) {
                    showConfetti();
                }

                voucherHistory = inputVoucher.value;
            } else {
                inputVoucher.value = "";
                alert("Voucher tidak aktif !");
            }
        } catch (err) {
            alert("Terjadi ERROR !\nSilahkan coba lagi nanti.");
        }
    };

    const ulasanbtn = document.querySelector(".ulasanbtn");
    let jmlLoadUlasan = 0;

    async function loadUlasan() {
        try {
            const ulasans = await Fetch({
                SHEETID: source.sheetid,
                FN: "ULASAN"
            });

            if (ulasans.length < 1) {
                ulasanArea.innerHTML = `<span class="m-auto" style="color:rgba(255,255,255,.6)">~ Belum ada ulasan ~</span>`;
                return;
            }

            ulasanArea.innerHTML = "";

            ulasans.forEach((e, i) => {
                ulasanArea.innerHTML += `<div class="p-3 mb-2 shadow-sm">
              <span class="d-flex justify-content-between"><h6 class="my-0"><i class="bi bi-people-fill" style="color:var(--color-primary);font-size:1.1rem"></i> <span class="nama" style="text-transform: capitalize;"></span></h6><p class="my-0 tgl" style="font-size:.8rem;color:rgba(255,255,255,.6)"></p></i></span>
              <p class="fst-italic my-0 komen" style="white-space:pre-wrap"></p>
            </div>`;
                ulasanArea.querySelectorAll(".nama")[i].textContent = e[0]
                    .split(";")
                    .join(" & ");
                ulasanArea.querySelectorAll(".tgl")[i].textContent =
                    e[1].split(";")[0];
                ulasanArea.querySelectorAll(".komen")[i].textContent =
                    e[1].split(";")[1];
            });
        } catch (err) {
            if (jmlLoadUlasan < 4) {
                setTimeout(() => {
                    ulasanbtn.click();
                }, 10000);
            } else {
                if (confirm("Masalah koneksi!\nMuat ulang sekarang ?")) {
                    location.reload();
                } else {
                    ulasanArea.innerHTML = "";
                }
            }
            jmlLoadUlasan += 1;
        }
    }

    ulasanArea.innerHTML = "";
    ulasanbtn.onclick = e => {
        if (!ulasanArea.innerHTML || ulasanArea.innerHTML == "") {
            ulasanArea.innerHTML = `<div class="spinner-border m-auto" style="width: 2rem; height: 2rem;color:var(--color-primary);background-color:rgba(0,0,0,0)" role="status">
</div>`;
            loadUlasan();
        }
    };

    function loaddata1(dataStart, max) {
        return new Promise(resolve => {
            document.querySelector("#gallery .row").innerHTML = "";
            const jmlPerPage = 8;
            if (data.length < dataStart + jmlPerPage) {
                max = data.length + 1;
            } else {
                max = dataStart + jmlPerPage;
            }
            for (let i = dataStart; i < max; i++) {
                if (max - i == 1 && data.length < dataStart + jmlPerPage) {
                    document.querySelector(
                        "#gallery .row"
                    ).innerHTML += `<div class="d-flex flex-column align-items-center col-xl-3 col-lg-4 col-md-6 px-1">
            <div class="gallery-item rounded">
          <div class="card rounded-bottom-0 border-0">

          <img src="https://lh3.googleusercontent.com/d/19RgopyIbkocALx79tb92igBBxSyl2NMm"  alt="" class="position-absolute w-100">
              <div class="gallery-links">
              </div>
        
          <div class="m-auto"><i class="bi-file-earmark-image" style="font-size:5rem"></i></div>
</div><p class="py-2 mb-0 text-center">Desain lainnya #</p></div>

          </div>`;
                } else {
                    document.querySelector(
                        "#gallery .row"
                    ).innerHTML += `<div class="d-flex flex-column align-items-center col-xl-3 col-lg-4 col-md-6 px-1">
            <div class="gallery-item rounded"  onclick="modalShow(${i})">
          <div class="card rounded-bottom-0 border-0">

          <img src="${
              data[i][2].split(";")[0]
          }"  alt="" class="position-absolute w-100">
              <div class="gallery-links">
              </div>
        
          <div class="m-auto"><i class="bi-file-earmark-image" style="font-size:5rem"></i></div>
</div><p class="py-2 mb-0 d-flex justify-content-between px-3"><span>${
                        data[i][0].split(";")[1]
                    }</span><span style="color:rgba(255,255,255,.6)">${
                        data[i][0].split(";")[0]
                    }</span></p></div>

          </div>`;
                }
            }

            const jmlPage = Math.ceil((data.length - 1) / jmlPerPage);
            if (jmlPage > 1) {
                document
                    .querySelector(".pagenav")
                    .classList.replace("d-none", "d-flex");
                pagination(
                    dataStart,
                    jmlPerPage,
                    jmlPage,
                    document.querySelector(".pagination")
                );
            }

            setTimeout(() => {
                resolve("ok");
            }, 100);
        });
    }

    function pagination(dataStart, jmlPerPage, jmlPage, pageNav) {
        pageNav.innerHTML = "";
        const pageNow = (dataStart - 1) / jmlPerPage + 1;
        let max = 7;
        if (jmlPage < 7) {
            max = jmlPage;
        }
        if (dataStart != 1) {
            pageNav.innerHTML += `<li class="page-item">
      <a class="page-link fw-bold" style="font-size:1.2rem" data-page="prev" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>`;
        }
        let a = "";
        for (let i = 1; i < max; i++) {
            if (i == pageNow) {
                a = "active";
            }
            pageNav.innerHTML += `
    <li class="page-item ${a}"><a class="page-link fw-bold" style="font-size:1.2rem" data-page="${i}">${i}</a></li>`;
            a = "";
            if (pageNow - 1 > 2 && i < pageNow - 2 && jmlPage > 7) {
                if (pageNow + 3 <= jmlPage) {
                    i = pageNow - 3;
                    max = pageNow + 3;
                } else if (jmlPage - pageNow < 3 && i <= jmlPage - pageNow) {
                    i = pageNow - 3 - (3 - (jmlPage - pageNow));
                    max = pageNow + (jmlPage - pageNow);
                } else if (jmlPage == pageNow && i < pageNow - 5) {
                    i = pageNow - 6;
                    max = jmlPage;
                }
            }
        }
        let b = "";
        if (pageNow == jmlPage) {
            b = "active";
        }
        pageNav.innerHTML += `
    <li class="page-item ${b}"><a class="page-link fw-bold" style="font-size:1.2rem" data-page="${jmlPage}">${jmlPage}</a></li>`;
        if (pageNow != jmlPage) {
            pageNav.innerHTML += `<li class="page-item">
      <a class="page-link fw-bold" style="font-size:1.2rem" data-page="next" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>`;
        }

        pageNav.onclick = async e => {
            if (e.target.dataset.page == "next") {
                await loaddata1(dataStart + jmlPerPage);
            } else if (e.target.dataset.page == "prev") {
                await loaddata1(dataStart - jmlPerPage);
            } else if (parseInt(e.target.dataset.page) > 0) {
                await loaddata1(
                    (parseInt(e.target.dataset.page) - 1) * jmlPerPage + 1
                );
            }

            windowScroll("gal");
        };
    }

    document.querySelector(".ujicobabtn").onclick = e => {
        document.getElementById("modalcoba").style.zIndex = 2;
        document.getElementById("modalcoba").style.opacity = 1;
    };

    document.querySelectorAll(".cobanama").forEach((e, i) => {
        e.onkeyup = function () {
            if (this.value.includes("&")) {
                this.value = xnama[i];
            } else {
                xnama[i] = this.value;
            }
        };
    });

    document.forms["formcoba"].onsubmit = e => {
        e.preventDefault();

        document.getElementById("modalcoba").style.zIndex = -1;
        document.getElementById("modalcoba").style.opacity = 0;
        window.open(
            data[0][0] +
                data[index][0]
                    .split(";")[0]
                    .split(" #")
                    .join("/")
                    .toLowerCase() +
                "?" +
                document.querySelectorAll(".cobanama")[0].value +
                "&" +
                document.querySelectorAll(".cobanama")[1].value,
            "_blank"
        );
    };

    document.querySelectorAll(".pratinjau").forEach((e, i) => {
        e.onclick = () => {
            document.getElementById("linkPratinjau").href =
                data[0][0] +
                data[index][0]
                    .split(";")[0]
                    .split(" #")
                    .join("/")
                    .toLowerCase();
            document.getElementById("linkPratinjau").click();
        };
        document.querySelectorAll(".adminbtn")[i].onclick = () => {
            document.getElementById("linkAdmin").click();
        };
    });

    const preloader = document.querySelector("#preloader");
    let jmlLoad = 0;

    async function load1() {
        try {
            data = await Fetch({
                SHEETID: source.sheetid,
                FN: "READ"
            });

            await loaddata1(1);

            data[0][3].toLowerCase() == "open"
                ? document.getElementById("isOpen").classList.remove("d-none")
                : "";
            document.getElementById("nomorAdmin").textContent =
                data[0][1].split(";")[0];

            document.getElementById("linkAdmin").href =
                "https://api.whatsapp.com/send?phone=" +
                data[0][1].split(";")[1];
            document.getElementById("namaAdmin").textContent =
                "(" + data[0][1].split(";")[2] + ")";

            if (preloader) {
                preloader.classList.add("loaded");
                aos_init();
                setTimeout(() => {
                    navbarsinput.forEach((e, i) => {
                        if (i > 0) {
                            e.checked = false;
                        } else {
                            e.checked = true;
                        }
                    });
                    document.getElementById("xya").checked = false;
                    document.getElementById("xno").checked = false;
                    preloader.remove();
                }, 2000);
            }
        } catch (err) {
            if (data == undefined) {
                if (jmlLoad < 4) {
                    setTimeout(() => {
                        load1();
                    }, 10000);
                } else {
                    if (confirm("Masalah koneksi!\nMuat ulang sekarang ?")) {
                        location.reload();
                    } else {
                        document.body.innerHTML = `<h1 class="text-center" style="margin-top:30vh">Masalah Koneksi !</h1><p class="text-center"><button class="btn btn-primary" onclick="location.reload()">Muat Ulang!</button></p>`;
                    }
                }
                jmlLoad += 1;
            }
        }
    }

    window.addEventListener("load", () => {
        load1();
    });
});
