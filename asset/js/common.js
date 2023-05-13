const wrap = document.querySelector(".wrap");
const header = document.querySelector("header");
// 헤더
header.innerHTML = `<div class="container">
<div class="inHeader">
    <div class="logo">
        <a href="/">
            <img src="/asset/imgs/icons/logo.png" alt="zazzle_logo">
        </a>
    </div>
    <nav class="nav">
        <ul>
            <li class="nav_list">
                <div class="nav_category">
                    <span> 회사소개 </span>
                    <div class="arrow_img">
                        <img src="/asset/imgs/icons/arrow.svg" alt="arrow">
                    </div>
                </div>
                <ul class="nav_sub">
                    <li><a href="/introduce/message/"><span>인사말</span></a></li>
                    <li><a href="/introduce/business/"><span>사업분야</span></a></li>
                    <li><a href="/introduce/roadmap/"><span>연혁</span></a></li>
                    <li><a href="/introduce/certification/"><span>인증서</span></a></li>
                    <li><a href="/introduce/facility/"><span>보유설비</span></a></li>
                    <li><a href="/introduce/location/"><span>오시는길</span></a></li>
                </ul>
            </li>
            <li class="nav_list">
                <div class="nav_category">
                    <span> 에코사업부 </span>
                    <div class="arrow_img">
                        <img src="/asset/imgs/icons/arrow.svg" alt="arrow">
                    </div>
                </div>
                <ul class="nav_sub">
                    <li><a href="/eco/pvoh/"><span>PVOH</span></a></li>
                    <li><a href="/eco/biope/"><span>BIO PE</span></a></li>
                    <li><a href="/eco/pla/"><span>PLA</span></a></li>
                    <li><a href="/eco/pcr/"><span>PCR</span></a></li>
                    <li><a href="/eco/mdope/"><span>MDOPE</span></a></li>

                </ul>
            </li>
            <li class="nav_list">
                <div class="nav_category">
                    <span> 산업용필름 </span>
                    <div class="arrow_img">
                        <img src="/asset/imgs/icons/arrow.svg" alt="arrow">
                    </div>
                </div>
                <ul class="nav_sub">
                    <li><a href="/film/ppfilm/"><span>PP필름</span></a></li>
                    <li><a href="/film/tpu/"><span>TPU</span></a></li>
                    <li><a href="/film/pff/"><span>PFF</span></a></li>
                </ul>
            </li>
        </ul>
        </li>
        <div class="nav_btns">
            <a href="/cs/"><span>문의하기</span></a>
            <div class="lang">
                <div class="lang_now">
                    <div class="flag_img">
                        <img src="/asset/imgs/icons/ko.png" alt="korean">
                    </div>
                    <div class="lang_arrow_img">
                        <img src="/asset/imgs/icons/arrow.svg" alt="arrow">
                    </div>
                </div>
                <ul class="lang_ul">
                    <li>
                        <a href="" class="lang_now">
                            <div class="flag_img">
                                <img src="/asset/imgs/icons/ko.png" alt="korean">
                            </div>

                        </a>
                    </li>
                    <li>
                        <a href="" class="lang_now">
                            <div class="flag_img">
                                <img src="/asset/imgs/icons/ko.png" alt="korean">
                            </div>

                        </a>
                    </li>
                    <li>
                        <a href="" class="lang_now">
                            <div class="flag_img">
                                <img src="/asset/imgs/icons/ko.png" alt="korean">
                            </div>

                        </a>
                    </li>
                    <li>
                        <a href="" class="lang_now">
                            <div class="flag_img">
                                <img src="/asset/imgs/icons/ko.png" alt="korean">
                            </div>

                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
</div>`;
// 푸터
const footer = document.querySelector("footer");
footer.innerHTML = `<div class="container">
<div class="footer_wrap">
    <div class="footer_top">
        <div class="left">
            <div class="footerLogo">
                <img src="/asset/imgs/icons/footer_logo.png" alt="footer_logo">
            </div>
            <div class="copyright">
                <p>
                    Copyright © 2023 Jazzle<br> Enterprise.
                </p>
            </div>
        </div>
        <div class="right">
            <div class="footer_nav">
                <span>회사소개</span>
                <ul>
                    <li><a href="/introduce/message/"><span>인사말</span></a></li>
                    <li><a href="/introduce/business/"><span>사업분야</span></a></li>
                    <li><a href="/introduce/roadmap/"><span>연혁</span></a></li>
                    <li><a href="/introduce/certification/"><span>인증서</span></a></li>
                    <li><a href="/introduce/facility/"><span>보유설비</span></a></li>
                    <li><a href="/introduce/location/"><span>오시는길</span></a></li>
                </ul>
            </div>
            <div class="footer_nav">
                <span>에코사업부</span>
                <ul>
                    <li><a href="/eco/pvoh/"><span>PVOH</span></a></li>
                    <li><a href="/eco/biope/"><span>BIO PE</span></a></li>
                    <li><a href="/eco/pla/"><span>PLA</span></a></li>
                    <li><a href="/eco/pcr/"><span>PCR</span></a></li>
                    <li><a href="/eco/mdope/"><span>MDOPE</span></a></li>
                </ul>
            </div>
            <div class="footer_nav">
                <span>필름사업부</span>
                <ul>
                    <li><a href="/film/ppfilm/"><span>PP필름</span></a></li>
                    <li><a href="/film/tpu/"><span>TPU</span></a></li>
                    <li><a href="/film/pff/"><span>PFF</span></a></li>
                </ul>
            </div>
            <div class="footer_nav footer_sns">
                <span>Follow us</span>
                <ul>
                    <li>
                        <a href="">
                            <div class="sns_img">
                                <img src="/asset/imgs/sns/Facebook.png" alt="facebook">
                            </div>
                            <span>Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div class="sns_img">
                                <img src="/asset/imgs/sns/Instagram.png" alt="Instagram">
                            </div>
                            <span>Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div class="sns_img">
                                <img src="/asset/imgs/sns/LinkedIn.png" alt="aedIn">
                            </div>
                            <span>aedIn</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div class="sns_img">
                                <img src="/asset/imgs/sns/Twitter.png" alt="twitch">
                            </div>
                            <span>Twitter</span>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <div class="sns_img">
                                <img src="/asset/imgs/sns/YouTube.png" alt="youTube">
                            </div>
                            <span>YouTube</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer_bottom">
        <strong> 재즐엔터프라이즈(주)</strong>

        <div class="info">
            <div class="info_list">
                <strong>사업장주소</strong>
                <span>서울 서대문구 백련사길 7(홍은동) 재즐빌딩 3층</span>
            </div>
            <div class="info_list">
                <strong>대표자</strong>

                <span>이유식</span>
            </div>
            <div class="info_list">
                <strong>사업자등록번호</strong>

                <span>105-86-33377</span>
            </div>
            <div class="info_list">
                <strong>대표안내전화</strong>
                <span>TEL : 02-322-9592</span>
                <span>FAX : 02-332-9598</span>
            </div>
        </div>
    </div>
</div>
</div>`;

