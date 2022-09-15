$(document).ready(function(){

    // Drop Down Menu

    $('.main_list_wrap > li').hover(function(){
        $('.sub_list_wrap, .sub_menu_bg').stop().slideDown();
    },function() {
        $('.sub_list_wrap, .sub_menu_bg').stop().slideUp();
    });

    // slide

    const slideUl = $('.slide_wrap');
    const listLength = slideUl.find('li').length;
    const slidePrevBtn = $('.prev');
    const slideNextBtn = $('.next');
    let active = 0;

    const slide = (type) => {
        if (type === 'prev') {
            slideUl.prepend(slideUl.find('li')[listLength -1]).css('left', '-100%').stop().animate({'left': '0%'});
            active = active <= 0 ? listLength -1 : active -1;
        } else {
            slideUl.stop().animate({'left': '-100%'}, undefined, undefined, () => {
                slideUl.append(slideUl.find('li')[0]).css('left', 0);
            });
            active = active >= listLength -1 ? 0 : active + 1;
        }
    }

    slidePrevBtn.click((e)=> {
        slide('prev');
    });

    slideNextBtn.click(()=> {
        slide('next');
    });
});

const list = [
  { leave: "./images/instagram_ot.png", over: "./images/youtube_ot.png" },
  { leave: "./images/facebook_ot.png", over: "./images/youtube_ot.png" },
  { leave: "./images/blog_ot.png", over: "./images/youtube_ot.png" },
  { leave: "./images/youtube_ot.png", over: "./images/instagram_ot.png" },
];

const li = document.querySelectorAll(".sns_wrap > li");

const hover = (e) => {
  const i = [...li]?.findIndex((x) => x === e?.currentTarget);
  const imgEl = e?.currentTarget.children[0].children[0];
  const img = e?.type === "mouseover" ? list[i].over : list[i].leave;
  imgEl.setAttribute("src", img);
};

li.forEach((x) => {
  x.addEventListener("mouseover", hover);
  x.addEventListener("mouseleave", hover);
});
