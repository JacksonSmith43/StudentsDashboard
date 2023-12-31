window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_element = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {

        e.preventDefault(); // Verhindert das die Seite neu geladen wird.

        const task = input.value;

        const task_element = document.createElement('div');
        task_element.classList.add('task');

        const task_content_element = document.createElement('div');
        task_content_element.classList.add('content');

        task_element.appendChild(task_content_element);

        const task_input_element = document.createElement('input');
        task_input_element.classList.add('text');
        task_input_element.type = 'text';
        task_input_element.value = task;
        task_input_element.setAttribute('readonly', 'readonly');

        task_content_element.appendChild(task_input_element);

        const task_actions_element = document.createElement('div');
        task_actions_element.classList.add('actions');

        const task_edit_element = document.createElement('button');
        task_edit_element.classList.add('edit');
        task_edit_element.innerText = 'Edit';

        const task_delete_element = document.createElement('button');
        task_delete_element.classList.add('delete');
        task_delete_element.innerText = 'Delete';

        task_actions_element.appendChild(task_edit_element);
        task_actions_element.appendChild(task_delete_element);

        task_element.appendChild(task_actions_element);

        list_element.appendChild(task_element);

        input.value = '';

        saves_data();
    });

    list_element.addEventListener('click', (e) => {
        const target = e.target;

        if (target.classList.contains('edit')) {
            const task_element = target.closest('.task');
            const task_input_element = task_element.querySelector('.text');
            const task_edit_element = task_element.querySelector('.edit');

            if (task_edit_element.innerText.toLowerCase() === "edit") {
                task_edit_element.innerText = "Save";
                task_input_element.removeAttribute("readonly");
                task_input_element.focus();
            } else {
                task_edit_element.innerText = "Edit";
                task_input_element.setAttribute("readonly", "readonly");
            }

            saves_data();
        } else if (target.classList.contains('delete')) {
            const task_element = target.closest('.task');
            list_element.removeChild(task_element);
            saves_data();
        }
    });

    function saves_data() {
        localStorage.setItem("data", list_element.innerHTML);
    }

    function shows_saved_tasks() {
        list_element.innerHTML = localStorage.getItem("data");
    }

    shows_saved_tasks();
});
