const formGroup = ({ placeholder, label, value, onChange }) => {
  return (
    <div className="label_container">
      <label htmlFor={label}>{placeholder}</label>
      <input value={value} onChange={onChange} type="text" id={label} />
    </div>
  );
};

export default formGroup;
