import { setViewAll, setViewActive, setViewCompleted } from '../../actions/listActions';

const navigateToAll = history => {
  console.log(history)
  history.push('/#/all');
  setViewAll();
};

const navigateToActive = history => {
  history.push('/#/active')
  setViewActive();
};

const navigateToCompleted = history => {
  history.push('/#/completed')
  setViewCompleted();
};

const historyRouter = (view, history) => {
    switch(view){
    case 'viewAll':
      navigateToAll(history);
    case 'viewActive':
      navigateToActive(history);
    case 'viewCompleted':
      navigateToCompleted(history);
  }
}

export default historyRouter;
