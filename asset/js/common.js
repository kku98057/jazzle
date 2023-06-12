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
                
                </div>
                
            </li>
            <li class="nav_list">
                <div class="nav_category">
                    <span> 에코사업부 </span>
                  
                </div>
                
            </li>
            <li class="nav_list">
                <div class="nav_category">
                    <span> 필름사업부 </span>
                  
                </div>
               
            </li>
        </ul>
        </li>
        </nav>
        <div class="nav_btns">
            <ul class="lang">
                <li class=${
                  document.documentElement.lang === "ko" && "active"
                }><a href="">KO</a></li>
                <li  class=${
                  document.documentElement.lang === "en" && "active"
                }><a href="">EN</a></li>
            </ul>
        </div>
        <div class="mob_btn">
            <div class="mob_btn-bar mob_btn-bar1"></div>
            <div class="mob_btn-bar mob_btn-bar2"></div>
            <div class="mob_btn-bar mob_btn-bar3"></div>
        </div>
</div>
</div>`;
const div = document.createElement("div");
const mobMenu = document.createElement("div");
mobMenu.className = "mob_menu";
div.className = "sub_menu";
wrap.append(div);
wrap.append(mobMenu);
div.innerHTML = `
<div class="sub_menu_wrap">
<ul class="nav_sub">
    <li class="nav_sub_title"><span>회사소개</span></li>
    <li><a href="/introduce/message/"><span>인사말</span></a></li>
    <li><a href="/introduce/roadmap/"><span>연혁</span></a></li>
    <li><a href="/introduce/business/"><span>사업분야</span></a></li>
    <li><a href="/introduce/certification/"><span>인증현황</span></a></li>
    <li><a href="/introduce/facility/"><span>보유설비</span></a></li>
    <li><a href="/introduce/location/"><span>오시는길</span></a></li>
</ul>
<ul class="nav_sub">
    <li class="nav_sub_title"><span>에코사업부</span></li>
    <li><a href="/eco/pvoh/"><span>PVOH</span></a></li>
    <li><a href="/eco/bio/"><span>바이오폴리머</span></a></li>
    <li><a href="/eco/bope/"><span>BOPE/MDOPE</span></a></li>

</ul>
<ul class="nav_sub">
    <li class="nav_sub_title"><span>필름사업부</span></li>
    <li><a href="/film/opp/"><span>OPP 필름</span></a></li>
    <li><a href="/film/valeron/"><span>발레론 필름</span></a></li>
    <li><a href="/film/tpu/"><span>TPU 필름</span></a></li>
    <li><a href="/film/ppf/"><span>PPF 필름</span></a></li>
    <li><a href="/film/pet/"><span>PET 필름</span></a></li>
</ul>
</div>`;
mobMenu.innerHTML = `  <div class="mob_menu_wrap">
<ul>
    <li class="nav_list" data-mob-list="0">
        <div class="nav_category">
            <span> 에코사업부 </span>
        </div>
        <ul data-mob_nav="0">
            <li><a href="/eco/pvoh/"><span>PVOH</span></a></li>
            <li><a href="/eco/bio/"><span>바이오폴리머</span></a></li>
            <li><a href="/eco/bope/"><span>BOPE/MDOPE</span></a></li>
        </ul>
    </li>
    <li class="nav_list" data-mob-list="1">
        <div class="nav_category">
            <span> 필름사업부 </span>
        </div>
        <ul data-mob_nav="1">
            <li><a href="/film/opp/"><span>OPP 필름</span></a></li>
            <li><a href="/film/valeron/"><span>발레론 필름</span></a></li>
            <li><a href="/film/tpu/"><span>TPU 필름</span></a></li>
            <li><a href="/film/ppf/"><span>PPF 필름</span></a></li>
            <li><a href="/film/pet/"><span>PET 필름</span></a></li>
        </ul>
    </li>
    <li class="nav_list" data-mob-list="2">
        <div class="nav_category">
            <span> 회사소개 </span>
        </div>
        <ul data-mob_nav="2">
            <li class="nav_sub_title"><span>회사소개</span></li>
            <li><a href="/introduce/message/"><span>인사말</span></a></li>
            <li><a href="/introduce/roadmap/"><span>연혁</span></a></li>
            <li><a href="/introduce/business/"><span>사업분야</span></a></li>
            <li><a href="/introduce/certification/"><span>인증현황</span></a></li>
            <li><a href="/introduce/facility/"><span>보유설비</span></a></li>
            <li><a href="/introduce/location/"><span>오시는길</span></a></li>
        </ul>
    </li>
