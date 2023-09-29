const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const FILE_PATH = './config.ts';

const makeCommit = async (n) => {
  if (n === 0) return simpleGit().push();
  const { default: random } = await import('random');
  const x = random.int(0, 54);
  const y = random.int(0, 6);
  const DATE = moment()
    //.subtract(8, 'years')
    .subtract(3, 'days')
    .add(x, 'weeks')
    .add(y, 'days')
    .format();

  const data = {
    date: "Update the the schea the back end file",
  };
  console.log(DATE);
  console.log(DATE);
  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit()
      .add([FILE_PATH])
      .commit(DATE, { '--date': DATE }, () => makeCommit(--n));
  });
};

makeCommit(10);

/*
const simpleGit = require('simple-git');

const performPull = async () => {
  try {
    await simpleGit().pull();
    console.log('Pull successful.');

    // Additional code to handle the pulled changes
    // and perform any necessary tasks.
  } catch (error) {
    console.error('Pull failed:', error);
  }
};
git config user.email "<samsonmamushet3@gmail.com>"
performPull();
*/