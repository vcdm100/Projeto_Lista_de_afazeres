document.querySelector('#push').onclick = function () {
    if (document.querySelector('#task-input').value.length == 0) {
        alert("Por favor, insira uma tarefa...");
    } else {
        document.querySelector('#tasks').innerHTML += `        
            <div class="task">
                <span id="task-name">
                    ${document.querySelector('#task-input').value}
                </span>
                <button class="delete"><i class="ph-trash"></i></button>
            </div>   
        `;

        var currentTasks = document.querySelectorAll('.delete');
        for (var i = 0; 1 <= currentTasks.length; i++) {
            currentTasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }

    document.querySelector('#task-input').value = '';
}