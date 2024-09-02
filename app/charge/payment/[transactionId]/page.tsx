type PaymentResultPageProps = {
  params: {
    transactionId: string;
  };
};

const PaymentResultPage = ({ params: { transactionId } }: PaymentResultPageProps) => {
  return (
    <div className="p-10 rounded-md bg-white">
      {`پرداخت شما با شماره پیگیری ${transactionId} با موفقیت انجام شد.`}
    </div>
  );
};

export default PaymentResultPage;