// 배너
const keyvisualBanner = document.querySelector(".keyvisual_banner")
  ? document.querySelector(".keyvisual_banner")
  : "";
keyvisualBanner.innerHTML = `<div class="container">
<div class="introduce_banner_wrap sub_keyvisual_wrap">
    <div class="keyvisual_title">
        <h3>    ${
          keyvisualBanner.classList &&
          (keyvisualBanner.classList[0] === "eco_banner"
            ? `에코사업부`
            : keyvisualBanner.classList[0] === "introduce_banner"
            ? `회사소개`
            : keyvisualBanner.classList[0] === "film_banner"
            ? "필름사업부"
            : "")
        }</h3>
    </div>
    ${
      keyvisualBanner.classList &&
      (keyvisualBanner.classList[0] === "eco_banner"
        ? `<ul class="eco_banner_ul"></ul>`
        : keyvisualBanner.classList[0] === "introduce_banner"
        ? `<ul class="introduce_banner_ul"></ul>`
        : keyvisualBanner.classList[0] === "film_banner"
        ? `<ul class="film_banner_ul"></ul>`
        : "")
    }
  
</div>
</div>`;
//기업소개
const introduceBannerUl = document.querySelector(".introduce_banner_ul")
  ? document.querySelector(".introduce_banner_ul")
  : "";
//   에코사업부
const ecoBannerUl = document.querySelector(".eco_banner_ul")
  ? document.querySelector(".eco_banner_ul")
  : "";
//  필름사업부
const filmBannerUl = document.querySelector(".film_banner_ul")
  ? document.querySelector(".film_banner_ul")
  : "";

introduceBannerUl.innerHTML = `
<li><a href="/introduce/message/"><span>인사말</span></a></li>
<li><a href="/introduce/business/"><span>사업분야</span></a></li>
<li><a href="/introduce/roadmap/"><span>연혁</span></a></li>
<li><a href="/introduce/certification/"><span>인증서</span></a></li>
<li><a href="/introduce/facility/"><span>보유설비</span></a></li>
<li><a href="/introduce/location/"><span>오시는길</span></a></li>
`;
ecoBannerUl.innerHTML = `
  <li><a href="/eco/pvoh/"><span>PVOH</span></a></li>
<li><a href="/eco/biope/"><span>BIO PE</span></a></li>
<li><a href="/eco/pla/"><span>PLA</span></a></li>
<li><a href="/eco/pcr/"><span>PCR</span></a></li>
<li><a href="/eco/mdope/"><span>MDOPE</span></a></li>
`;
filmBannerUl.innerHTML = `
   <li><a href="/film/ppfilm/"><span>PP필름</span></a></li>
                    <li><a href="/film/tpu/"><span>TPU</span></a></li>
                    <li><a href="/film/pff/"><span>PFF</span></a></li>
`;

const lang = document.querySelector(".lang");
lang.addEventListener("click", () => {
  lang.classList.toggle("active");
});

// 리모컨
const remocon = document.createElement("div");
remocon.className = "remocon";
remocon.innerHTML = `
<div class="remocon_wrap">
    <div class="remocon_btn top_btn">
       <span>위로</span>
    </div>
    <a href="/cs/" class="remocon_btn contact_btn">
        <span>문의하기</span>
    </a>
</div>
`;
wrap.append(remocon);
const topBtn = document.querySelector(".top_btn");
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// 프로그래스바
const body = document.querySelector("body");
const progress = document.createElement("div");
const progress_bar = document.createElement("div");
progress.className = "progress";
progress_bar.className = "progress_bar";
body.append(progress);
progress.append(progress_bar);

let progressBar = document.querySelector(".progress_bar")
  ? document.querySelector(".progress_bar")
  : null;

let bodyHeight = document.body.scrollTop || document.documentElement.scrollTop;
let scrollHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

progressBar.style.width = `${(bodyHeight / scrollHeight) * 100}%`;
if (progressBar) {
  window.addEventListener("scroll", (e) => {
    bodyHeight = document.body.scrollTop || document.documentElement.scrollTop;
    scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    progressBar.style.width = `${(bodyHeight / scrollHeight) * 100}%`;
  });
}
