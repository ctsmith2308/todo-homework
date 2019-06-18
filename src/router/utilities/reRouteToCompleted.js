const reRouteToCompleted = (history, viewCompleted) => {
  history.push('/#/completed')
  viewCompleted();
}

export default reRouteToCompleted;
