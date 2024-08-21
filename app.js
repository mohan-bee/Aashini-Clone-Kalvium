
    const firstItem = document.querySelector('#first-item');
    const secontItem = document.querySelector('#second-item')
    const newInElement = document.querySelector('.new-in');
    const designers = document.querySelector('.designers');

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

