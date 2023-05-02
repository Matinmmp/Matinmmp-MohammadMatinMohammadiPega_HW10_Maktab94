
// const links = document.querySelectorAll('a');
// links.forEach(item =>
//     item.style.color = item.getAttribute('href').includes('://') && !item.getAttribute('href').includes('http://internal.com') && 'orange'
// );



const links = document.querySelectorAll('a');
links.forEach(item => {
    const url = item.getAttribute('href');
    if (url && url.includes('://') && !url.startsWith('http://internal.com')) {
        item.style.color = 'orange';
    }
})
