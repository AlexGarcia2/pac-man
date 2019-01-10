export function buildUI() {
  let board = document.getElementById('pac-board');
  let gameTable = document.createElement('table');

  let htmlOutput = `<tbody>`;
  let uid = 0;

  for (let row=0; row<5; row++) {
    htmlOutput = `${htmlOutput}<tr class="row-${row}">`;

    for (let cell = 0; cell < 6; cell++) {
      htmlOutput = `${htmlOutput}<td class="col-${cell}" id=${++uid}>•</td>`;
    }
    htmlOutput = `${htmlOutput}</tr>`;
  }

  htmlOutput = `${htmlOutput}</tbody>`;
  gameTable.innerHTML = htmlOutput;
  board.appendChild(gameTable);
}