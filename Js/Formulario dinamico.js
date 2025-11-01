
const tipoUsuario = document.getElementById('tipoUsuario');
const camposDinamicos = document.getElementById('camposDinamicos');
const formulario = document.getElementById('registroForm');


tipoUsuario.addEventListener('change', function() {
    const tipo = this.value;
    
 
    camposDinamicos.innerHTML = '';
    

    if (tipo === 'estudiante') {
        mostrarCamposEstudiante();
    } else if (tipo === 'profesor') {
        mostrarCamposProfesor();
    } else if (tipo === 'administrador') {
        mostrarCamposAdministrador();
    }
});

function mostrarCamposEstudiante() {
    camposDinamicos.innerHTML = `
        <div class="form-group">
            <label for="nombre">Nombre Completo:</label>
            <input type="text" id="nombre" name="nombre" required>
        </div>
        
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        
        <div class="form-group">
            <label for="matricula">Matrícula:</label>
            <input type="text" id="matricula" name="matricula" required>
        </div>
        
        <div class="form-group">
            <label for="carrera">Carrera:</label>
            <input type="text" id="carrera" name="carrera" required>
        </div>
    `;
}

function mostrarCamposProfesor() {
    camposDinamicos.innerHTML = `
        <div class="form-group">
            <label for="nombre">Nombre Completo:</label>
            <input type="text" id="nombre" name="nombre" required>
        </div>
        
        <div class="form-group">
            <label for="email">Email Institucional:</label>
            <input type="email" id="email" name="email" required>
        </div>
        
        <div class="form-group">
            <label for="departamento">Departamento:</label>
            <select id="departamento" name="departamento" required>
                <option value="">-- Seleccione --</option>
                <option value="matematicas">Matemáticas</option>
                <option value="fisica">Física</option>
                <option value="computacion">Computación</option>
                <option value="quimica">Química</option>
            </select>
        </div>
        
        <div class="form-group">
            <label for="especialidad">Especialidad:</label>
            <input type="text" id="especialidad" name="especialidad" required>
        </div>
        
        <div class="form-group">
            <label for="telefono">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" required>
        </div>
    `;
}

function mostrarCamposAdministrador() {
    camposDinamicos.innerHTML = `
        <div class="form-group">
            <label for="nombre">Nombre Completo:</label>
            <input type="text" id="nombre" name="nombre" required>
        </div>
        
        <div class="form-group">
            <label for="email">Email Corporativo:</label>
            <input type="email" id="email" name="email" required>
        </div>
        
        <div class="form-group">
            <label for="area">Área de Trabajo:</label>
            <select id="area" name="area" required>
                <option value="">-- Seleccione --</option>
                <option value="recursos-humanos">Recursos Humanos</option>
                <option value="finanzas">Finanzas</option>
                <option value="sistemas">Sistemas</option>
                <option value="academico">Académico</option>
            </select>
        </div>
        
        <div class="form-group">
            <label for="nivelAcceso">Nivel de Acceso:</label>
            <select id="nivelAcceso" name="nivelAcceso" required>
                <option value="">-- Seleccione --</option>
                <option value="basico">Básico</option>
                <option value="intermedio">Intermedio</option>
                <option value="avanzado">Avanzado</option>
                <option value="total">Total</option>
            </select>
        </div>
        
        <div class="form-group">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required>
        </div>
    `;
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function validarCamposVacios() {
    const inputs = camposDinamicos.querySelectorAll('input[required], select[required]');
    let valido = true;
    
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.classList.add('error');
            valido = false;
        } else {
            input.classList.remove('error');
        }
    });
    
    return valido;
}


formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (tipoUsuario.value === '') {
        alert('Por favor, seleccione un tipo de usuario');
        tipoUsuario.focus();
        return;
    }
    
    if (!validarCamposVacios()) {
        alert('Por favor, complete todos los campos requeridos');
        return;
    }
    
    const emailInput = document.getElementById('email');
    if (emailInput && !validarEmail(emailInput.value)) {
        alert('Por favor, ingrese un email válido');
        emailInput.focus();
        emailInput.classList.add('error');
        return;
    }
    
    const formData = new FormData(formulario);
    const datos = {};
    formData.forEach((value, key) => {
        datos[key] = value;
    });
    
    console.log('Datos del formulario:', datos);
    alert('¡Registro exitoso!\n\nTipo: ' + datos.tipoUsuario + '\nNombre: ' + datos.nombre);
    
    formulario.reset();
    camposDinamicos.innerHTML = '';
});