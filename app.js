
    const firstItem = document.querySelector('#first-item');
    const newInElement = document.querySelector('.new-in');

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

