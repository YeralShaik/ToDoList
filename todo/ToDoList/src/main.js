document.addEventListener('DOMContentLoaded', function () {
    // Obtener elementos por ID
    const background = document.getElementById('background');
    const headerSection = document.getElementById('header-section');
    const navBarContainer = document.getElementById('navBar-container');
    const taskSection = document.getElementById('task-section');
    const createTaskSection = document.getElementById('createTask-section');
    const taskContainer = document.getElementById('task-container');
    const  createTaskContainer = document.getElementById('createTask-container');
    const  addTask = document.getElementById('add-Task');
    const iconX = document.getElementById('iconx');
    
    // Función para cambiar el estado de las secciones
    function homePage() {
        // Remove 'inactive' y muestra la sección de tareas
        //background.classList.remove('inactive')
        //background.style.height = '700px';
        headerSection.classList.remove('inactive');
        navBarContainer.classList.remove('inactive');
        taskSection.classList.remove('inactive');
        taskContainer.classList.remove('inactive');
        addTask.classList.remove('inactive')
        createTaskSection.classList.add('inactive');
        createTaskContainer.classList.add('inactive')
    }

    // Función para cambiar el estado de las secciones
    function  showCreateTaskSection() {
        // Remove 'inactive' y muestra la sección de creación de tareas
       
        headerSection.classList.add('inactive');
        navBarContainer.classList.remove('inactive');
        taskSection.classList.add('inactive');
        createTaskSection.classList.remove('inactive');
        createTaskContainer.classList.remove('inactive')
        iconX.classList.remove('inactive')
    }

    // Navegacion
    function navigation() {
        console.log(location);

        // Comprobar el hash de la URL
        if (location.hash.startsWith('#createtask')) {
            showCreateTaskSection();
        } else {
            homePage();
        }
    }

    // Click en el botón
    const createTaskBtn = document.getElementById('add-Button');

    createTaskBtn.addEventListener('click', () => {
        showCreateTaskSection();
    });

    iconX.addEventListener('click', () => {
        homePage()
    })

    // Llamar a la función de navegación al cargar la página
    navigation();
});
