
const redirectCleaningTipsButton = document.getElementById('redirect-cleaning-tips-button')
const redirectOfficeCleaningButton = document.getElementById('redirect-office-cleaning-button')


redirectCleaningTipsButton.addEventListener('click', () => {
    const target = 'https://www.bacteria-busters.co.uk/post/the-ultimate-guide-to-keeping-your-home-spotless'
    
    window.open(target, '_blank')
})

redirectOfficeCleaningButton.addEventListener('click', () => {
    const target = 'https://www.nimbusfacility.com/blog/office-cleanliness'

    window.open(target, '_blank')
})
