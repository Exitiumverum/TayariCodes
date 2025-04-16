const BUTTON = document.querySelector('.resume-btn')

document.addEventListener('click', (ev) => {
    console.log(ev);
    if(ev.target.includes('resume-btn')){
        
        downloadResume()
    }
})

function downloadResume(){
    var link = document.createElement('a');
    link.download = 'Dan Tayari Resume';
    link.href = 'assets/resume/DanTayariResume.pdf';
    link.click();
    link.remove();
}