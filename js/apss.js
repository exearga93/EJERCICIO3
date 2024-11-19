/*3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. 
*/ 

document.getElementById('agregarTarea').addEventListener('click', function() {
    const tareaInput = document.getElementById('inputTarea');
    const tareaTexto = tareaInput.value.trim();

    if (tareaTexto) {
        const listaTareas = document.getElementById('listaTareas');
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = tareaTexto;

        const botonEliminar = document.createElement('button');
        botonEliminar.className = 'btn btn-danger btn-sm';
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', function() {
            listaTareas.removeChild(li);
        });

        li.appendChild(botonEliminar);
        listaTareas.appendChild(li);

        tareaInput.value = '';
    } else {
        alert('Por favor, ingresa una tarea.');
    }
});
