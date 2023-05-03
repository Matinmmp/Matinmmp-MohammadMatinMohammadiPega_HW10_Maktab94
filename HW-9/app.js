const toolTips = Array.from(document.querySelectorAll('.tool_tip'));

const size = {
    width: window.innerWidth,
    height: window.innerHeight
};

toolTips[0].addEventListener('mouseover', () => {
    const toolTip = getComputedStyle(toolTips[0]);
    if ((size.height - parseInt(toolTip.bottom)) < 100)
        toolTips[0].classList = "tool_tip bottom";
});