</ul>
<div class="nav_btns">
<ul class="lang">
<li class=${
  document.documentElement.lang === "ko" && "active"
}><a href="">KO</a></li>
<li  class=${
  document.documentElement.lang === "en" && "active"
}><a href="">EN</a></li>
</ul>
</div>
</div>`;
// 푸터
const footer = document.querySelector("footer");
footer.innerHTML = `       <div class="container">
<div class="footer_wrap">
    <div class="footer_top">
        <div class="left">
            <div class="footerLogo">
                <img src="/asset/imgs/icons/footer_logo.png" alt="footer_logo">
            </div>

            <div class="footer_bottom">
                <strong> 재즐엔터프라이즈(주)</strong>

                <div class="info">
                    <div class="info_list">
                        <span>사업장주소</span>
                        <span>서울 서대문구 백련사길 7(홍은동) 재즐빌딩 3층</span>
                    </div>
                    <div class="info_list">
                        <span>대표자</span>

                        <span>이유식</span>
                    </div>
                    <div class="info_list">
                        <span>사업자등록번호</span>

                        <span>105-86-33377</span>
                    </div>
                    <div class="info_list">
                        <span>대표안내전화</span>
                        <span>TEL : 02-322-9592 / FAX : 02-332-9598</span>

                    </div>
                    <div class="info_list">
                        <span>개인정보책임관리자</span>
                        <span>이경민 jazzle@jazzle.co.kr</span>

                    </div>
                </div>
            </div>
            <div class="copyright">
                <p>Copyright © 2023 Jazzle Enterprise.

                </p>
            </div>
        </div>
        <div class="right">
            <div class="footer_nav">
                <span>회사소개</span>
                <ul>
                    <li><a href="/introduce/message/"><span>인사말</span></a></li>
                    <li><a href="/introduce/roadmap/"><span>연혁</span></a></li>
                    <li><a href="/introduce/business/"><span>사업분야</span></a></li>
                    <li><a href="/introduce/certification/"><span>인증현황</span></a></li>
                    <li><a href="/introduce/facility/"><span>보유설비</span></a></li>
                    <li><a href="/introduce/location/"><span>오시는길</span></a></li>
                </ul>
            </div>
            <div class="footer_nav">
                <span>에코사업부</span>
                <ul>
                    <li><a href="/eco/pvoh/"><span>PVOH</span></a></li>
                    <li><a href="/eco/bio/"><span>바이오폴리머</span></a></li>
                    <li><a href="/eco/bope/"><span>BOPE/MDOPE</span></a></li>
                </ul>
            </div>
            <div class="footer_nav">
                <span>필름사업부</span>
                <ul>
                    <li><a href="/film/opp/"><span>OPP 필름</span></a></li>
                    <li><a href="/film/valeron/"><span>발레론 필름</span></a></li>
                    <li><a href="/film/tpu/"><span>TPU 필름</span></a></li>
                    <li><a href="/film/ppf/"><span>PPF 필름</span></a></li>
                    <li><a href="/film/pet/"><span>PET 필름</span></a></li>
                </ul>
            </div>
            <div class="footer_nav footer_sns">
                <span>Follow us</span>
                <ul>
                    <li class="sns_facebook">
                        <a href="">
                            <div class="sns_img">
                                <img src="/asset/imgs/sns/Facebook.png" alt="facebook">
                            </div>
                            <span>Facebook</span>
                        </a>
                    </li>
                    <li class="sns_instargram">
                        <a href="">
                            <div class="sns_img">
                                <img src="/asset/imgs/sns/Instagram.png" alt="Instagram">
                            </div>
                            <span>Instagram</span>
                        </a>
                    </li>
                    <li class="sns_linkedIn">
                        <a href="https://www.linkedin.com/company/jazzle-enterprise/" target="_blank"
                            rel="noreferer nofollow">
                            <div class="sns_img">
                                <img src="/asset/imgs/sns/LinkedIn.png" alt="linkedIn">
                            </div>
                            <span>LinkedIn</span>
                        </a>
                    </li>
                    <li class="sns_twitch">
                        <a href="">
                            <div class="sns_img">
                                <img src="/asset/imgs/sns/Twitter.png" alt="twitch">
                            </div>
                            <span>Twitter</span>
                        </a>
                    </li>

                    <li class="sns_youTube">
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
<li class="introduce_message"><a href="/introduce/message/"><span>인사말</span></a></li>
<li class="introduce_roadmap"><a href="/introduce/roadmap/"><span>연혁</span></a></li>
<li class="introduce_business"><a href="/introduce/business/"><span>사업분야</span></a></li>
<li class="introduce_certification"><a href="/introduce/certification/"><span>인증현황</span></a></li>
<li class="introduce_facility"><a href="/introduce/facility/"><span>보유설비</span></a></li>
<li class="introduce_location"><a href="/introduce/location/"><span>오시는길</span></a></li>
`;
ecoBannerUl.innerHTML = `
 <li class="eco_pvoh"><a href="/eco/pvoh/"><span>PVOH</span></a></li>
