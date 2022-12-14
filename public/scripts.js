// selectors for modals. First is for commenting, second for editing blog post.
const modal = document.getElementById('modal');
const modalEditPost = document.getElementById('modalEditPost');

// comment input on modal box
const commentInput = document.getElementById('commentInput');

// title and post input for editing a post modal.
const editPostInput = document.getElementById('editPostInput');
const editPostTitle = document.getElementById('editPostTitle');

// selectors for making a new blog post.
const blogText = document.getElementById('blogPost');
const blogPostBtn = document.getElementById('blogPostBtn');

// click checker for all buttons/links that get rendered on page.
const clickChecker = (ev) => {
    ev.preventDefault()
    switch (ev.target.id) {
        case 'homeBtn':
            homeHandler(ev);
            break;
        case 'dashboardBtn':
            dashboardHandler(ev);
            break;
        case 'loginBtn':
            loginHandler(ev);
            break;
        case 'logoutBtn':
            logoutHandler(ev);
            break;
        case 'signUpBtn':
            signupHandler(ev);
            break;
        case 'signinBtn':
            signinBtnHandler(ev);
            break;
        case 'postBtn':
            postBtnHandler(ev);
            break;
        case 'blogPostBtn':
            blogPostBtnHandler(ev);
            break;
        case 'makeAccount':
            makeAccountHandler(ev);
            break;
        case 'commentLink':
            const clicked = ev.target.getAttribute('data-post')
            openModal(clicked);
            break;
        case 'saveCommentBtn':
            saveComment();
            break;
        case 'closeModal':
        case 'cancelBtn':
            closeModal()
            break;
        case 'removePost':
            removePostHandler(ev);
            break;
        case 'blogPreview':
            blogPreviewHandler(ev);
            break;
        case 'editPost':
            const edited = ev.target.getAttribute('data-post')
            openBlogModal(edited);
            break;
        case 'saveEditBtn':
            saveEdit();
            break;
    };
};

document.body.addEventListener('click', clickChecker);

//logic for buttons on main screen.
const dashboardHandler = async (ev) => {
    ev.preventDefault();
    const response = await fetch('/dashboard', {
        method: 'GET'
    });
    try {    
        if (response.ok) {
            document.location.replace('/dashboard')
        }
        else console.log('ERRRORRRRRRR')
    }
    catch (err) {response.status(500).json(err)}
};

const homeHandler = async (ev) => {
    ev.preventDefault();
    const response = await fetch('/', {
        method: 'GET'
    });
    try {    
        if (response.ok) {
            document.location.replace('/')
        }
        else console.log('ERRRORRRRRRR')
    }
    catch (err) {response.status(500).json(err)}
};

const loginHandler = async (ev) => {
    ev.preventDefault();
    const response = await fetch('/login', {
        method: 'GET'
    });
    try {    
        if (response.ok) {
            document.location.replace('/login')
        }
        else console.log('ERRRORRRRRRR')
    }
    catch (err) {response.status(500).json(err)}
};

const signupHandler = async (ev) => {
    ev.preventDefault();
    const response = await fetch('/signup', {
        method: 'GET'
    });
    try {    
        if (response.ok) {
            document.location.replace('/signup')
        }
        else console.log('ERRRORRRRRRR')
    }
    catch (err) {response.status(500).json(err)}
};

const logoutHandler = async (ev) => {
    ev.preventDefault();
    const response = await fetch('api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    try {    
        if (response.ok) {
            console.log('response fine')
            document.location.replace('/logout')
        }
        else console.log('ERRROR buddy')
    }
    catch (err) {response.status(500).json(err)}
};
