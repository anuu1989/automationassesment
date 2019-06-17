async function scrollPage(page, horizontal, vertical){
    await page.evaluate(async (acionHorizontal, actionVertical) => {
        window.scrollBy(acionHorizontal, actionVertical);
    }, horizontal, vertical);
}

async function scrollBottom(page){
    await page.evaluate(async () => {
        window.scrollTo(0,document.body.scrollHeight);
    });
}

async function scrollTop(page){
    await page.evaluate(async () => {
        window.scrollTo(0,10);
    });
}

module.exports = {
    scrollPage,
    scrollBottom,
    scrollTop
}