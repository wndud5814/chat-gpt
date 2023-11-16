const ChatCard = ({ answer, question }) => {
  return (
    <li className="flex flex-col gap-4 mb-6">
      <div className="bg-gray-300 self-start mx-4 p-2 rounded-md shadow-lg whitespace-pre-wrap">
        {answer}
      </div>
      <div className="self-end bg-gray-200 mx-4 p-2 rounded-md shadow-lg whitespace-pre-wrap">
        {question}
      </div>
    </li>
  );
};

export default ChatCard;
