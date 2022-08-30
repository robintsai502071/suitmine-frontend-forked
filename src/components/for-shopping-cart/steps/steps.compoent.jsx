const StepsArray = ['購物車', '填寫資料', '訂單確認'];

const Steps = ({ stepStatus }) => {
  return (
    <div className="steps d-flex justify-content-center text-center mt-4 mt-md-5">
      {StepsArray.map((step, stepIndex) => (
        <div className="steps__item" key={stepIndex}>
          <div
            className={`steps__item__number ${
              stepStatus === 'cart' && stepIndex === 0 ? 'active' : ''
            }`}
          >
            {stepIndex + 1}
          </div>
          <div className="steps__item__description">{step}</div>
        </div>
      ))}
    </div>
  );
};
export default Steps;
