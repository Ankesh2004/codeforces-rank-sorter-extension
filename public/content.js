
window.onload = function () {
  const table = document.querySelector('.datatable');
  if (!table) {
    console.log('Data table not found');
    return;
  }

  const headerRow = table.querySelector('.first-row');
  
  // Add new rank column
  const newHeader = document.createElement('th');
  newHeader.classList.add('top');
  newHeader.textContent = 'Rank';
  headerRow.appendChild(newHeader);
  
  console.log('Submission Data Table found');
  
  let rows = Array.from(table.querySelectorAll('tr[data-submission-id]'));
  console.log(`Found ${rows.length} rows`);

  const rankClasses = {
    "user-gray": "Newbie",
    "user-green": "Pupil",
    "user-cyan": "Specialist",
    "user-blue": "Expert",
    "user-violet": "Candidate Master",
    "user-orange": "Master",
    "user-red": "Grandmaster",
  };

  rows.forEach(row => {
    const userCell = row.querySelector('td.status-party-cell');
    if (!userCell) {
      console.log('User cell not found for row:', row);
      return;
    }

    const userLink = userCell.querySelector('a.rated-user');
    if (!userLink) {
      console.log('User link not found for user cell:', userCell);
      return;
    }

    const rankClass = Object.keys(rankClasses).find(rankClass => userLink.classList.contains(rankClass));
    if (rankClass) {
      const rank = rankClasses[rankClass];
      // row.setAttribute('data-rank', rank);
      const rankCell = document.createElement('td');
      rankCell.classList.add('data-rank');
      rankCell.textContent = rank; // You can customize this content
      row.appendChild(rankCell);
    } else {
      console.log('Rank class not found for user link:', userLink);
    }
  });

  const sortHeading = document.createElement('h3');
  sortHeading.innerText = 'Sort by Rank: ';
  table.parentElement.insertBefore(sortHeading, table);

  const newbieRanked = document.createElement('button');
  newbieRanked.innerText = 'Newbie';
  newbieRanked.classList.add('button-style');
  newbieRanked.classList.add('newbie');
  newbieRanked.onclick = () => sortTableByRank('Newbie');
  table.parentElement.insertBefore(newbieRanked, table);

  const pupilRanked = document.createElement('button');
  pupilRanked.innerText = 'Pupil';
  pupilRanked.classList.add('button-style');
  pupilRanked.classList.add('pupil');
  pupilRanked.onclick = () => sortTableByRank('Pupil');
  table.parentElement.insertBefore(pupilRanked, table);

  const specialistRanked = document.createElement('button');
  specialistRanked.innerText = 'Specialist';
  specialistRanked.classList.add('button-style');
  specialistRanked.classList.add('specialist');
  specialistRanked.onclick = () => sortTableByRank('Specialist');
  table.parentElement.insertBefore(specialistRanked, table);

  const expertRanked = document.createElement('button');
  expertRanked.innerText = 'Expert';
  expertRanked.classList.add('button-style');
  expertRanked.classList.add('expert');
  expertRanked.onclick = () => sortTableByRank('Expert');
  table.parentElement.insertBefore(expertRanked, table);

  const candidateMasterRanked = document.createElement('button');
  candidateMasterRanked.innerText = 'Candidate Master';
  candidateMasterRanked.classList.add('button-style');
  candidateMasterRanked.classList.add('candidate-master');
  candidateMasterRanked.onclick = () => sortTableByRank('Candidate Master');
  table.parentElement.insertBefore(candidateMasterRanked, table);

  const masterRanked = document.createElement('button');
  masterRanked.innerText = 'Master';
  masterRanked.classList.add('button-style');
  masterRanked.classList.add('master');
  masterRanked.onclick = () => sortTableByRank('Master');
  table.parentElement.insertBefore(masterRanked, table);

  const grandmasterRanked = document.createElement('button');
  grandmasterRanked.innerText = 'Grandmaster';
  grandmasterRanked.classList.add('button-style');
  grandmasterRanked.classList.add('grandmaster');
  grandmasterRanked.onclick = () => sortTableByRank('Grandmaster');
  table.parentElement.insertBefore(grandmasterRanked, table);

  function sortTableByRank(Rank) {
    let newRows=rows;
     newRows = newRows.filter(row => {
      const rankCell = row.querySelector('td.data-rank');
      const rank = rankCell ? rankCell.textContent : '';
      return rank === Rank;
    });
    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }
    newRows.forEach(row => {
      table.appendChild(row);
    });
  }

};
