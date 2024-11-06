// Você foi contratado para desenvolver uma solução para consultas referentes aos dados dos alunos. Com base nos dados de um aluno, você deverá desenvolver a lógica para consultar o curso, matérias, situação da matrícula e gerar a carteirinha de estudante.

const alunoCurso = {
    nome: "João",
    idade: 31,
    curso: "FullStack",
    instituicao: "Inovação Br",
    materias: ["Html", "Css", "JavaScript", "Python"],
    situacaoMatricula: true,
  };

// Desenvolva um algoritmo que recebe via prompt o tipo de consulta que o sistema deve realizar. A entrada deverá ser um número de 1 a 4, representando as opções a seguir:
// 1: Curso
// 2: Matéria
// 3: Situação de Matrícula
// 4: Gerar Carteira

const whatWantConsult = prompt('O que deseja consultar? Digite 1 para Curso, digite 2 para Matéria, digite 3 para Situação da Matrícula ou digite 4 para Gerar Carteira.');
const studentName = prompt('Digite o nome do aluno:')
const formattedStudentName = studentName ? studentName[0].toUpperCase() + studentName.slice(1) : '';

function unregisteredStudent() {
    if(formattedStudentName != alunoCurso.nome) {
        alert('Aluno(a) não inscrito(a) na instituição.');
    }
}

unregisteredStudent();

function getTheCourse() {
    if(whatWantConsult == '1' && formattedStudentName == alunoCurso.nome) {
       return alert(`O curso em que o(a) aluno(a) está inscrito é: ${alunoCurso.curso}.`);
    }
}

getTheCourse();

function getTheSubjects() {
    if(whatWantConsult == '2' && formattedStudentName == alunoCurso.nome) {
        const materials = alunoCurso.materias.join(', ');
        alert(`As matérias em que o(a) aluno(a) está inscrito(a) são: ${materials}.`);
    } 
}

getTheSubjects();

function registrationStatus() {
    if(whatWantConsult == '3' && formattedStudentName == alunoCurso.nome) {
        if(alunoCurso.situacaoMatricula == true) {
            alert('Aluno(a) ativo(a)');
        } else {
            alert('Aluno(a) inativo(a)');
        }
    }
}

registrationStatus();

function generateStudentCard() {
    if(whatWantConsult == '4' && formattedStudentName == alunoCurso.nome) {
        let cardInformation = `Name: ${alunoCurso.nome}, Idade: ${alunoCurso.idade}, Curso: ${alunoCurso.curso}, Instituição: ${alunoCurso.instituicao}.`
        alert(`SUA CARTEIRINHA: \n${cardInformation}`);
    } 
}

generateStudentCard();