<li class="eco_bio"><a href="/eco/bio/"><span>바이오폴리머</span></a></li>
<li class="eco_bope"><a href="/eco/bope/"><span>BOPE/MDOPE</span></a></li>

`;
filmBannerUl.innerHTML = `
   <li class="film_opp"><a href="/film/opp/"><span>OPP 필름</span></a></li>
   <li class="film_valeron"><a href="/film/valeron/"><span>발레론 필름</span></a></li>
    <li class="film_tpu"><a href="/film/tpu/"><span>TPU 필름</span></a></li>
    <li class="film_ppf"><a href="/film/ppf/"><span>PPF 필름</span></a></li>
    <li class="film_pet"><a href="/film/pet/"><span>PET 필름</span></a></li>
`;

// 리모컨
const remocon = document.createElement("div");
remocon.className = "remocon";
remocon.innerHTML = `
<div class="remocon_wrap">
<div class="remocon_btn top_btn">
    <img src="/asset/imgs/icons/arrow.png" alt="top" />
</div>
<a href="/cs/" class="remocon_btn contact_btn">
    <img src="/asset/imgs/icons/contact.png" alt="contact" />
    <div class="contact_text">
        <p>무엇이든 물어보세요.</p>
        <div>
            <img src="/asset/imgs/icons/warning.png" alt="contact_icon" />
            <p>월요일 11:00부터 상담 가능</p>
        </div>
    </div>
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

// contact us
const contact = document.querySelector(".ask_help")
  ? document.querySelector(".ask_help")
  : "";
contact.innerHTML = `<div class="ask_help_contents">
<h3>온라인 문의</h3>
<a href="/cs" class="moreBtn"><span>Contact us</span></a>
</div>`;

// loading

if (document.querySelector(".loading")) {
  gsap.to(".loading", {
    delay: 0.5,
    opacity: 0,
  });
}

// header

const mobBtn = document.querySelector(".mob_btn");
const mobBar = document.querySelectorAll(".mob_btn-bar");

const mobLists = document.querySelectorAll(".mob_menu .nav_list");
mobBtn.addEventListener("click", () => {
  mobBar.forEach((bar) => {
    bar.classList.toggle("active");
  });
  mobMenu.classList.toggle("active");
});
mobLists.forEach((mobList) => {
  mobList.addEventListener("click", () => {
    const list = mobList.querySelector("ul");
    mobList.classList.toggle("active");
  });
});

console.log(mobLists);
