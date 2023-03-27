import { DateTime } from '../node_modules/luxon/src/luxon.js';

const generateDate = () => {
  let suffix;
  const date = DateTime.now().toFormat('d');

  if (+date[1] === 1 && +date !== 11) {
    suffix = 'st';
  } else if (+date[1] === 2 && +date !== 12) {
    suffix = 'nd';
  } else if (+date[1] === 3 && +date !== 13) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  setInterval(() => {
    const now = DateTime.now().toFormat(
      `MMMM dd'${suffix}' yyyy', ' hh:mm:ss a`,
    );
    document.getElementById('date').innerHTML = now;
  }, 1000);
};

export default generateDate;
