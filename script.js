function atualizarHorario(){
    // Definir o horário;
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');

    // Definir a data;

    // Etapa 1: Associar valores de agora.get(Day e Month) a valores por extenso;

    const diaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]; // Associa valores do "getDay" a dias da semana por extenso (ex: 6 = sexta-feira);
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]; // Associa valores do "getMonth" a meses por extenso (ex: 6 = junho);

    // Etapa 2: Descobrir o dia do mês, da semana e em qual mês estamos através do agora.get(Date, Day, Month);

    const data = String(agora.getDate()).padStart(2, '0'); // Descobre o dia do mês, em números (ex: dia 13);
    const dia = diaSemana[agora.getDay()]; // Descobre o dia da semana, em número (ex: 6) e converte a um dos valores por extenso associados (no exemplo, sexta-feira);
    const mes = meses[agora.getMonth()]; // Descobre o mês, em número (ex: 6) e converte a um dos valores por extenso associados (no exemplo, junho);

    const dataFinal = `${dia}, ${data} de ${mes}`;

    // Exibir os valores com base no ID inserido no HTML;
    document.getElementById("horario").textContent = `${horas}:${minutos}`;
    document.getElementById("data").textContent = dataFinal;
}

setInterval(atualizarHorario, 1000);
atualizarHorario();