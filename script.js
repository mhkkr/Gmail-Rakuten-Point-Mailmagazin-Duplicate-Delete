javascript: (() => {
  const $trs = document.querySelectorAll('.zA.zE');
  const database = [];
  const findData = (new_hantei) => {
    for (let i in database) {
      const data = database[i];
      if (data.hantei === new_hantei) return data;
    }
    return null;
  }
  Array.from($trs, $tr => {
    const $checkbox = $tr.querySelector('.oZ-jc.T-Jo.J-J5-Ji');
    const $from = $tr.querySelector('.zF');
    const email = $from.getAttribute('email');
    const name = $from.getAttribute('name');
    if (email.match('emagazine.rakuten.co.jp')) {
      const new_hantei = `${email}-${name}`;
      const data = findData(new_hantei);
      if (data) {
        data.$checkboxs.push($checkbox);
      } else {
        database.push({
          hantei: new_hantei,
          $checkboxs: [$checkbox]
        });
      }
    }
  });
  database.forEach(data => {
    if (data.$checkboxs.length > 1) {
      data.$checkboxs.forEach(($checkbox, index) => {
        if (index !== 0) $checkbox.click();
      })
    }
  });
})();