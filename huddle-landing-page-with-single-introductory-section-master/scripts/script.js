const socialElements = document.querySelectorAll('.element');


for (let i = 0; i < socialElements.length; i++) {
    socialElements[i].addEventListener('mouseover', e => {
        socialElements[i].style.border = '1px solid #ff50c2';
        switch (i) {
            case 0:
                socialElements[i].firstElementChild.setAttribute('src', 'images/facebook-pink.svg');
                break;
            case 1:
                socialElements[i].firstElementChild.setAttribute('src', 'images/twitter-pink.svg');
                break;
            case 2:
                socialElements[i].firstElementChild.setAttribute('src', 'images/instagram-pink.svg');
                break;

        }
    });

    socialElements[i].addEventListener('mouseout', e => {
        socialElements[i].style.border = '1px solid white';
        switch (i) {
            case 0:
                socialElements[i].firstElementChild.setAttribute('src', 'images/facebook.svg');
                break;
            case 1:
                socialElements[i].firstElementChild.setAttribute('src', 'images/twitter.svg');
                break;
            case 2:
                socialElements[i].firstElementChild.setAttribute('src', 'images/instagram.svg');
                break;
        }

    });
}