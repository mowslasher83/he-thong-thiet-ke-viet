const Button = ({ label, onClick }) => {
  return `<button onclick="${onClick}">${label}</button>`;
};

module.exports = Button;