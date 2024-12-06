
let currentRightMargin = 0, reviewsCount, nextButtonClickCount = 1;


const nextButton = document.querySelector('#next-review')
const previousButton = document.querySelector('#previous-review')
const mainReviewContainer = document.querySelector('.main-reviews-container')


document.addEventListener('DOMContentLoaded', () => {
    const computedStyle = getComputedStyle(mainReviewContainer)
    currentRightMargin = parseInt(computedStyle.marginRight) || 0

    reviewsCount = mainReviewContainer.children.length;
})

nextButton.addEventListener('click', () => {
    console.log(nextButtonClickCount)
    if (nextButtonClickCount < reviewsCount) {
        nextButtonClickCount += 1
        currentRightMargin += 60
        mainReviewContainer.style.marginRight = `${currentRightMargin}rem`
    }
})

previousButton.addEventListener('click', () => {
    if(currentRightMargin !== 0) {
        nextButtonClickCount -= 1
        currentRightMargin -= 60
        mainReviewContainer.style.marginRight = `${currentRightMargin}rem`
    }
    else {
        nextButtonClickCount = 1
    }
})