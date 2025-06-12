document.addEventListener('DOMContentLoaded', () => {
    const courseFiles = {
        'html-course': [
            { name: 'week1.md', title: 'Tuần 1: HTML cơ bản' },
            { name: 'week2.md', title: 'Tuần 2: Semantic HTML' }
        ],
        'css-course': [
            { name: 'week1.md', title: 'Tuần 1: CSS cơ bản' },
            { name: 'week2.md', title: 'Tuần 2: Flexbox' }
        ]
    };

    document.querySelectorAll('.course-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const courseId = link.dataset.courseId;
            const files = courseFiles[courseId] || [];

            const fileList = document.createElement('div');
            fileList.className = 'file-list';
            fileList.innerHTML = `<h2>Danh sách ghi chú: ${link.textContent}</h2><ul>${files.map(file => `<li><a href="/courses/${courseId}/${file.name}">${file.title}</a></li>`).join('')}</ul>`;

            const courseList = document.querySelector('.course-list');
            courseList.innerHTML = '';
            courseList.appendChild(fileList);

            history.pushState(null, '', link.href);
        });
    });
});
