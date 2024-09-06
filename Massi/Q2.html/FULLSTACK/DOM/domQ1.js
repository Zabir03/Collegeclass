

        // DOM Selection Methods and Manipulation

        // 1. Select element by ID and change text content and style
        const mainHeading = document.getElementById('main-heading');
        mainHeading.textContent = "DOM Manipulation in Action!";
        mainHeading.style.color = 'blue';

        // 2. Select elements by class name and change style for each
        const contentParagraphs = document.getElementsByClassName('text-content');
        for (let i = 0; i < contentParagraphs.length; i++) {
            contentParagraphs[i].style.backgroundColor = 'lightgray';
        }

        // 3. Select single element using querySelector (selects the first match)
        const uniqueParagraph = document.querySelector('#unique-paragraph');
        uniqueParagraph.style.fontSize = '20px';

        // 4. Select all elements using querySelectorAll and modify them
        const images = document.querySelectorAll('img');
        images.forEach(image => {
            image.style.border = '2px solid green';
        });

        // 5. Add an event listener to the button to change styles dynamically
        document.getElementById('change-style-btn').addEventListener('click', function() {
            mainHeading.classList.add('highlight');
            uniqueParagraph.classList.add('red-text');
        });

        
   

