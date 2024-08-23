
const firstItem = document.querySelector('#first-item');
const secontItem = document.querySelector('#second-item')
const thirdItem = document.querySelector('#third-item')
const fourthItem = document.querySelector('#fourth-item')
const newInElement = document.querySelector('.new-in');
const designers = document.querySelector('.designers');
const women = document.querySelector('.women');
const jewelry = document.querySelector('.jewelry');

firstItem.addEventListener('mouseover', () => {
    newInElement.style.display = 'flex';
});

firstItem.addEventListener('mouseout', () => {
    newInElement.style.display = 'none';
});
newInElement.addEventListener('mouseover', () => {
    newInElement.style.display = 'flex';
});
newInElement.addEventListener('mouseout', () => {
    newInElement.style.display = 'none';
});



secontItem.addEventListener('mouseover', () => {
    designers.style.display = 'block';
});

secontItem.addEventListener('mouseout', () => {
    designers.style.display = 'none';   
});
designers.addEventListener('mouseover', () => {
    designers.style.display = 'block';
});
designers.addEventListener('mouseout', () => {
    designers.style.display = 'none';
});


// thirdItem.addEventListener('mouseover', () => {
//     women.style.display = 'block';
// });

// thirdItem.addEventListener('mouseout', () => {
//     women.style.display = 'none';   
// });
// designers.addEventListener('mouseover', () => {
//     women.style.display = 'block';
// });
// designers.addEventListener('mouseout', () => {
//     women.style.display = 'none';
// });

fourthItem.addEventListener('mouseover', () => {
    jewelry.style.display = 'flex';
});

fourthItem.addEventListener('mouseout', () => {
    jewelry.style.display = 'none';   
});
jewelry.addEventListener('mouseover', () => {
    jewelry.style.display = 'flex';
});
jewelry.addEventListener('mouseout', () => {
    jewelry.style.display = 'none';
});


