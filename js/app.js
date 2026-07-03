function cadastrarAluno() {

    let nome =
        document.getElementById("nomeAluno").value;

    let email =
        document.getElementById("emailAluno").value;

    let cidade =
        document.getElementById("cidadeAluno").value;

    let disciplina =
        document.getElementById("disciplinaAluno").value;

    let senha =
        document.getElementById("senhaAluno").value;


    let aluno = {

        nome: nome,
        email: email,
        cidade: cidade,
        senha: senha,
        disciplina: disciplina

    };


    let alunos = JSON.parse(

        localStorage.getItem("alunos")

    ) || [];


    alunos.push(aluno);


    localStorage.setItem(

        "alunos",

        JSON.stringify(alunos)

    );

    document.getElementById("nomeAluno").value = "";
    document.getElementById("emailAluno").value = "";
    document.getElementById("cidadeAluno").value = "";
    document.getElementById("senhaAluno").value = "";
    document.getElementById("disciplinaAluno").selectedIndex = 0;

    alert("Aluno cadastrado com sucesso!");

    window.location.href = "login.html";

}

function cadastrarProfessor() {

    let nome =
        document.getElementById("nomeProfessor").value;

    let materia =
        document.getElementById("materiaProfessor").value;

    let horario =
        document.getElementById("horarioProfessor").value;


    let professor = {

        nome: nome,
        materia: materia,
        horario: horario

    };


    let professores = JSON.parse(
        localStorage.getItem("professores")
    ) || [];


    professores.push(professor);


    localStorage.setItem(
        "professores",
        JSON.stringify(professores)
    );

    document.getElementById("nomeProfessor").value = "";
    document.getElementById("materiaProfessor").selectedIndex = 0;
    document.getElementById("horarioProfessor").value = "";

    alert("Professor cadastrado com sucesso!");
}

function buscarProfessor() {

    let professores = JSON.parse(
        localStorage.getItem("professores")
    ) || [];

    let disciplinaEscolhida =
        document.getElementById("disciplinaBusca").value;

    let resultado = "";

    professores.forEach(function(professor) {

        if (professor.materia === disciplinaEscolhida) {

            resultado += `

                <h3>${professor.nome}</h3>

                <p>Matéria: ${professor.materia}</p>

                <p>Horário: ${professor.horario}</p>

                <button onclick="agendarAula('${professor.nome}','${professor.materia}','${professor.horario}')">
    Agendar Aula
</button>
            
            
                <hr>

            `;

}
        

    });

    if (resultado === "") {

        resultado =
            "<p>Nenhum professor encontrado.</p>";

    }

    document.getElementById(
        "resultadoProfessor"
    ).innerHTML = resultado;

}

function agendarAula(nome, materia, horario) {

    let agendamento = {

        professor: nome,
        materia: materia,
        horario: horario

    };


    let agendamentos = JSON.parse(

        localStorage.getItem("agendamentos")

    ) || [];


    agendamentos.push(agendamento);


    localStorage.setItem(

        "agendamentos",

        JSON.stringify(agendamentos)

    );


    alert("Aula agendada com sucesso!");

}

function mostrarAgendamentos() {

    let agendamentos = JSON.parse(
        localStorage.getItem("agendamentos")
    ) || [];

    let resultado = "";

    agendamentos.forEach(function(aula, index) {

        resultado += `

        <h3>${aula.professor}</h3>

        <p>Matéria: ${aula.materia}</p>

        <p>Horário: ${aula.horario}</p>

        <button onclick="cancelarAgendamento(${index})">

            Cancelar

        </button>

        <hr>

        `;

    });

    if (resultado === "") {

        resultado = "<p>Nenhum agendamento encontrado.</p>";

    }

    document.getElementById(

        "listaAgendamentos"

    ).innerHTML = resultado;
}

function cancelarAgendamento(index) {

    let agendamentos = JSON.parse(
        localStorage.getItem("agendamentos")
    ) || [];

    agendamentos.splice(index, 1);

    localStorage.setItem(
        "agendamentos",
        JSON.stringify(agendamentos)
    );

    alert("Agendamento cancelado!");

    location.reload();
}

function fazerLogin() {

    let email =
        document.getElementById("emailLogin").value;

    let senha =
        document.getElementById("senhaLogin").value;

    let alunos = JSON.parse(
        localStorage.getItem("alunos")
    ) || [];

    let alunoEncontrado = alunos.find(function(aluno) {

        return aluno.email === email &&
               aluno.senha === senha;

    });

    if (alunoEncontrado) {

    localStorage.setItem(
        "usuarioLogado",
        alunoEncontrado.nome
    );

    alert("Login realizado com sucesso!");

    window.location.href = "buscar-professor.html";

}

    else {

        alert("E-mail ou senha inválidos!");

    }
}
function mostrarUsuarioLogado() {

    let nome = localStorage.getItem("usuarioLogado");

    if (nome) {

        document.getElementById("boasVindas").innerHTML =
            "Olá, " + nome + "! 👋<br>Bem-vindo ao EduConect.";

    }

}