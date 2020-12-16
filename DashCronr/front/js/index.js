import api from "./services/api.js";
const ind = require ('../../back/src/utils/crontab');

function createRowCron(task) {
  // Seleciona e acessa no documento html na classe ".table-hosts" a tag "tbody"
  const rowCronContainer = document.querySelector(".table-hosts tbody");

  // string montada com cada valor colocada em colunas da linha da tabela
  const cronRow = `<tr>
    <td>${task.minutos}</td>
    <td>${task.horas}</td>
    <td>${task.diaMes}</td>
    <td>${task.mes}</td>
    <td>${task.diaSemana}</td>
    <td>${task.tarefa}</td>
    <td class="task-actions">${createActions(task)}</td>
  </tr>`;
  
  // inserindo a string cronRow no html na posição antes do fim "before end" da tag tbody
  rowCronContainer.insertAdjacentHTML("beforeend", cronRow);
}

async function loadtask() {
  const tasks = await ind.listTask();
  for (const task of tasks) {
    createRowCron(task);
  }
}

loadtask();


function createActions(task) {
  return `
    <i
      class="fas fa-pencil-alt mr-2"
      data-toggle="modal"
      data-target="#hostFormModal"
      onclick="loadFormUpdate(${task.tarefa}, '${task.horas}', '${task.diaMes}', '${task.mes}','${task.diaSemana}', '${task.minutos}')">
    </i>
    <i
      class="far fa-trash-alt mr-2"
      data-toggle="modal"
      data-target="#deleteModal"
      onclick="delete(${task.tarefa})">
    </i>
  `;
}



