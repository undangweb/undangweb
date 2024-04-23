(() => {
    "use strict";

    document.querySelector(
        ".containerEdit > ul > div:nth-child(4)"
    ).style.transform = `translateY(-${
        document.querySelector(".containerEdit > ul > div:nth-child(2) form")
            .offsetHeight -
        document.querySelector(".containerEdit > ul > div:nth-child(1) form")
            .offsetHeight
    }px)`;

    if (window.innerWidth > 1279) {
        document.querySelector(".containerEdit > ul").style.height =
            document.querySelector(".containerEdit > ul").offsetHeight -
            (document.querySelector(
                ".containerEdit > ul > div:nth-child(2) form"
            ).offsetHeight -
                document.querySelector(
                    ".containerEdit > ul > div:nth-child(1) form"
                ).offsetHeight) +
            "px";
        document.querySelector(
            ".containerEdit > ul > div:nth-child(4) .x1"
        ).style.transform = `translateY(-${
            document
                .querySelector(
                    ".containerEdit > ul > div:nth-child(4) form[name='formhadiah']"
                )
                .getBoundingClientRect().bottom -
            document
                .querySelector(".containerEdit > ul > div:nth-child(2) form")
                .getBoundingClientRect().bottom
        }px)`;
    }

    /**
     * Mobile nav toggle
     */
    const mobileNavShow = document.querySelector(".mobile-nav-show");
    const mobileNavHide = document.querySelector(".mobile-nav-hide");
    const scrollTop = document.querySelector(".scroll-top");

    function mobileNavToogle(target0) {
        mobileNavShow.classList.toggle("d-none");
        mobileNavHide.classList.toggle("d-none");
        if (document.body.classList.contains("mobile-nav-active")) {
            setTimeout(() => {
                if (target0) {
                    document.getElementById(target0).click();
                    windowScroll(target0);
                }
            }, 800);
        }
        document.body.classList.toggle("mobile-nav-active");
    }

    mobileNavShow.onclick = () => {
        mobileNavToogle();
    };
    mobileNavHide.onclick = mobileNavToogle;

    /**
     * Toggle mobile nav dropdowns
     */
    const navDropdowns = document.querySelectorAll(".dropdown > a");
    let dropdownActive = 0;

    function toggleDropdown(e) {
        e.classList.toggle("active");
        e.nextElementSibling.classList.toggle("dropdown-active");

        let dropDownIndicator = e.querySelector(".dropdown-indicator");
        dropDownIndicator.classList.toggle("bi-chevron-up");
        dropDownIndicator.classList.toggle("bi-chevron-down");
    }

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
        } else if (
            document
                .querySelector("#" + target0 + ">h5>i")
                .classList.contains("bi-chevron-down")
        ) {
            document.querySelector("#navpage ." + target0).style.color =
                "rgba(255, 255, 255, 0.5)";
        } else if (
            document
                .querySelector("#" + target0 + ">h5>i")
                .classList.contains("bi-chevron-up")
        ) {
            document.querySelector("#navpage ." + target0).style.color =
                "var(--color-default)";
        }
    }

    navDropdowns.forEach((el, i) => {
        el.addEventListener("click", function (event) {
            event.preventDefault();
            toggleDropdown(el);
            if (
                dropdownActive != undefined &&
                dropdownActive != i &&
                navDropdowns[dropdownActive].classList.contains("active")
            ) {
                toggleDropdown(navDropdowns[dropdownActive]);
            }
            dropdownActive = i;
            navActive(el.id);

            if (document.body.offsetHeight < window.innerHeight + 50) {
                document.getElementById("kosong").style.height =
                    window.innerHeight + 50 - document.body.offsetHeight + "px";
            } else {
                document.getElementById("kosong").style.height = 50 + "px";
            }
            if (
                document
                    .querySelector("#" + el.id + ">h5>i")
                    .classList.contains("bi-chevron-up")
            ) {
                windowScroll(el.id);
            }
        });
    });

    const navDropdownx = document.querySelectorAll(".dropdownx > a");
    navDropdownx.forEach((el, i) => {
        el.addEventListener("click", function (event) {
            event.preventDefault();
        });
    });

    function windowScroll(target0) {
        window.scrollTo({
            top:
                document.getElementById(target0).getBoundingClientRect().top -
                document.body.getBoundingClientRect().top -
                document.getElementById("header").offsetHeight,
            behavior: "smooth"
        });
    }

    navpage.onclick = e => {
        e.preventDefault();
        const target0 = e.target.classList.item(0);
        if (
            target0 &&
            !document
                .querySelector("#" + target0 + ">h5>i")
                .classList.contains("bi-chevron-up") &&
            !e.target.classList.contains("dropdown")
        ) {
            if (document.body.classList.contains("mobile-nav-active")) {
                navActive(target0);
                mobileNavToogle(target0);
            } else {
                windowScroll(target0);
            }
        }
    };

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

    function onlyNumberKey(evt) {
        // Only ASCII character in that range allowed
        var ASCIICode = evt.which ? evt.which : evt.keyCode;
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
        return true;
    }

    const elem = document.querySelector('input[name="foo"]');

    const datepicker = new Datepicker(elem, {
        autohide: true
    });

    document.querySelector(".mapsbtn").onclick = e => {
        e.preventDefault();
        document.querySelector(".iframemaps").src =
            "https://www.google.com/maps/embed/v1/search?q=" +
            encodeURI(document.getElementById("mapsresepsi").value) +
            "&zoom=17&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8";
    };

    function platform(e, i) {
        if (e == "bank") {
            document.querySelectorAll(".platform")[i].placeholder =
                "BRI, BCA, Mandiri...";
        } else if (e == "ewallet") {
            document.querySelectorAll(".platform")[i].placeholder =
                "DANA, OVO, GOPAY...";
        } else {
            document.querySelectorAll(".platform")[i].placeholder =
                "BRI, Mandiri, DANA, GOPAY...";
        }
    }

    function gender(e, i) {
        if (e == "Putra" || e == "Putri") {
            document.querySelectorAll(".genderx")[i].textContent = e;
        } else {
            document.querySelectorAll(".genderx")[i].textContent = "Putra/i";
        }
    }

    document.querySelectorAll(".cashless").forEach((e, i) => {
        document.querySelectorAll(".platform")[i].placeholder =
            "BRI, Mandiri, DANA, GOPAY...";
        e.onchange = function () {
            platform(this.value, i);
        };

        document.querySelectorAll(".gender")[i].onchange = function () {
            gender(this.value, i);
        };
    });

    document.getElementById("carimusik").onclick = e => {
        e.preventDefault();
        document.getElementById(
            "hasilcari"
        ).innerHTML = `<p class="text-center mt-4"><span
                  class="spinner-border spinner-border mx-auto"
                  role="status"
                  aria-hidden="true"
                ></span></p>`;
        fetch(
            "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDv3O8b6aS9UPYu6snKtvVF8ejNq3J2wj0&type=video&videoEmbeddable=true&part=snippet&safeSearch=strict&maxResults=9&q=" +
                encodeURI(document.getElementById("musik").value) +
                "%20-%20Topic"
        )
            .then(r => r.json())
            .then(r => {
                document.getElementById("hasilcari").innerHTML = "";
                r.items.forEach((e, i) => {
                    if (e.snippet.channelTitle != e.snippet.title) {
                        let btn = "";
                        if (data.musik.split(";")[1] != e.id.videoId) {
                            btn = `<button class="btn btn-primary m-auto pilihmusik" data-musik="${
                                e.snippet.channelTitle.split(" - Topic")[0] +
                                " - " +
                                e.snippet.title +
                                ";" +
                                e.id.videoId
                            }">Pilih</button>`;
                        }
                        document.getElementById(
                            "hasilcari"
                        ).innerHTML += `<hr><span class="d-flex justify-content-between"><h6 classmb-0>${
                            e.snippet.channelTitle.split(" - Topic")[0] +
                            " - " +
                            e.snippet.title
                        }</h6><span>${btn}</span></span>`;
                    }
                });
            });
    };

    let indexpilihfoto;
    document.querySelectorAll(".pilihfoto").forEach((e, i) => {
        e.onclick = x => {
            x.preventDefault();
            indexpilihfoto = i;
            document.getElementById("inputimg").value = "";
            document.getElementById("inputimg").click();
        };
    });

    document.querySelectorAll(".tampilfoto").forEach(x => {
        x.onload = e => {
            if (e.target.height < e.target.width) {
                e.target.style.height = "100%";
                e.target.style.width = "auto";
            } else {
                e.target.style.width = "100%";
                e.target.style.height = "auto";
            }
        };
    });

    document.getElementById("inputimg").onchange = async function () {
        document.querySelectorAll(".tampilfoto")[indexpilihfoto].src = "";
        document
            .querySelectorAll(".img-loader")
            [indexpilihfoto].classList.toggle("d-none");

        const a = await resizeIMG(this.files[0]);
        document.querySelectorAll(".tampilfoto")[indexpilihfoto].src = a;
        document
            .querySelectorAll(".img-loader")
            [indexpilihfoto].classList.toggle("d-none");
    };

    function resizeIMG(file) {
        return new Promise(resolve => {
            const fr = new FileReader();
            fr.readAsDataURL(file);
            fr.onloadend = () => {
                let res = fr.result;
                document.getElementById("imgreview").src = res;
                document.getElementById("imgreview").onload = e => {
                    const canvas = document.createElement("canvas");
                    const maxWidth = 1100;
                    const scaleSize = maxWidth / e.target.width;
                    canvas.width = maxWidth;
                    canvas.height = e.target.height * scaleSize;
                    const ctx = canvas.getContext("2d");
                    ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);
                    res = ctx.canvas.toDataURL(e.target, "image/jpeg");
                    resolve(res);
                };
            };
        });
    }

    let data;
    let data0;
    let index;
    let A;

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

    function setdata() {
        data = {
            desain: data[1],
            link: data[2],
            mempelai: data[3],
            mempelai1: data[4],
            mempelai2: data[5],
            resepsi: data[6],
            akad: data[7],
            lokasi: data[8],
            foto: data[9],
            hadiah: data[10],
            musik: data[11],
            ulasan: data[12].split(";")[1]
        };
    }

    function loaddata() {
        document.getElementById("desain").textContent =
            data.desain.toUpperCase();

        document.getElementById("nama1").value = data.mempelai.split(";")[0];
        document.getElementById("namalengkap1").value =
            data.mempelai1.split(";")[0];
        document.getElementById("gender1").value = data.mempelai1.split(";")[1];
        document.getElementById("keberapa1").value =
            data.mempelai1.split(";")[2];
        document.getElementById("bapak1").value = data.mempelai1.split(";")[3];
        document.getElementById("ibu1").value = data.mempelai1.split(";")[4];
        document.getElementById("nama2").value = data.mempelai.split(";")[1];
        document.getElementById("namalengkap2").value =
            data.mempelai2.split(";")[0];
        document.getElementById("gender2").value = data.mempelai2.split(";")[1];
        document.getElementById("keberapa2").value =
            data.mempelai2.split(";")[2];
        document.getElementById("bapak2").value = data.mempelai2.split(";")[3];
        document.getElementById("ibu2").value = data.mempelai2.split(";")[4];

        document.getElementById("tanggalakad").value = data.akad
            .split(";")[0]
            .split(" ")[0];
        document.getElementById("jamakad").value = data.akad
            .split(";")[0]
            .split(" ")[1];
        document.getElementById("tempatakad").value = data.akad.split(";")[3];
        document.getElementById("lokasiakad").value = data.akad.split(";")[4];
        document.getElementById("tanggalresepsi").value = data.resepsi
            .split(";")[0]
            .split(" ")[0];
        document.getElementById("mulairesepsi").value = data.resepsi
            .split(";")[0]
            .split(" ")[1];
        document.getElementById("akhirresepsi").value =
            data.resepsi.split(";")[1];
        document.getElementById("tempatresepsi").value =
            data.resepsi.split(";")[3];
        document.getElementById("lokasiresepsi").value =
            data.resepsi.split(";")[4];
        document.getElementById("mapsresepsi").value = decodeURI(data.lokasi);
        document.querySelector(".iframemaps").src =
            "https://www.google.com/maps/embed/v1/search?q=" +
            `${data.lokasi == "" ? "indonesia" : data.lokasi}` +
            "&key=" +
            source.keyMaps;

        document.getElementById("musikdipilih").textContent =
            data.musik.split(";")[0] == ""
                ? "~ Belum ada musik yang dipilih ~"
                : data.musik.split(";")[0];

        const b1 = data.hadiah.split("%")[0].split("$")[0];
        const b2 = data.hadiah.split("%")[0].split("$")[1];
        const b3 = data.hadiah.split("%")[1];

        document.getElementById("nomorcashless1").value = b1.split(";")[2];
        document.getElementById("namacashless1").value = b1.split(";")[3];

        document.getElementById("nomorcashless2").value = b2.split(";")[2];
        document.getElementById("namacashless2").value = b2.split(";")[3];
        document.getElementById("alamatkado").value = b3.split(";")[0];
        document.getElementById("namakado").value = b3.split(";")[1];

        function pilih(a, b, i) {
            if (
                i < document.querySelectorAll(a + " option").length &&
                document.querySelectorAll(a + " option")[i].value == b
            ) {
                document
                    .querySelectorAll(a + " option")
                    [i].setAttribute("selected", "");
                if (a == "#cashless1") {
                    platform(b, 0);
                } else if (a == "#cashless2") {
                    platform(b, 1);
                } else if (a == "#gender1") {
                    gender(b, 0);
                } else if (a == "#gender2") {
                    gender(b, 1);
                }
            }
        }

        const fotos = data.foto.split(";");
        document
            .querySelectorAll("form[name='formfoto'] img")
            .forEach((e, i) => {
                if (!fotos[i] || fotos[i] == "") {
                    e.src = source.noimg;
                } else {
                    e.src = fotos[i];
                }

                pilih("#zonaakad", data.akad.split(";")[2], i);
                pilih("#zonaresepsi", data.resepsi.split(";")[2], i);
                pilih("#cashless1", b1.split(";")[0], i);
                pilih("#cashless2", b2.split(";")[0], i);
                pilih("#gender1", data.mempelai1.split(";")[1], i);
                pilih("#gender2", data.mempelai2.split(";")[1], i);
            });

        document.getElementById("link1").textContent =
            data0[0] +
            "/" +
            data.desain.split(" #")[0].toLowerCase() +
            "/" +
            data.desain.split(" #")[1] +
            "#" +
            index +
            "#" +
            data.link;
        document.getElementById("inputlink").value = data.link;

        document.querySelector("#link2 span:nth-child(1)").textContent =
            data0[0] +
            "/" +
            data.desain.split(" #")[0].toLowerCase() +
            "/" +
            data.desain.split(" #")[1] +
            "#";
        document.querySelector("#link2 span:nth-child(2)").textContent =
            index + "#" + data.link + "#";
        document.querySelector("#link2 span:nth-child(3)").textContent =
            "Nama_Tamu";
        document.getElementById("ulasan").value = data.ulasan;
        document.getElementById("linkadmin").href =
            "https://api.whatsapp.com/send?phone=" + data0[1];
    }

    document.forms["formmempelai"].onsubmit = async e => {
        e.preventDefault();
        const a =
            document.getElementById("nama1").value +
            "%" +
            document.getElementById("namalengkap1").value +
            "%" +
            document.getElementById("gender1").value +
            "%" +
            document.getElementById("keberapa1").value +
            "%" +
            document.getElementById("bapak1").value +
            "%" +
            document.getElementById("ibu1").value +
            "%" +
            document.getElementById("nama2").value +
            "%" +
            document.getElementById("namalengkap2").value +
            "%" +
            document.getElementById("gender2").value +
            "%" +
            document.getElementById("keberapa2").value +
            "%" +
            document.getElementById("bapak2").value +
            "%" +
            document.getElementById("ibu2").value;

        const b =
            data.mempelai.split(";")[0] +
            "%" +
            data.mempelai1.split(";")[0] +
            "%" +
            data.mempelai1.split(";")[1] +
            "%" +
            data.mempelai1.split(";")[2] +
            "%" +
            data.mempelai1.split(";")[3] +
            "%" +
            data.mempelai1.split(";")[4] +
            "%" +
            data.mempelai.split(";")[1] +
            "%" +
            data.mempelai2.split(";")[0] +
            "%" +
            data.mempelai2.split(";")[1] +
            "%" +
            data.mempelai2.split(";")[2] +
            "%" +
            data.mempelai2.split(";")[3] +
            "%" +
            data.mempelai2.split(";")[4];

        if (a == b) {
            submitend(".submit1", "x");
        } else {
            const obj = {
                index: index,
                A: A,
                mempelai:
                    document.getElementById("nama1").value +
                    ";" +
                    document.getElementById("nama2").value,
                mempelai1:
                    document.getElementById("namalengkap1").value +
                    ";" +
                    document.getElementById("gender1").value +
                    ";" +
                    document.getElementById("keberapa1").value +
                    ";" +
                    document.getElementById("bapak1").value +
                    ";" +
                    document.getElementById("ibu1").value,
                mempelai2:
                    document.getElementById("namalengkap2").value +
                    ";" +
                    document.getElementById("gender2").value +
                    ";" +
                    document.getElementById("keberapa2").value +
                    ";" +
                    document.getElementById("bapak2").value +
                    ";" +
                    document.getElementById("ibu2").value
            };
            loadingsubmit();
            try {
                const a = await Fetch(
                    {
                        SHEETID: source.sheetid,
                        FN: "DATA",
                        DATA: obj
                    },
                    "text"
                );
                if (a == "ok") {
                    data.mempelai = obj.mempelai;
                    data.mempelai1 = obj.mempelai1;
                    data.mempelai2 = obj.mempelai2;
                    submitend(".submit1");
                } else {
                    submitend(".submit2");
                    alert("gagal");
                }
            } catch (err) {
                submitend(".submit2");
            }
        }
    };

    document.forms["formacara"].onsubmit = async e => {
        e.preventDefault();

        const a =
            document.getElementById("tanggalakad").value +
            "%" +
            document.getElementById("zonaakad").value +
            "%" +
            document.getElementById("jamakad").value +
            "%" +
            document.getElementById("tempatakad").value +
            "%" +
            document.getElementById("lokasiakad").value +
            "%" +
            document.getElementById("tanggalresepsi").value +
            "%" +
            document.getElementById("zonaresepsi").value +
            "%" +
            document.getElementById("mulairesepsi").value +
            "%" +
            document.getElementById("akhirresepsi").value +
            "%" +
            document.getElementById("tempatresepsi").value +
            "%" +
            document.getElementById("lokasiresepsi").value +
            "%" +
            document.getElementById("mapsresepsi").value;

        const b =
            data.akad.split(";")[0].split(" ")[0] +
            "%" +
            data.akad.split(";")[2] +
            "%" +
            data.akad.split(";")[0].split(" ")[1] +
            "%" +
            data.akad.split(";")[3] +
            "%" +
            data.akad.split(";")[4] +
            "%" +
            data.resepsi.split(";")[0].split(" ")[0] +
            "%" +
            data.resepsi.split(";")[2] +
            "%" +
            data.resepsi.split(";")[0].split(" ")[1] +
            "%" +
            data.resepsi.split(";")[1] +
            "%" +
            data.resepsi.split(";")[3] +
            "%" +
            data.resepsi.split(";")[4] +
            "%" +
            decodeURI(data.lokasi);

        if (a == b) {
            submitend(".submit1", "x");
        } else {
            const obj = {
                index: index,
                A: A,
                resepsi:
                    document.getElementById("mulairesepsi").value +
                    ";" +
                    document.getElementById("akhirresepsi").value +
                    ";" +
                    document.getElementById("zonaresepsi").value +
                    ";" +
                    document.getElementById("tempatresepsi").value +
                    ";" +
                    document.getElementById("lokasiresepsi").value,
                akad:
                    document.getElementById("tanggalakad").value +
                    " " +
                    document.getElementById("jamakad").value +
                    ";;" +
                    document.getElementById("zonaakad").value +
                    ";" +
                    document.getElementById("tempatakad").value +
                    ";" +
                    document.getElementById("lokasiakad").value,
                lokasi: encodeURI(document.getElementById("mapsresepsi").value)
            };
            loadingsubmit();
            try {
                const a = await Fetch(
                    {
                        SHEETID: source.sheetid,
                        FN: "DATA",
                        DATA: obj
                    },
                    "text"
                );
                if (a == "ok") {
                    data.resepsi =
                        document.getElementById("tanggalresepsi").value +
                        " " +
                        obj.resepsi;
                    data.akad = obj.akad;
                    data.lokasi = obj.lokasi;
                    submitend(".submit1");
                } else {
                    submitend(".submit2");
                }
            } catch (err) {
                submitend(".submit2");
            }
        }
    };

    document.forms["formfoto"].onsubmit = async e => {
        e.preventDefault();
        let a0 = data.foto.split(";");
        let a = "";
        let b = "";
        a0.forEach((el, i) => {
            if (!el || el == "") {
                i == 0 ? (a += source.noimg) : (a += "%" + source.noimg);
            } else {
                i == 0 ? (a += el) : (a += "%" + el);
            }
            i == 0
                ? (b += document.querySelectorAll("form[name='formfoto'] img")[
                      i
                  ].src)
                : (b +=
                      "%" +
                      document.querySelectorAll("form[name='formfoto'] img")[i]
                          .src);
        });

        if (a == b) {
            submitend(".submit1", "x");
        } else {
            const obj = {
                index: index,
                A: A,
                folderid: "1-0tvGQb7TW_efWTMdDtRu2ZnRyU_oFoW",
                foto: []
            };
            document
                .querySelectorAll("form[name='formfoto'] img")
                .forEach((el, i) => {
                    if (el.src != a.split("%")[i]) {
                        obj.foto.push([
                            index + "-" + i + ".jpg",
                            el.src.split("base64,")[1]
                        ]);
                    } else {
                        obj.foto.push(a0[i]);
                    }
                });

            loadingsubmit();
            try {
                const a = await Fetch(
                    {
                        SHEETID: source.sheetid,
                        FN: "FOTO",
                        DATA: obj
                    },
                    "text"
                );

                if (a.split(";").length == 8) {
                    data.foto = a;
                    document
                        .querySelectorAll("form[name='formfoto'] img")
                        .forEach((el, i) => {
                            if (!a.split(";")[i] || a.split(";")[i] == "") {
                                el.src = source.noimg;
                            } else {
                                el.src = a.split(";")[i];
                            }
                        });
                    submitend(".submit1");
                } else {
                    submitend(".submit2");
                }
            } catch (err) {
                submitend(".submit2");
            }
        }
    };

    document.forms["formmusik"].onsubmit = e => {
        e.preventDefault();
    };

    document.getElementById("hasilcari").onclick = async e => {
        if (e.target.classList.contains("pilihmusik")) {
            const obj = {
                index: index,
                A: A,
                musik: e.target.dataset.musik
            };
            loadingsubmit();
            try {
                const a = await Fetch(
                    {
                        SHEETID: source.sheetid,
                        FN: "DATA",
                        DATA: obj
                    },
                    "text"
                );
                if (a == "ok") {
                    data.musik = obj.musik;
                    document.getElementById("musikdipilih").textContent =
                        obj.musik.split(";")[0];
                    document.getElementById("hasilcari").textContent = "";
                    submitend(".submit1");
                } else {
                    submitend(".submit2");
                }
            } catch (err) {
                submitend(".submit2");
            }
        }
    };

    document.forms["formhadiah"].onsubmit = async e => {
        e.preventDefault();

        const a =
            document.getElementById("cashless1").value +
            "%" +
            document.getElementById("platform1").value +
            "%" +
            document.getElementById("nomorcashless1").value +
            "%" +
            document.getElementById("namacashless1").value +
            "%" +
            document.getElementById("cashless2").value +
            "%" +
            document.getElementById("platform2").value +
            "%" +
            document.getElementById("nomorcashless2").value +
            "%" +
            document.getElementById("namacashless2").value +
            "%" +
            document.getElementById("alamatkado").value +
            "%" +
            document.getElementById("namakado").value;
        const b1 = data.hadiah.split("%")[0].split("$")[0];
        const b2 = data.hadiah.split("%")[0].split("$")[1];
        const b3 = data.hadiah.split("%")[1];
        const b =
            b1.split(";")[0] +
            "%" +
            b1.split(";")[1] +
            "%" +
            b1.split(";")[2] +
            "%" +
            b1.split(";")[3] +
            "%" +
            b2.split(";")[0] +
            "%" +
            b2.split(";")[1] +
            "%" +
            b2.split(";")[2] +
            "%" +
            b2.split(";")[3] +
            "%" +
            b3.split(";")[0] +
            "%" +
            b3.split(";")[1];

        if (a == b) {
            submitend(".submit1", "x");
        } else {
            const obj = {
                index: index,
                A: A,
                hadiah:
                    document.getElementById("cashless1").value +
                    ";" +
                    document.getElementById("platform1").value +
                    ";" +
                    document.getElementById("nomorcashless1").value +
                    ";" +
                    document.getElementById("namacashless1").value +
                    "$" +
                    document.getElementById("cashless2").value +
                    ";" +
                    document.getElementById("platform2").value +
                    ";" +
                    document.getElementById("nomorcashless2").value +
                    ";" +
                    document.getElementById("namacashless2").value +
                    "%" +
                    document.getElementById("alamatkado").value +
                    ";" +
                    document.getElementById("namakado").value
            };
            loadingsubmit();
            try {
                const a = await Fetch(
                    {
                        SHEETID: source.sheetid,
                        FN: "DATA",
                        DATA: obj
                    },
                    "text"
                );
                if (a == "ok") {
                    data.hadiah = obj.hadiah;
                    submitend(".submit1");
                } else {
                    submitend(".submit2");
                }
            } catch (err) {
                submitend(".submit2");
            }
        }
    };

    document.forms["formlink"].onsubmit = async e => {
        e.preventDefault();
        const a = validUsername.test(
            document.getElementById("inputlink").value
        );
        if (!a) {
            submitend(".submit1", "x");
        } else {
            const obj = {
                index: index,
                A: A,
                username: document.getElementById("inputlink").value
            };
            loadingsubmit();
            try {
                const a = await Fetch(
                    {
                        SHEETID: source.sheetid,
                        FN: "DATA",
                        DATA: obj
                    },
                    "text"
                );
                if (a == "ok") {
                    data.link = obj.username;
                    document.querySelector(
                        "#link2 > span:nth-child(2)"
                    ).textContent = obj.username + "#";
                    if (
                        !document
                            .getElementById("simpanlink")
                            .classList.contains("d-none")
                    ) {
                        document
                            .getElementById("simpanlink")
                            .classList.toggle("d-none");
                    }
                    submitend(".submit1");
                } else {
                    submitend(".submit2");
                }
            } catch (err) {
                submitend(".submit2");
            }
        }
    };

    document.forms["formulasan"].onsubmit = async e => {
        e.preventDefault();
        if (document.getElementById("ulasan").value == data.ulasan) {
            submitend(".submit1", "x");
        } else {
            loadingsubmit();

            const obj = {
                index: index,
                A: A,
                ulasan: document.getElementById("ulasan").value
            };
            const a = await Fetch(
                {
                    SHEETID: source.sheetid,
                    FN: "DATA",
                    DATA: obj
                },
                "text"
            );
            if (a == "ok") {
                data.ulasan = obj.ulasan;
                submitend(".submit1");
            } else {
                submitend(".submit2");
            }
        }
    };

    function loadingsubmit(submit) {
        if (!submit) {
            document.querySelector(".submit0").classList.toggle("d-none");
            document.querySelector("html").classList.toggle("overflow-hidden");
        } else {
            document.querySelector(submit).classList.toggle("d-none");
            document.querySelector("html").classList.toggle("overflow-hidden");
        }
        document.getElementById("loadingsubmit").classList.toggle("d-none");
        document.querySelector(".submittext").textContent = "Menyimpan";
    }

    function submitend(submit, x) {
        document.querySelector(submit).classList.toggle("d-none");
        if (submit == ".submit1") {
            document.querySelector(".submittext").textContent = "Berhasil!";
        } else {
            document.querySelector(".submittext").textContent = "Gagal!";
        }
        if (x == "x") {
            document.getElementById("loadingsubmit").classList.toggle("d-none");
            document.querySelector("html").classList.toggle("overflow-hidden");
        } else {
            document.querySelector(".submit0").classList.toggle("d-none");
        }
        setTimeout(() => {
            loadingsubmit(submit);
        }, 2300);
    }

    document.getElementById("pratinjau").onclick = e => {
        if (data.link == "") {
            document.getElementById("simpanlink").click();
        } else {
            document.getElementById("bukalink").href =
                "https://" +
                data0[0] +
                "/" +
                data.desain.split(" #")[0].toLowerCase() +
                "/" +
                data.desain.split(" #")[1] +
                "#" +
                index +
                "#" +
                data.link +
                "#Nama_Tamu";
            document.getElementById("bukalink").click();
        }
    };

    document.forms["formkirim"].onsubmit = e => {
        e.preventDefault();
        if (data.link == "") {
            document.getElementById("simpanlink").click();
        } else if (data.mempelai.split(";")[0] == "") {
            document.getElementById("simpanMempelai").click();
        } else if (data.mempelai.split(";")[1] == "") {
            document.getElementById("simpanMempelai").click();
        } else if (document.getElementById("namatamu").value) {
            document.getElementById("kirimbtn").href =
                "https://api.whatsapp.com/send?text=" +
                encodeURIComponent(`Assalamu’alaikum Warahmatullahi Wabarakatuh.

Maha suci Allah yang telah menjadikan segala sesuatu lebih indah dan sempurna.

Izinkan kami mengundang Bapak/Ibu/Sahabat sekalian untuk dapat menghadiri acara pernikahan kami.

Link undangan :

${
    "https://" +
    document.querySelector("#link2 span:nth-child(1)").textContent +
    document.querySelector("#link2 span:nth-child(2)").textContent +
    document.querySelector("#link2 span:nth-child(3)").textContent
}


Kehadiran, doa dan restu anda semua adalah kado terindah bagi kami. Tiada yang dapat kami ungkapkan selain rasa terima kasih dari hati yang tulus dan dalam.

Kami yang berbahagia\n
${data.mempelai.split(";").join(" & ")}`);
            document.getElementById("kirimbtn").click();
        }
    };

    function copyToClipboard(text) {
        navigator.clipboard.writeText("https://" + text);
    }

    document.getElementById("copylink").onclick = () => {
        let text = "";
        document
            .querySelectorAll("#link2 > span")
            .forEach(e => (text += e.textContent));

        copyToClipboard(text);
    };

    function fnamatamu(e) {
        if (!e.value) {
            document.querySelector("#link2 span:nth-child(3)").textContent =
                "Nama_Tamu";
        } else {
            document.querySelector("#link2 span:nth-child(3)").textContent =
                encodeURI(e.value);
        }
    }

    const validUsername = /^[0-9a-z\-+._]{0,20}$/;

    const inputx = [];
    function cekinput() {
        document.querySelectorAll("form .form-control").forEach((e, i) => {
            inputx.push(e.value);
            e.onkeypress = () => {
                return !(window.event && window.event.keyCode == 13);
            };
            e.onkeyup = function (evt) {
                if (this.id == "inputlink") {
                    if (!validUsername.test(this.value)) {
                        this.value = inputx[i];
                    } else if (
                        this.value.toLowerCase() != data.link.toLowerCase()
                    ) {
                        document
                            .getElementById("simpanlink")
                            .classList.remove("d-none");
                        document.getElementById("link1").textContent =
                            data0[0] +
                            "/" +
                            data.desain.split(" #")[0].toLowerCase() +
                            "/" +
                            data.desain.split(" #")[1] +
                            "#" +
                            this.value.toLowerCase();
                        inputx[i] = this.value.toLowerCase();
                    } else if (
                        !document
                            .getElementById("simpanlink")
                            .classList.contains("d-none")
                    ) {
                        document
                            .getElementById("simpanlink")
                            .classList.toggle("d-none");
                        document.getElementById("link1").textContent =
                            data0[0] +
                            "/" +
                            data.desain.split(" #")[0].toLowerCase() +
                            "/" +
                            data.desain.split(" #")[1] +
                            "#" +
                            this.value.toLowerCase();
                        inputx[i] = this.value.toLowerCase();
                    }
                } else if (this.id == "namatamu") {
                    fnamatamu(this);
                } else if (
                    e.value.includes(";") ||
                    e.value.includes("%") ||
                    e.value.includes("$")
                ) {
                    this.value = inputx[i];
                } else {
                    inputx[i] = this.value;
                }
            };
        });
    }

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

    function setcookie() {
        if (
            (document.cookie.includes("=") &&
                document.cookie.split("=")[0] != location.href.split("#")[1]) ||
            document.cookie.split("=")[1] != location.href.split("#")[2]
        ) {
            document.cookie =
                document.cookie.split("=")[0] +
                "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
        if (
            (!document.cookie || document.cookie == "") &&
            location.href.split("#")[2] &&
            location.href.split("#")[2] != ""
        ) {
            const date1 = new Date();
            const tgl = data.resepsi.split(" ")[0].split("/");
            const date2 = new Date(tgl[1] + "/" + tgl[0] + "/" + tgl[2]);
            let exday = Math.round(
                (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24)
            );
            exday < 1 ? (exday = 0) : "";

            date1.setTime(date1.getTime() + (exday + 7) * 24 * 60 * 60 * 1000);
            document.cookie =
                location.href.split("#")[1] +
                "=" +
                location.href.split("#")[2] +
                ";expires=" +
                date1.toGMTString() +
                ";path=/";
        }
    }

    function aos_init() {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
            mirror: false
        });
    }

    const preloader = document.querySelector("#preloader");
    let jmlLoad = 0;
    async function load() {
        try {
            data = await Fetch({
                SHEETID: source.sheetid,
                FN: "LOAD",
                DATA: { index: index, A: A }
            });

            data0 = data[0];
            data = data[1];

            if (data[0] != index) {
                document.body.innerHTML = `<h1 class="text-center" style="margin-top:30vh">Masalah koneksi !</h1>`;
                return;
            }
            if (preloader) {
                preloader.classList.add("loaded");
                aos_init();
                setdata();
                setcookie();
                loaddata();
                cekinput();
                setTimeout(() => {
                    preloader.remove();
                }, 2000);
            }
        } catch (err) {
            if (
                err.toString().toLowerCase() ==
                "syntaxerror: unexpected end of json input"
            ) {
                document.body.innerHTML = `<h1 class="text-center" style="margin-top:30vh">UNDANGAN TIDAK DITEMUKAN !</h1>`;
                return;
            }
            if (data == undefined) {
                if (jmlLoad < 2) {
                    setTimeout(() => {
                        load();
                    }, 20000);
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

    if (
        location.href.split("#")[1] &&
        location.href.split("#")[1] != "" &&
        location.href.split("#")[2] &&
        location.href.split("#")[2] != ""
    ) {
        index = parseInt(location.href.split("#")[1]);
        A = location.href.split("#")[2];
    } else {
        location.href = "http://localhost:8080/undangweb";
    }

    window.addEventListener("load", () => {
        load();
    });
})();
