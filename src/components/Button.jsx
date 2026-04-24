const Button = ({ label, moviebtn }) => {
  return (
    <button 
      className={`font-bold text-white p-2 mt-3 rounded ${moviebtn ? 'w-full bg-red-700' : 'bg-red-500'}`}
    >
      {label || moviebtn}
    </button>
  );
};

export default Button;