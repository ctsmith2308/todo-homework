const reRoutToActive = (history, viewActive) => {
  history.push('/#/active')
  viewActive();
}

export default reRoutToActive
